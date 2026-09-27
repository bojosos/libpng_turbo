/* Optional AArch64 IEEE CRC-32 instructions. Runtime detection keeps the
 * library usable on Armv8.0 CPUs that do not implement the CRC extension. */
#include "ptpng_internal.h"

#if (defined(__aarch64__) || defined(_M_ARM64)) && \
    (defined(_MSC_VER) || defined(__clang__) || defined(__GNUC__)) && \
    (defined(__linux__) || defined(__APPLE__) || defined(_WIN32))
#define PTPNG_HAVE_ARM_CRC 1

#if defined(_MSC_VER) && !defined(__clang__)
#include <intrin.h>
#else
#include <arm_acle.h>
#endif

#if defined(_WIN32)
#ifndef WIN32_LEAN_AND_MEAN
#define WIN32_LEAN_AND_MEAN
#endif
#include <windows.h>
#elif defined(__APPLE__)
#include <sys/types.h>
#include <sys/sysctl.h>
#else
#include <sys/auxv.h>
#include <asm/hwcap.h>
#endif

/* Only this function may contain CRC instructions. The initializer is
 * compiled for the baseline ISA, including in builds without -march=+crc. */
#if defined(__clang__)
__attribute__((target("crc"), noinline))
#elif defined(__GNUC__)
__attribute__((target("+crc"), noinline))
#else
__declspec(noinline)
#endif
static uint32_t ptpng_crc32_arm(const uint8_t *p, size_t n)
{
    uint32_t crc = UINT32_C(0xffffffff);
    while (n >= 8) {
        uint64_t word;
        memcpy(&word, p, sizeof(word));
#if defined(__AARCH64EB__) || \
    (defined(__BYTE_ORDER__) && defined(__ORDER_BIG_ENDIAN__) && \
     __BYTE_ORDER__ == __ORDER_BIG_ENDIAN__)
        word = __builtin_bswap64(word);
#endif
        /* The non-c variants use PNG's IEEE polynomial, not CRC-32C. */
        crc = __crc32d(crc, word);
        p += 8;
        n -= 8;
    }
    while (n) {
        crc = __crc32b(crc, *p++);
        --n;
    }
    return ~crc;
}

static int ptpng_arm_has_crc(void)
{
#if defined(_WIN32)
    return IsProcessorFeaturePresent(PF_ARM_V8_CRC32_INSTRUCTIONS_AVAILABLE) != 0;
#elif defined(__APPLE__)
    int available = 0;
    size_t size = sizeof(available);
    return sysctlbyname("hw.optional.armv8_crc32", &available, &size, NULL, 0) == 0 &&
           size == sizeof(available) && available != 0;
#elif defined(HWCAP_CRC32)
    return (getauxval(AT_HWCAP) & HWCAP_CRC32) != 0;
#else
    return 0;
#endif
}
#endif

void ptpng_crc_arm_init(void)
{
#if PTPNG_HAVE_ARM_CRC
    if (ptpng_arm_has_crc()) {
        ptpng_cpu.arm_crc32 = 1;
        ptpng_cpu.crc32 = ptpng_crc32_arm;
    }
#endif
}
