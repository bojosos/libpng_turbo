/* Wrapper ownership, layout and exception tests, independent of libpng. */
#include "ptpng.hpp"
#include <algorithm>
#include <array>
#include <cstdio>
#include <cstring>
#include <type_traits>
#include <vector>

#ifdef PTPNG_TEST_SPAN
#if !defined(__cpp_lib_span) || __cpp_lib_span < 202002L
#error "The C++20 wrapper test must compile the span overloads"
#endif
#endif

static int failures;
#define CHECK(expr) do { if (!(expr)) { \
    std::fprintf(stderr, "line %d: %s\n", __LINE__, #expr); ++failures; \
} } while (0)

static_assert(!std::is_copy_constructible_v<ptpng::image>);
static_assert(!std::is_copy_assignable_v<ptpng::image>);
static_assert(std::is_nothrow_move_constructible_v<ptpng::image>);
static_assert(std::is_nothrow_move_assignable_v<ptpng::image>);
static_assert(!std::is_copy_constructible_v<ptpng::encoded_buffer>);
static_assert(!std::is_copy_assignable_v<ptpng::encoded_buffer>);
static_assert(std::is_nothrow_move_constructible_v<ptpng::encoded_buffer>);
static_assert(std::is_nothrow_move_assignable_v<ptpng::encoded_buffer>);

template<class F> static void expect_error(int code, F &&f) {
    try {
        f();
        CHECK(false);
    } catch (const ptpng::error &e) {
        CHECK(e.code() == code);
        CHECK(std::strcmp(e.what(), ptpng_strerror(code)) == 0);
    }
}

static std::uint32_t crc32(const std::uint8_t *p, std::size_t n) {
    std::uint32_t crc = 0xffffffffu;
    while (n--) {
        crc ^= *p++;
        for (unsigned k = 0; k != 8; ++k)
            crc = (crc >> 1) ^ ((crc & 1) ? 0xedb88320u : 0u);
    }
    return crc ^ 0xffffffffu;
}

static void be32(std::uint8_t *p, std::uint32_t value) {
    for (unsigned i = 0; i != 4; ++i)
        p[i] = static_cast<std::uint8_t>(value >> (24 - i * 8));
}

static void chunk(std::vector<std::uint8_t> &png, const char *type,
                  const void *data, std::size_t size) {
    const auto offset = png.size();
    png.resize(offset + size + 12);
    auto *p = png.data() + offset;
    be32(p, static_cast<std::uint32_t>(size));
    std::memcpy(p + 4, type, 4);
    if (size) std::memcpy(p + 8, data, size);
    be32(p + 8 + size, crc32(p + 4, size + 4));
}

static void roundtrips() {
    const std::array colors = {ptpng::color_type::gray, ptpng::color_type::rgb,
                              ptpng::color_type::gray_alpha, ptpng::color_type::rgba};
    for (const auto color : colors) {
        const unsigned channels = color == ptpng::color_type::gray ? 1 :
            color == ptpng::color_type::rgb ? 3 : color == ptpng::color_type::gray_alpha ? 2 : 4;
        for (const auto depth : {ptpng::bit_depth::eight, ptpng::bit_depth::sixteen}) {
            const auto row_bytes = std::size_t{7} * channels * (static_cast<unsigned>(depth) / 8);
            for (const std::size_t padding : {std::size_t{0}, std::size_t{11}}) {
                const auto stride = row_bytes + padding;
                /* Exactly enough input, with no padding after the final row. */
                std::vector<std::uint8_t> pixels(stride * 2 + row_bytes, 0xee);
                for (std::size_t y = 0; y != 3; ++y)
                    for (std::size_t x = 0; x != row_bytes; ++x)
                        pixels[y * stride + x] = static_cast<std::uint8_t>(x * 37 + y * 91);
                const ptpng::pixel_view view(pixels.data(), pixels.size(), 7, 3, color, depth,
                                              padding ? stride : 0);
                for (const auto filtering : {ptpng::filter::adaptive, ptpng::filter::none,
                        ptpng::filter::sub, ptpng::filter::up, ptpng::filter::average,
                        ptpng::filter::paeth}) {
                    auto png = ptpng::encode(view, {filtering});
                    auto image = ptpng::decode(png.data(), png.size());
                    CHECK(png && !png.empty() && image && !image.empty());
                    CHECK(image.width() == 7 && image.height() == 3);
                    CHECK(image.layout().color == color && image.layout().depth == depth);
                    CHECK(image.layout().channels == channels && image.layout().row_bytes == row_bytes);
                    CHECK(image.size() == row_bytes * 3);
                    for (std::size_t y = 0; y != 3; ++y)
                        CHECK(std::memcmp(image.data() + y * row_bytes,
                                          pixels.data() + y * stride, row_bytes) == 0);
                    auto png2 = ptpng::encode(image);
                    auto image2 = ptpng::decode(png2.data(), png2.size());
                    CHECK(image2.size() == image.size());
                    CHECK(std::memcmp(image2.data(), image.data(), image.size()) == 0);
                }
            }
        }
    }
}

