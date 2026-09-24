cmake_minimum_required(VERSION 3.15)
project(ptpng C)

option(PTPNG_WITH_LIBPNG "Build the vendored zlib+libpng reference and the parity/benchmark tools" ON)
option(PTPNG_BUILD_BENCH "Build bench_compare (nightly perf tracking)" ON)
option(PTPNG_WITH_ZLIB_NG "Also build libpng+zlib-ng reference for benchmarks" ON)

set(CMAKE_C_STANDARD 11)

# ---- the library -------------------------------------------------------
set(PTPNG_SOURCES src/ptpng.c src/ptpng_inflate.c src/ptpng_crc.c
                  src/ptpng_filters.c)

if(CMAKE_SYSTEM_PROCESSOR MATCHES "(x86_64)|(AMD64)|(i.86)|(X86)")
    set(PTPNG_X86 ON)
elseif(CMAKE_SYSTEM_PROCESSOR MATCHES "(aarch64)|(ARM64)|(arm)")
    set(PTPNG_ARM ON)
endif()

add_library(ptpng STATIC ${PTPNG_SOURCES})
target_include_directories(ptpng PUBLIC include src)

if(PTPNG_X86)
    # AVX2 translation unit: compiled with its own ISA flag; all code in
    # it is behind runtime dispatch (ptpng_avx2_init checks CPUID).
    if(MSVC)
        set_source_files_properties(src/ptpng_avx2.c PROPERTIES
                                    COMPILE_OPTIONS "/arch:AVX2")
    else()
        set_source_files_properties(src/ptpng_avx2.c PROPERTIES
                                    COMPILE_OPTIONS "-mavx2")
    endif()
    target_sources(ptpng PRIVATE src/ptpng_avx2.c)
elseif(PTPNG_ARM)
    # NEON is baseline on aarch64; no extra flags needed. ptpng_neon.c
    # compiles to an empty TU if NEON is unavailable (armv7 without it).
    target_sources(ptpng PRIVATE src/ptpng_neon.c)
endif()

if(MSVC)
    target_compile_options(ptpng PRIVATE /W3 /O2 /MT /DNDEBUG
                                         /D_CRT_SECURE_NO_WARNINGS)
else()
    target_compile_options(ptpng PRIVATE -O2 -Wall -Wextra
                              -Wno-unused-parameter -fno-strict-aliasing)
endif()

# ---- the CLI tool and unit testers -------------------------------------
set(PTPNG_TOOLS ptpng_tool filters_test sums_test inflate_test fuzz_png)
foreach(tgt ptpng_tool filters_test sums_test inflate_test fuzz_png)
    add_executable(${tgt} tools/${tgt}.c)
    target_link_libraries(${tgt} PRIVATE ptpng)
endforeach()
if(MSVC)
    foreach(tgt ${PTPNG_TOOLS})
        target_compile_options(${tgt} PRIVATE
                               /W3 /O2 /MT /D_CRT_SECURE_NO_WARNINGS)
    endforeach()
else()
    foreach(tgt ${PTPNG_TOOLS})
        target_compile_options(${tgt} PRIVATE -O2 -w)
    endforeach()
endif()

enable_testing()
add_test(NAME unit COMMAND filters_test)
add_test(NAME sums COMMAND sums_test)

