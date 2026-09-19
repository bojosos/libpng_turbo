/* pmp.c - poor man's profiler: samples RIP of a worker running
 * ptpng_decode in a loop, symbolizes with dbghelp. */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <windows.h>
#include "ptpng.h"
#include <dbghelp.h>
#pragma comment(lib, "dbghelp.lib")

#define MAX_SAMPLES 20000
static void *g_samples[MAX_SAMPLES];
static volatile int g_nsamples;
static volatile LONG g_stop;
static CRITICAL_SECTION g_lock;

static DWORD WINAPI sampler(LPVOID arg)
{
    HANDLE target = (HANDLE)arg;
    while (!g_stop) {
        CONTEXT ctx;
        ctx.ContextFlags = CONTEXT_FULL;
        if (SuspendThread(target) != (DWORD)-1) {
            if (GetThreadContext(target, &ctx))
                if (g_nsamples < MAX_SAMPLES)
                    g_samples[g_nsamples++] = (void *)ctx.Rip;
            ResumeThread(target);
        }
        Sleep(1);
    }
    return 0;
}

typedef struct { void *addr; int count; } sym_ent;
static int cmp_ent(const void *a, const void *b)
{
    return ((const sym_ent *)b)->count - ((const sym_ent *)a)->count;
}

int main(int argc, char **argv)
{
    /* usage: pmp file.png [iters] */
    FILE *f;
    long fsz;
    uint8_t *data;
    int iters = argc > 2 ? atoi(argv[2]) : 40;
    HANDLE self = GetCurrentThread();
    HANDLE thread;
    DWORD tid;
    int i;
    HANDLE hProc = GetCurrentProcess();

    f = fopen(argv[1], "rb");
    if (!f) return 2;
    fseek(f, 0, SEEK_END); fsz = ftell(f); fseek(f, 0, SEEK_SET);
    data = malloc((size_t)fsz);
    if (fread(data, 1, (size_t)fsz, f) != (size_t)fsz) return 2;
    fclose(f);

    SymSetOptions(SYMOPT_UNDNAME | SYMOPT_DEFERRED_LOADS);
    SymInitialize(hProc, NULL, TRUE);

    DuplicateHandle(hProc, self, hProc, &thread, 0, FALSE,
                    DUPLICATE_SAME_ACCESS);
    CreateThread(NULL, 0, sampler, (LPVOID)thread, 0, &tid);

    for (i = 0; i < iters; i++) {
        void *out = NULL;
        size_t olen;
        ptpng_decode(data, (size_t)fsz, NULL, &out, &olen, NULL);
        ptpng_free(out);
    }
    InterlockedIncrement(&g_stop);
    Sleep(50);

    {
        /* aggregate by symbol name */
        static struct { char name[128]; int count; } agg[MAX_SAMPLES];
        int n = 0, i, j;
        for (i = 0; i < g_nsamples; i++) {
            char buf[sizeof(SYMBOL_INFO) + 256];
            DWORD64 disp = 0;
            SYMBOL_INFO *sym = (SYMBOL_INFO *)buf;
            sym->SizeOfStruct = sizeof(SYMBOL_INFO);
            sym->MaxNameLen = 255;
            if (!SymFromAddr(hProc, (DWORD64)g_samples[i], &disp, sym))
                strcpy_s(sym->Name, 255, "unknown");
            for (j = 0; j < n; j++)
                if (!strcmp(agg[j].name, sym->Name)) {
                    agg[j].count++;
                    break;
                }
            if (j == n && n < MAX_SAMPLES) {
                strcpy_s(agg[n].name, 128, sym->Name);
                agg[n].count = 1;
                n++;
            }
        }
        /* sort */
        for (i = 0; i < n; i++)
            for (j = i + 1; j < n; j++)
                if (agg[j].count > agg[i].count) {
                    char tn[128]; int tc = agg[i].count;
                    strcpy_s(tn, 128, agg[i].name);
                    strcpy_s(agg[i].name, 128, agg[j].name);
                    agg[i].count = agg[j].count;
                    strcpy_s(agg[j].name, 128, tn);
                    agg[j].count = tc;
                }
        printf("%d samples, by function:\n", g_nsamples);
        for (i = 0; i < n && i < 30; i++)
            printf("%5.1f%%  %s\n", 100.0 * agg[i].count / g_nsamples,
                   agg[i].name);
    }
    return 0;
}