static std::vector<std::uint8_t> with_metadata(bool bad_chunk = false) {
    const std::uint8_t pixels[] = {17, 29, 43, 255};
    auto png = ptpng::encode({pixels, sizeof(pixels), 1, 1});
    std::vector<std::uint8_t> result(png.data(), png.data() + 33);
    const char text[] = "title\0owned metadata";
    const std::uint8_t exif[] = {0x49, 0x49, 0x2a, 0, 8, 0, 0, 0};
    chunk(result, "tEXt", text, sizeof(text) - 1);
    chunk(result, "eXIf", exif, sizeof(exif));
    if (bad_chunk) chunk(result, "FAIL", nullptr, 0);
    result.insert(result.end(), png.data() + 33, png.data() + png.size());
    return result;
}

static void ownership() {
    auto source = with_metadata();
    auto owner = ptpng::decode(source.data(), source.size());
    auto *pixels = owner.data();
    const char *text = owner.source_info().texts[0].text;
    const auto *exif = owner.source_info().eXIf_data;
    CHECK(owner.source_info().num_texts == 1);
    CHECK(owner.source_info().has_eXIf && owner.source_info().eXIf_len == 8);
    std::fill(source.begin(), source.end(), std::uint8_t{0});
    CHECK(std::strcmp(text, "owned metadata") == 0 && exif[0] == 0x49);

    ptpng::image moved(std::move(owner));
    CHECK(!owner && owner.empty() && owner.width() == 0);
    CHECK(owner.source_info().num_texts == 0 && owner.source_info()._n_allocs == 0);
    CHECK(moved.data() == pixels && moved.source_info().texts[0].text == text);
    auto another_source = with_metadata();
    auto assigned = ptpng::decode(another_source.data(), another_source.size());
    assigned = std::move(moved); // Releases existing pixels and metadata first.
    CHECK(!moved && moved.empty() && moved.source_info()._n_allocs == 0);
    CHECK(assigned.data() == pixels && assigned.source_info().eXIf_data == exif);
    CHECK(std::strcmp(assigned.source_info().texts[0].text, "owned metadata") == 0);
    auto &self = assigned;
    assigned = std::move(self);
    CHECK(assigned.data() == pixels && assigned.source_info().texts[0].text == text);

    auto png = ptpng::encode(assigned);
    auto *encoded = png.data();
    const auto size = png.size();
    ptpng::encoded_buffer moved_png(std::move(png));
    CHECK(!png && png.empty());
    auto assigned_png = ptpng::encode(assigned);
    assigned_png = std::move(moved_png);
    CHECK(!moved_png && moved_png.empty());
    CHECK(assigned_png.data() == encoded && assigned_png.size() == size);
    auto &self_png = assigned_png;
    assigned_png = std::move(self_png);
    CHECK(assigned_png.data() == encoded && assigned_png.size() == size);
    assigned = ptpng::image{};
    CHECK(!assigned && assigned.empty() && assigned.source_info()._n_allocs == 0);
    assigned_png = ptpng::encoded_buffer{};
    CHECK(!assigned_png && assigned_png.empty());
}

