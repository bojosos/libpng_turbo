/* Header-only C++17 ownership and convenience API. Link with ptpng.
 * Calls still require the same thread serialization as the C API. */
#ifndef PTPNG_HPP
#define PTPNG_HPP

#include "ptpng.h"
#include <cstddef>
#include <cstdint>
#include <stdexcept>
#include <utility>

#if defined(__has_include)
#if __has_include(<span>) && \
    (__cplusplus >= 202002L || (defined(_MSVC_LANG) && _MSVC_LANG >= 202002L))
#include <span>
#endif
#endif

namespace ptpng {

enum class output_format { native = PTPNG_OUT_NATIVE,
                           rgba8 = PTPNG_OUT_RGBA8, rgb8 = PTPNG_OUT_RGB8 };
enum class color_type { gray = 0, rgb = 2, palette = 3, gray_alpha = 4, rgba = 6 };
enum class bit_depth { one = 1, two = 2, four = 4, eight = 8, sixteen = 16 };
enum class filter { adaptive = PTPNG_ENCODE_FILTER_ADAPTIVE,
                    none = PTPNG_ENCODE_FILTER_NONE, sub = PTPNG_ENCODE_FILTER_SUB,
                    up = PTPNG_ENCODE_FILTER_UP, average = PTPNG_ENCODE_FILTER_AVERAGE,
                    paeth = PTPNG_ENCODE_FILTER_PAETH };

struct decode_options {
    output_format output = output_format::native;
    bool verify_crc = true;
    bool verify_adler = true;
    std::uint64_t max_bytes = PTPNG_DEFAULT_MAX_BYTES;
};

struct encode_options { filter filtering = filter::adaptive; };

/* Native sub-byte samples are packed MSB-first. Native 16-bit samples
 * and encoder input use PNG big-endian byte order, not host uint16_t order. */
struct pixel_layout {
    std::uint32_t width, height;
    color_type color;
    bit_depth depth;
    std::uint8_t channels;
    std::size_t row_bytes;
};

/* Borrowed encoder input. The size must cover every row; stride=0 is tight.
 * Encoding supports gray/RGB/gray+alpha/RGBA at 8 or 16 bits. */
struct pixel_view {
    const void *data = nullptr;
    std::size_t size = 0;
    std::uint32_t width = 0, height = 0;
    color_type color = color_type::rgba;
    bit_depth depth = bit_depth::eight;
    std::size_t stride = 0;

    pixel_view() = default;
    pixel_view(const void *bytes, std::size_t length, std::uint32_t w,
               std::uint32_t h, color_type c = color_type::rgba,
               bit_depth d = bit_depth::eight, std::size_t row_stride = 0) noexcept
        : data(bytes), size(length), width(w), height(h), color(c),
          depth(d), stride(row_stride) {}

#if defined(__cpp_lib_span) && __cpp_lib_span >= 202002L
    pixel_view(std::span<const std::uint8_t> bytes, std::uint32_t w,
               std::uint32_t h, color_type c = color_type::rgba,
               bit_depth d = bit_depth::eight, std::size_t row_stride = 0) noexcept
        : pixel_view(bytes.data(), bytes.size_bytes(), w, h, c, d, row_stride) {}
    pixel_view(std::span<const std::byte> bytes, std::uint32_t w,
               std::uint32_t h, color_type c = color_type::rgba,
               bit_depth d = bit_depth::eight, std::size_t row_stride = 0) noexcept
        : pixel_view(bytes.data(), bytes.size_bytes(), w, h, c, d, row_stride) {}
#endif
};

class error : public std::runtime_error {
public:
    explicit error(int code) : std::runtime_error(ptpng_strerror(code)), code_(code) {}
    int code() const noexcept { return code_; }
private:
    int code_;
};

class image;
class encoded_buffer;
[[nodiscard]] inline image decode(const void *data, std::size_t size,
                                  const decode_options &options = {});
[[nodiscard]] inline encoded_buffer encode(pixel_view pixels,
                                           const encode_options &options = {});

/* Owns a C allocation without copying the encoded bytes. */
class encoded_buffer {
public:
    encoded_buffer() noexcept = default;
    ~encoded_buffer() { ptpng_free(data_); }
    encoded_buffer(const encoded_buffer &) = delete;
    encoded_buffer &operator=(const encoded_buffer &) = delete;
    encoded_buffer(encoded_buffer &&other) noexcept
        : data_(std::exchange(other.data_, nullptr)),
          size_(std::exchange(other.size_, 0)) {}
    encoded_buffer &operator=(encoded_buffer &&other) noexcept {
        if (this != &other) {
            ptpng_free(data_);
            data_ = std::exchange(other.data_, nullptr);
            size_ = std::exchange(other.size_, 0);
        }
        return *this;
    }
    std::uint8_t *data() noexcept { return static_cast<std::uint8_t *>(data_); }
    const std::uint8_t *data() const noexcept {
        return static_cast<const std::uint8_t *>(data_);
    }
    std::size_t size() const noexcept { return size_; }
    bool empty() const noexcept { return size_ == 0; }
    explicit operator bool() const noexcept { return data_ != nullptr; }
#if defined(__cpp_lib_span) && __cpp_lib_span >= 202002L
    std::span<std::uint8_t> bytes() noexcept { return {data(), size()}; }
    std::span<const std::uint8_t> bytes() const noexcept { return {data(), size()}; }
#endif
private:
    void *data_ = nullptr;
    std::size_t size_ = 0;
    encoded_buffer(void *data, std::size_t size) noexcept : data_(data), size_(size) {}
    friend class image;
    friend encoded_buffer encode(pixel_view, const encode_options &);
};

/* Owns both pixels and all ancillary metadata. Heap-backed metadata pointers
 * survive moves, until the current owner is destroyed or assigned over.
 * References into source_info() itself belong to that particular object. */
class image {
public:
    image() noexcept = default;
    ~image() { ptpng_info_free(&info_); }
    image(const image &) = delete;
    image &operator=(const image &) = delete;
    image(image &&other) noexcept
        : pixels_(std::move(other.pixels_)), info_(std::exchange(other.info_, {})),
          format_(std::exchange(other.format_, output_format::native)) {}
    image &operator=(image &&other) noexcept {
        if (this != &other) {
            ptpng_info_free(&info_);
            pixels_ = std::move(other.pixels_);
            info_ = std::exchange(other.info_, {});
            format_ = std::exchange(other.format_, output_format::native);
        }
        return *this;
    }
    std::uint8_t *data() noexcept { return pixels_.data(); }
    const std::uint8_t *data() const noexcept { return pixels_.data(); }
    std::size_t size() const noexcept { return pixels_.size(); }
    bool empty() const noexcept { return pixels_.empty(); }
    explicit operator bool() const noexcept { return static_cast<bool>(pixels_); }
    std::uint32_t width() const noexcept { return info_.width; }
    std::uint32_t height() const noexcept { return info_.height; }