# ---- reference build (zlib + libpng) and parity/bench tools ------------
if(PTPNG_WITH_LIBPNG)
    set(PTPNG_ZLIB_DIR ${CMAKE_CURRENT_SOURCE_DIR}/third_party/zlib-develop)
    set(PTPNG_LIBPNG_DIR
        ${CMAKE_CURRENT_SOURCE_DIR}/third_party/libpng-libpng16)
    set(ZBUILD ${CMAKE_BINARY_DIR}/zlibb)

    # build+install the zlib static library at configure time so that
    # libpng's find_package(ZLIB) can see it through the cache vars
    file(MAKE_DIRECTORY ${ZBUILD})
    execute_process(
        COMMAND ${CMAKE_COMMAND} ${PTPNG_ZLIB_DIR}
                -DBUILD_SHARED_LIBS=OFF -DCMAKE_BUILD_TYPE=Release
                ${PTPNG_MSBUILD_EXTRA}
                -DCMAKE_INSTALL_PREFIX=${ZBUILD}/inst
        WORKING_DIRECTORY ${ZBUILD} RESULT_VARIABLE rz)
    if(rz EQUAL 0)
        execute_process(
            COMMAND ${CMAKE_COMMAND} --build ${ZBUILD} --config Release
                    --target install
            WORKING_DIRECTORY ${ZBUILD} RESULT_VARIABLE rz)
    endif()
    if(NOT rz EQUAL 0)
        message(FATAL_ERROR "zlib reference build failed")
    endif()

    # locate the static zlib library regardless of generator naming:
    # prefer explicitly-static artifacts (libzs.lib / *static*.lib /
    # libz.a); plain libz.lib can be the DLL import library on Windows
    file(GLOB PTPNG_ZLIB_ALL "${ZBUILD}/inst/lib/*")
    set(PTPNG_ZLIB_LIB "")
    foreach(cand ${PTPNG_ZLIB_ALL})
        get_filename_component(nm "${cand}" NAME)
        if(nm MATCHES "static|libzs|^libz\\.a$|^z\\.a$")
            set(PTPNG_ZLIB_LIB "${cand}")
        endif()
    endforeach()
    if(NOT PTPNG_ZLIB_LIB)
        foreach(cand ${PTPNG_ZLIB_ALL})
            get_filename_component(nm "${cand}" NAME)
            if(nm STREQUAL "libz.lib" OR nm STREQUAL "zlibstatic.lib")
                set(PTPNG_ZLIB_LIB "${cand}")
            endif()
        endforeach()
    endif()
    if(NOT PTPNG_ZLIB_LIB)
        message(FATAL_ERROR "zlib static library not found in ${ZBUILD}/inst/lib")
    endif()
    message(STATUS "reference zlib: ${PTPNG_ZLIB_LIB}")

    set(ZLIB_INCLUDE_DIR "${ZBUILD}/inst/include" CACHE PATH "" FORCE)
    set(ZLIB_LIBRARY "${PTPNG_ZLIB_LIB}" CACHE FILEPATH "" FORCE)
    set(PNG_SHARED OFF CACHE BOOL "" FORCE)
    set(PNG_STATIC ON CACHE BOOL "" FORCE)
    set(PNG_TESTS OFF CACHE BOOL "" FORCE)
    set(PNG_TOOLS OFF CACHE BOOL "" FORCE)
    set(PNG_FRAMEWORK OFF CACHE BOOL "" FORCE)
    add_subdirectory(${PTPNG_LIBPNG_DIR} libpngb)

    # ptpng itself is /MT; the reference tools link /MD to match libpng
    set(PTPNG_REF_TOOLS verify_suite)
    if(PTPNG_BUILD_BENCH)
        list(APPEND PTPNG_REF_TOOLS bench_compare)
    endif()
    foreach(tgt ${PTPNG_REF_TOOLS})
        add_executable(${tgt} tools/${tgt}.c)
        target_include_directories(${tgt} PRIVATE
                                   ${PTPNG_LIBPNG_DIR} ${ZBUILD})
        target_link_libraries(${tgt} PRIVATE ptpng png_static)
        if(MSVC)
            target_compile_options(${tgt} PRIVATE
                                   /W3 /O2 /D_CRT_SECURE_NO_WARNINGS)
            set_target_properties(${tgt} PROPERTIES
                                  MSVC_RUNTIME_LIBRARY "MultiThreadedDLL")
        else()
            target_compile_options(${tgt} PRIVATE -O2 -w)
        endif()
    endforeach()

    add_test(NAME parity COMMAND verify_suite
             ${CMAKE_CURRENT_SOURCE_DIR}/third_party/libpng-libpng16/contrib/testpngs
             ${CMAKE_CURRENT_SOURCE_DIR}/tests/gen)

    if(WIN32)
        add_executable(libpng_bench tools/libpng_bench.c)
        target_include_directories(libpng_bench PRIVATE
                                   ${PTPNG_LIBPNG_DIR} ${ZBUILD})
        target_link_libraries(libpng_bench PRIVATE png_static)
        if(MSVC)
            target_compile_options(libpng_bench PRIVATE
                                   /W3 /O2 /D_CRT_SECURE_NO_WARNINGS)
            set_target_properties(libpng_bench PROPERTIES
                                  MSVC_RUNTIME_LIBRARY "MultiThreadedDLL")
        endif()
    endif()

    # ---- libpng + zlib-ng reference (benchmark opponent) --------------
    # zlib-ng in ZLIB_COMPAT mode exposes the same symbols as zlib, so
    # it cannot coexist with the stock-zlib libpng in one binary.  It
    # gets its own configure-time build tree and its own bench binary.
    if(PTPNG_WITH_ZLIB_NG AND PTPNG_BUILD_BENCH AND
       EXISTS ${CMAKE_CURRENT_SOURCE_DIR}/third_party/zlib-ng-2.2.4/CMakeLists.txt)
        set(ZNG ${CMAKE_BINARY_DIR}/zngb)
        set(PTPNG_ZNG_DIR ${CMAKE_CURRENT_SOURCE_DIR}/third_party/zlib-ng-2.2.4)
        file(MAKE_DIRECTORY ${ZNG})
        execute_process(
            COMMAND ${CMAKE_COMMAND} ${PTPNG_ZNG_DIR}
                    -DZLIB_COMPAT=ON -DBUILD_SHARED_LIBS=OFF
                    -DWITH_GTEST=OFF -DWITH_FUZZERS=OFF -DWITH_BENCHMARKS=OFF
                    -DWITH_MAINTAINER_WARNINGS=OFF -DWITH_SANITIZER=OFF
                    -DCMAKE_BUILD_TYPE=Release
                    -DCMAKE_INSTALL_PREFIX=${ZNG}/inst
            WORKING_DIRECTORY ${ZNG} RESULT_VARIABLE rz2)
        if(rz2 EQUAL 0)
            execute_process(
                COMMAND ${CMAKE_COMMAND} --build ${ZNG} --config Release
                        --target install
                WORKING_DIRECTORY ${ZNG} RESULT_VARIABLE rz2)
        endif()
        if(NOT rz2 EQUAL 0)
            message(WARNING "zlib-ng reference build failed; skipping")
            set(PTNG_SKIP ON)
        else()
            file(GLOB PTPNG_ZNG_ALL "${ZNG}/inst/lib/*")
            set(PTPNG_ZNG_LIB "")
            foreach(cand ${PTPNG_ZNG_ALL})
                get_filename_component(nm "${cand}" NAME)
                if(nm MATCHES "static|libzs|^libz\\.a$|ng|compat")
                    set(PTPNG_ZNG_LIB "${cand}")
                endif()
            endforeach()
            if(NOT PTPNG_ZNG_LIB)
                message(WARNING "zlib-ng static library not found; skipping")
                set(PTNG_SKIP ON)
            else()
                message(STATUS "reference zlib-ng: ${PTPNG_ZNG_LIB}")

                # second libpng, built at configure time against zlib-ng
                set(PNGB ${CMAKE_BINARY_DIR}/libpngng)
                file(MAKE_DIRECTORY ${PNGB})
                execute_process(
                    COMMAND ${CMAKE_COMMAND} ${PTPNG_LIBPNG_DIR}
                            -DPNG_SHARED=OFF -DPNG_STATIC=ON -DPNG_TESTS=OFF
                            -DPNG_TOOLS=OFF -DPNG_FRAMEWORK=OFF
                            -DCMAKE_BUILD_TYPE=Release
                            -DZLIB_INCLUDE_DIR=${ZNG}/inst/include
                            -DZLIB_LIBRARY=${PTPNG_ZNG_LIB}
                    WORKING_DIRECTORY ${PNGB} RESULT_VARIABLE rp2)
                if(rp2 EQUAL 0)
                    execute_process(
                        COMMAND ${CMAKE_COMMAND} --build ${PNGB}
                                --config Release --target png_static
                        WORKING_DIRECTORY ${PNGB} RESULT_VARIABLE rp2)
                endif()
                if(NOT rp2 EQUAL 0)
                    message(WARNING "libpng+zlib-ng build failed; skipping")
                    set(PTNG_SKIP ON)
                else()
                    # locate the built static libpng (multi- and single-config)
                    file(GLOB PNGNG_CAND "${PNGB}/*.lib" "${PNGB}/Release/*.lib"
                         "${PNGB}/libpng.a" "${PNGB}/libpng*.a")
                    set(PNGNG_LIB "")
                    foreach(cand ${PNGNG_CAND})
                        get_filename_component(nm "${cand}" NAME)
                        if(nm MATCHES "png")
                            set(PNGNG_LIB "${cand}")
                        endif()
                    endforeach()
                    if(NOT PNGNG_LIB)
                        message(WARNING "libpng(zng) static lib not found")
                        set(PTNG_SKIP ON)
                    else()
                        message(STATUS "reference libpng(zlib-ng): ${PNGNG_LIB}")
                        add_executable(bench_zlibng tools/bench_compare.c)
                        target_compile_definitions(bench_zlibng PRIVATE
                                                   REF_LABEL="libpng-zng")
                        target_include_directories(bench_zlibng PRIVATE
                                   ${PTPNG_LIBPNG_DIR} ${ZNG} ${PNGB})
                        target_link_libraries(bench_zlibng PRIVATE
                                              ptpng ${PNGNG_LIB}
                                              ${PTPNG_ZNG_LIB})
                        if(MSVC)
                            target_compile_options(bench_zlibng PRIVATE
                                   /W3 /O2 /D_CRT_SECURE_NO_WARNINGS)
                            set_target_properties(bench_zlibng PROPERTIES
                                  MSVC_RUNTIME_LIBRARY "MultiThreadedDLL")
                        else()
                            target_compile_options(bench_zlibng PRIVATE -O2 -w)
                        endif()
                    endif()
                endif()
            endif()
        endif()
    endif()
endif()