static void converted_layouts() {
    const std::uint8_t rgb16[] = {0x12,0x34, 0x56,0x78, 0x9a,0xbc,
                                 0xde,0xf0, 0x11,0x22, 0x33,0x44};
    auto png = ptpng::encode({rgb16, sizeof(rgb16), 2, 1, ptpng::color_type::rgb,
                             ptpng::bit_depth::sixteen});
    ptpng::decode_options opts;
    opts.output = ptpng::output_format::rgba8;
    auto rgba = ptpng::decode(png.data(), png.size(), opts);
    const std::uint8_t expected_rgba[] = {0x12,0x56,0x9a,255, 0xde,0x11,0x33,255};
    CHECK(rgba.source_info().color_type == 2 && rgba.source_info().bit_depth == 16);
    CHECK(rgba.source_info().channels == 3 && rgba.source_info().rowbytes == 8);
    CHECK(rgba.layout().color == ptpng::color_type::rgba);
    CHECK(rgba.layout().depth == ptpng::bit_depth::eight && rgba.layout().channels == 4);
    CHECK(rgba.size() == sizeof(expected_rgba));
    CHECK(std::memcmp(rgba.data(), expected_rgba, sizeof(expected_rgba)) == 0);
    auto reencoded = ptpng::encode(rgba);
    auto native = ptpng::decode(reencoded.data(), reencoded.size());
    CHECK(native.source_info().color_type == 6 && native.source_info().bit_depth == 8);
    CHECK(native.size() == rgba.size() && std::memcmp(native.data(), rgba.data(), rgba.size()) == 0);
    opts.output = ptpng::output_format::rgb8;
    auto rgb = ptpng::decode(png.data(), png.size(), opts);
    const std::uint8_t expected_rgb[] = {0x12,0x56,0x9a, 0xde,0x11,0x33};
    CHECK(rgb.layout().color == ptpng::color_type::rgb && rgb.layout().channels == 3);
    CHECK(rgb.layout().depth == ptpng::bit_depth::eight && rgb.layout().row_bytes == 6);
    CHECK(rgb.size() == sizeof(expected_rgb));
    CHECK(std::memcmp(rgb.data(), expected_rgb, sizeof(expected_rgb)) == 0);

    /* Palette source metadata must remain palette metadata after expansion. */
    const std::uint8_t indices[] = {0, 1};
    auto gray_png = ptpng::encode({indices, sizeof(indices), 2, 1, ptpng::color_type::gray});
    std::vector<std::uint8_t> palette_png(gray_png.data(), gray_png.data() + 33);
    palette_png[25] = 3;
    be32(palette_png.data() + 29, crc32(palette_png.data() + 12, 17));
    const std::uint8_t palette[] = {17,29,43, 61,73,89};
    const std::uint8_t alpha[] = {0, 173};
    chunk(palette_png, "PLTE", palette, sizeof(palette));
    chunk(palette_png, "tRNS", alpha, sizeof(alpha));
    palette_png.insert(palette_png.end(), gray_png.data() + 33, gray_png.data() + gray_png.size());
    opts.output = ptpng::output_format::rgba8;
    auto expanded = ptpng::decode(palette_png.data(), palette_png.size(), opts);
    const std::uint8_t expected_palette[] = {17,29,43,0, 61,73,89,173};
    CHECK(expanded.source_info().color_type == 3 && expanded.source_info().channels == 1);
    CHECK(expanded.source_info().num_palette == 2 && expanded.source_info().num_trans == 2);
    CHECK(expanded.layout().color == ptpng::color_type::rgba && expanded.layout().channels == 4);
    CHECK(expanded.size() == sizeof(expected_palette));
    CHECK(std::memcmp(expanded.data(), expected_palette, sizeof(expected_palette)) == 0);
    auto indexed = ptpng::decode(palette_png.data(), palette_png.size());
    CHECK(indexed.layout().color == ptpng::color_type::palette && indexed.layout().channels == 1);
    expect_error(PTPNG_E_COLOR_DEPTH, [&] { (void)ptpng::encode(indexed); });
}

static void errors() {
    expect_error(PTPNG_E_BAD_ARG, [] { (void)ptpng::decode(nullptr, 0); });
    const std::uint8_t invalid[] = {0, 1, 2};
    expect_error(PTPNG_E_BAD_SIGNATURE, [&] { (void)ptpng::decode(invalid, sizeof(invalid)); });
    expect_error(PTPNG_E_BAD_ARG, [] { (void)ptpng::encode(ptpng::pixel_view{}); });
    const std::uint8_t rgba[] = {17, 29, 43, 255};
    expect_error(PTPNG_E_BAD_ARG, [&] { (void)ptpng::encode({rgba, 3, 1, 1}); });
    auto png = ptpng::encode({rgba, sizeof(rgba), 1, 1});
    ptpng::decode_options opts;
    opts.max_bytes = 1;
    expect_error(PTPNG_E_TOO_LARGE, [&] { (void)ptpng::decode(png.data(), png.size(), opts); });
    opts = {};
    opts.output = static_cast<ptpng::output_format>(99);
    expect_error(PTPNG_E_BAD_ARG, [&] { (void)ptpng::decode(png.data(), png.size(), opts); });
    expect_error(PTPNG_E_BAD_ARG, [&] {
        (void)ptpng::encode({rgba, sizeof(rgba), 1, 1}, {static_cast<ptpng::filter>(99)});
    });
    png.data()[29] ^= 1; // IHDR CRC.
    expect_error(PTPNG_E_BAD_CRC, [&] { (void)ptpng::decode(png.data(), png.size()); });
    opts = {};
    opts.verify_crc = false;
    auto unchecked = ptpng::decode(png.data(), png.size(), opts);
    CHECK(unchecked.size() == sizeof(rgba) && std::memcmp(unchecked.data(), rgba, sizeof(rgba)) == 0);
    png.data()[29] ^= 1;
    const std::size_t idat_length = (static_cast<std::size_t>(png.data()[33]) << 24) |
        (static_cast<std::size_t>(png.data()[34]) << 16) |
        (static_cast<std::size_t>(png.data()[35]) << 8) | png.data()[36];
    png.data()[41 + idat_length - 1] ^= 1; // Zlib Adler, with a valid IDAT CRC.
    be32(png.data() + 41 + idat_length, crc32(png.data() + 37, idat_length + 4));
    expect_error(PTPNG_E_BAD_ADLER, [&] { (void)ptpng::decode(png.data(), png.size()); });
    opts = {};
    opts.verify_adler = false;
    auto unchecked_adler = ptpng::decode(png.data(), png.size(), opts);
    CHECK(unchecked_adler.size() == sizeof(rgba));
    CHECK(std::memcmp(unchecked_adler.data(), rgba, sizeof(rgba)) == 0);
    const auto broken = with_metadata(true);
    for (unsigned i = 0; i != 16; ++i)
        expect_error(PTPNG_E_UNKNOWN_CRITICAL, [&] {
            (void)ptpng::decode(broken.data(), broken.size());
        }); // The decoder has allocated ancillary buffers before this failure.
}