    /* Original IHDR and ancillary metadata from the C decoder. Its rowbytes
     * describes the returned buffer; use layout() for the output color/depth. */
    const ptpng_info &source_info() const noexcept { return info_; }
    pixel_layout layout() const noexcept {
        if (format_ == output_format::rgba8)
            return {width(), height(), color_type::rgba, bit_depth::eight, 4, info_.rowbytes};
        if (format_ == output_format::rgb8)
            return {width(), height(), color_type::rgb, bit_depth::eight, 3, info_.rowbytes};
        return {width(), height(), static_cast<color_type>(info_.color_type),
                static_cast<bit_depth>(info_.bit_depth), info_.channels, info_.rowbytes};
    }
    pixel_view view() const noexcept {
        const auto l = layout();
        return {data(), size(), l.width, l.height, l.color, l.depth, l.row_bytes};
    }
#if defined(__cpp_lib_span) && __cpp_lib_span >= 202002L
    std::span<std::uint8_t> bytes() noexcept { return {data(), size()}; }
    std::span<const std::uint8_t> bytes() const noexcept { return {data(), size()}; }
#endif
private:
    encoded_buffer pixels_;
    ptpng_info info_{};
    output_format format_ = output_format::native;
    image(void *pixels, std::size_t size, const ptpng_info &info,
          output_format format) noexcept : pixels_(pixels, size), info_(info), format_(format) {}
    friend image decode(const void *, std::size_t, const decode_options &);
};

inline image decode(const void *data, std::size_t size, const decode_options &options) {
    const ptpng_opts opts = {
        (options.verify_crc ? 0u : PTPNG_FLAG_NO_VERIFY_CRC) |
        (options.verify_adler ? 0u : PTPNG_FLAG_NO_VERIFY_ADLER),
        static_cast<int>(options.output), options.max_bytes
    };
    void *pixels = nullptr;
    std::size_t length = 0;
    ptpng_info info{};
    const int rc = ptpng_decode(data, size, &opts, &pixels, &length, &info);
    if (rc != PTPNG_OK) throw error(rc);
    return image(pixels, length, info, options.output);
}

inline encoded_buffer encode(pixel_view pixels, const encode_options &options) {
    const ptpng_encode_opts opts = {static_cast<int>(options.filtering)};
    void *data = nullptr;
    std::size_t length = 0;
    const int rc = ptpng_encode(pixels.data, pixels.size, pixels.width, pixels.height,
                                pixels.stride, static_cast<int>(pixels.color),
                                static_cast<int>(pixels.depth), &opts, &data, &length);
    if (rc != PTPNG_OK) throw error(rc);
    return encoded_buffer(data, length);
}

[[nodiscard]] inline encoded_buffer encode(const image &pixels,
                                           const encode_options &options = {}) {
    return encode(pixels.view(), options);
}

#if defined(__cpp_lib_span) && __cpp_lib_span >= 202002L
[[nodiscard]] inline image decode(std::span<const std::uint8_t> data,
                                  const decode_options &options = {}) {
    return decode(data.data(), data.size_bytes(), options);
}
[[nodiscard]] inline image decode(std::span<const std::byte> data,
                                  const decode_options &options = {}) {
    return decode(data.data(), data.size_bytes(), options);
}
#endif

} // namespace ptpng
#endif
