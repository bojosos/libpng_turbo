'use strict';
const assert = require('node:assert/strict');
const { test } = require('node:test');
const { buildRecords, cpuSummary, runUrl } = require('./dashboard.js');
const row = (name, value, unit, extra = '') => ({ name, value, unit, extra });
const entry = (date, benches) => ({ date, commit: { id: '1234567', url: 'https://github.com/bojosos/ptpng/commit/1234567' }, benches });
const data = (...entries) => ({ repoUrl: 'https://github.com/bojosos/ptpng', entries: { nightly: entries } });

test('decoder ratios match the same run, format and reference engine', () => {
  const history = data(entry(1, [
    row('linux-x64/ptpng-vs-libpng-zng/photo_rgb8 native', 240, 'MPix/s'),
    row('linux-x64/libpng-zng/photo_rgb8 native', 120, 'MPix/s'),
    row('linux-x64/ptpng-vs-libpng/photo_rgb8 native', 260, 'MPix/s'),
    row('linux-x64/libpng/photo_rgb8 native', 100, 'MPix/s'),
    row('linux-x64/ptpng-vs-libpng-zng/photo_rgb8 rgba8', 90, 'MPix/s'),
    row('linux-x64/libpng-zng/photo_rgb8 rgba8', 100, 'MPix/s')
  ]), entry(2, [row('linux-x64/ptpng-vs-libpng-zng/photo_rgb8 native', 500, 'MPix/s')]));
  const records = buildRecords(history);
  assert.equal(records.length, 3);
  assert.deepEqual(records.map(record => [record.reference, record.format, record.ratio]),
    [['libpng-zng', 'native', 2], ['libpng', 'native', 2.6], ['libpng-zng', 'rgba8', .9]]);
});

test('encoder speed and file bytes remain separate for levels 1 and 6', () => {
  const prefix = 'windows-arm64 / graphic_rgb8.png / ';
  const records = buildRecords(data(entry(2, [
    row(prefix + 'ptpng-vs-libpng-zng encode time', 10, 'ms'),
    row(prefix + 'ptpng-vs-libpng-zng encoded size', 100, 'bytes'),
    row(prefix + 'libpng-zng-level1 encode time', 50, 'ms'),
    row(prefix + 'libpng-zng-level1 encoded size', 120, 'bytes'),
    row(prefix + 'libpng-zng-level6 encode time', 80, 'ms'),
    row(prefix + 'libpng-zng-level6 encoded size', 25, 'bytes')
  ])));
  assert.deepEqual(records.map(record => [record.reference, record.ratio, record.ptBytes, record.refBytes]),
    [['libpng-zng-level1', 5, 100, 120], ['libpng-zng-level6', 8, 100, 25]]);
  assert.equal(records[0].image, 'graphic_rgb8');
});

test('missing or invalid samples never create a ratio or a fabricated size', () => {
  const records = buildRecords(data(entry(3, [
    row('linux-x64/ptpng-vs-libpng-zng/photo_rgb8 native', 100, 'MPix/s'),
    row('linux-x64/libpng-zng/photo_rgb8 native', 0, 'MPix/s'),
    row('linux-x64/ptpng-vs-libpng-zng/photo_gray8 native', NaN, 'MPix/s'),
    row('linux-x64/libpng-zng/photo_gray8 native', 80, 'MPix/s'),
    row('linux-x64/ptpng-vs-libpng-zng/photo_rgba8 native', 100, 'MPix/s'),
    row('linux-x64/libpng-zng/photo_rgba8 native', 120, 'ms'),
    row('linux-x64 / photo_rgb8.png / ptpng-vs-libpng encode time', 10, 'ms'),
    row('linux-x64 / photo_rgb8.png / libpng-level1 encode time', 30, 'ms')
  ])));
  assert.equal(records.length, 1);
  assert.equal(records[0].ratio, 3);
  assert.equal(records[0].ptBytes, null);
  assert.equal(records[0].refBytes, null);
});

test('memory copy is one measured reference per run, with no PNG speed ratio', () => {
  const records = buildRecords(data(entry(2, [row('linux-arm64/memory-copy-vs-libpng/64MiB', 12000, 'MB/s'),
    row('linux-arm64/memory-copy-vs-libpng-zng/64MiB', 13000, 'MB/s')]),
    entry(1, [row('linux-arm64/memory-copy-vs-libpng/64MiB', 11000, 'MB/s')])));
  assert.deepEqual(records.map(record => record.pt), [11000, 13000]);
  assert.ok(records.every(record => record.operation === 'memory' && record.ratio === null && record.ref === null));
});

test('old points and malformed CPU metadata retain safe commit links', () => {
  const record = buildRecords(data(entry(1, [row('linux-x64/ptpng-vs-libpng-zng/photo_rgb8 native', 200, 'MPix/s', 'Runner: {broken'),
    row('linux-x64/libpng-zng/photo_rgb8 native', 100, 'MPix/s')])))[0];
  assert.equal(cpuSummary(record.machine), 'CPU not recorded');
  assert.equal(runUrl(data(), record), 'https://github.com/bojosos/ptpng/commit/1234567');
  record.commit.url = 'javascript:alert(1)';
  assert.equal(runUrl(data(), record), '');
  record.machine = { run_id: '36753946386', cpu: 'Model name: AMD EPYC 7763\nFlags: avx2' };
  assert.equal(cpuSummary(record.machine), 'AMD EPYC 7763');
  assert.equal(runUrl(data(), record), 'https://github.com/bojosos/ptpng/actions/runs/36753946386');
});

test('compacted histories retain the machine for both decoder and encoder samples', () => {
  const sample = entry(4, [
    row('linux-arm64/ptpng-vs-libpng-zng/photo_rgb8 native', 200, 'MPix/s', 'neon'),
    row('linux-arm64/libpng-zng/photo_rgb8 native', 100, 'MPix/s'),
    row('linux-arm64 / photo_rgb8.png / ptpng-vs-libpng-zng encode time', 10, 'ms'),
    row('linux-arm64 / photo_rgb8.png / libpng-zng-level1 encode time', 20, 'ms')
  ]);
  sample.runners = { 'linux-arm64': { cpu: 'Model name: Neoverse-N2', run_id: '456' } };
  const records = buildRecords(data(sample));
  assert.equal(records.length, 2);
  assert.ok(records.every(record => cpuSummary(record.machine) === 'Neoverse-N2'));
  assert.ok(records.every(record => runUrl(data(), record) === 'https://github.com/bojosos/ptpng/actions/runs/456'));
  assert.equal(records[0].extra, 'neon');
});