static void packed_layouts() {
    for (const auto depth : {ptpng::bit_depth::one, ptpng::bit_depth::two,
                            ptpng::bit_depth::four}) {
        const std::uint8_t packed[] = {
            depth == ptpng::bit_depth::one ? std::uint8_t{0x50} :
            depth == ptpng::bit_depth::two ? std::uint8_t{0x1b} : std::uint8_t{0x01},
            0x23
        };
        const std::size_t row_bytes = depth == ptpng::bit_depth::four ? 2 : 1;
        /* A None-filtered gray8 row has the same bytes as this packed row.
         * Replace only the IHDR width/depth and its CRC to make gray1/2/4. */
        auto png = ptpng::encode({packed, row_bytes, static_cast<std::uint32_t>(row_bytes),
                                  1, ptpng::color_type::gray}, {ptpng::filter::none});
        be32(png.data() + 16, 4);
        png.data()[24] = static_cast<std::uint8_t>(depth);
        be32(png.data() + 29, crc32(png.data() + 12, 17));
        auto native = ptpng::decode(png.data(), png.size());
        CHECK(native.layout().depth == depth && native.layout().row_bytes == row_bytes);
        CHECK(native.size() == row_bytes && std::memcmp(native.data(), packed, row_bytes) == 0);
        expect_error(PTPNG_E_COLOR_DEPTH, [&] { (void)ptpng::encode(native); });

        ptpng::decode_options options;
        options.output = ptpng::output_format::rgba8;
        auto expanded = ptpng::decode(png.data(), png.size(), options);
        CHECK(expanded.source_info().bit_depth == static_cast<unsigned>(depth));
        CHECK(expanded.layout().depth == ptpng::bit_depth::eight);
        CHECK(expanded.layout().color == ptpng::color_type::rgba && expanded.size() == 16);
        for (unsigned x = 0; x != 4; ++x) {
            const auto gray = depth == ptpng::bit_depth::one ? (x & 1) * 255 :
                depth == ptpng::bit_depth::two ? x * 85 : x * 17;
            CHECK(expanded.data()[x * 4] == gray && expanded.data()[x * 4 + 1] == gray);
            CHECK(expanded.data()[x * 4 + 2] == gray && expanded.data()[x * 4 + 3] == 255);
        }
        auto rgba_png = ptpng::encode(expanded);
        auto roundtrip = ptpng::decode(rgba_png.data(), rgba_png.size());
        CHECK(roundtrip.size() == expanded.size());
        CHECK(std::memcmp(roundtrip.data(), expanded.data(), expanded.size()) == 0);
    }
}

#ifdef PTPNG_TEST_SPAN
static void spans() {
    const std::array<std::uint8_t, 4> pixels = {17, 29, 43, 255};
    auto png = ptpng::encode(ptpng::pixel_view{std::span(pixels), 1, 1});
    auto image = ptpng::decode(png.bytes());
    CHECK(image.bytes().size() == pixels.size());
    CHECK(std::equal(image.bytes().begin(), image.bytes().end(), pixels.begin()));
    const auto &const_png = png;
    const auto &const_image = image;
    auto byte_image = ptpng::decode(std::as_bytes(const_png.bytes()));
    CHECK(byte_image.size() == image.size());
    auto byte_png = ptpng::encode(ptpng::pixel_view{std::as_bytes(const_image.bytes()), 1, 1});
    auto roundtrip = ptpng::decode(byte_png.bytes());
    CHECK(std::memcmp(roundtrip.data(), pixels.data(), pixels.size()) == 0);
}
#endif

int main() {
    try {
        roundtrips();
        ownership();
        converted_layouts();
        packed_layouts();
        errors();
#ifdef PTPNG_TEST_SPAN
        spans();
#endif
    } catch (const std::exception &e) {
        std::fprintf(stderr, "unexpected exception: %s\n", e.what());
        ++failures;
    }
    std::printf("C++ wrapper: %s\n", failures ? "FAILED" : "passed");
    return failures ? 1 : 0;
}
