/* One selected history, with ratios computed only within a benchmark run. */
(function (root) {
  'use strict';
  const platforms = { 'linux-x64': 'Linux · x64', 'windows-x64': 'Windows · x64',
    'linux-arm64': 'Linux · ARM64', 'macos-arm64': 'macOS · ARM64', 'windows-arm64': 'Windows · ARM64' };
  const images = { photo_rgb8: 'Photo · RGB8', photo_rgba8: 'Photo · RGBA8', photo_gray8: 'Photo · Gray8',
    photo_gray16: 'Photo · Gray16', graphic_pal8: 'Graphics · Palette8', graphic_rgb8: 'Graphics · RGB8',
    photo_rgba16_paeth: 'Photo · RGBA16', graphic_rgba16_paeth: 'Graphics · RGBA16', noise_rgba8: 'Random noise · RGBA8',
    memory: '64 MiB copy' };
  const references = { 'libpng-zng': 'libpng + zlib-ng', libpng: 'libpng + zlib',
    'libpng-zng-level1': 'zlib-ng · level 1', 'libpng-zng-level6': 'zlib-ng · level 6',
    'libpng-level1': 'zlib · level 1', 'libpng-level6': 'zlib · level 6', copy: 'Memory-copy benchmark' };
  const formats = { native: 'Native pixels', rgba8: 'RGBA8', rgb8: 'RGB8', none: 'Not applicable' };
  const valid = value => typeof value === 'number' && Number.isFinite(value) && value > 0;
  function metadata(bench) {
    const line = String(bench.extra || '').split('\n').find(part => part.startsWith('Runner: '));
    try { return line ? JSON.parse(line.slice(8)) : null; } catch (_) { return null; }
  }
  function cpuSummary(machine) {
    if (!machine) return 'CPU not recorded';
    const cpu = String(machine.cpu || '');
    const model = cpu.match(/(?:Model name|machdep\.cpu\.brand_string):\s*([^\n]+)/);
    return (model ? model[1].trim() : cpu.split('\n')[0].trim()) || machine.machine || 'Unknown CPU';
  }
  function safeUrl(value) {
    try { const url = new URL(value); return url.protocol === 'https:' ? url.href : ''; } catch (_) { return ''; }
  }
  function runUrl(data, record) {
    return record.machine && /^\d+$/.test(String(record.machine.run_id)) ?
      safeUrl(data.repoUrl + '/actions/runs/' + record.machine.run_id) : safeUrl(record.commit.url);
  }
  function buildRecords(data) {
    const result = [];
    for (const entries of Object.values(data.entries || {})) for (const entry of entries) {
      if (!valid(entry.date) || !Array.isArray(entry.benches)) continue;
      const byName = new Map(entry.benches.map(bench => [bench.name, bench]));
      const base = bench => ({ date: entry.date, commit: entry.commit || {},
        machine: metadata(bench) || (entry.runners && entry.runners[bench.name.split('/')[0].trim()]) || null,
        extra: bench.extra || '' });
      for (const bench of entry.benches) {
        if (!valid(bench.value)) continue;
        const decode = bench.name.match(/^([^/]+)\/ptpng-vs-(libpng(?:-zng)?)\/(.+) (native|rgba8|rgb8)$/);
        if (decode && bench.unit === 'MPix/s') {
          const [, platform, reference, image, format] = decode;
          const ref = byName.get(platform + '/' + reference + '/' + image + ' ' + format);
          if (ref && ref.unit === bench.unit && valid(ref.value)) result.push({ ...base(bench), operation: 'decode',
            platform, reference, image, format, pt: bench.value, ref: ref.value, ratio: bench.value / ref.value, unit: 'MPix/s' });
        }
        const encode = bench.name.match(/^([^/]+) \/ (.+)\.png \/ ptpng-vs-(libpng(?:-zng)?) encode time$/);
        if (encode && bench.unit === 'ms') {
          const [, platform, image, engine] = encode;
          const prefix = platform + ' / ' + image + '.png / ';
          const ptSize = byName.get(prefix + 'ptpng-vs-' + engine + ' encoded size');
          for (const level of [1, 6]) {
            const reference = engine + '-level' + level;
            const ref = byName.get(prefix + reference + ' encode time');
            const refSize = byName.get(prefix + reference + ' encoded size');
            if (!ref || ref.unit !== 'ms' || !valid(ref.value)) continue;
            const sizesValid = ptSize && refSize && ptSize.unit === 'bytes' && refSize.unit === 'bytes' && valid(ptSize.value) && valid(refSize.value);
            result.push({ ...base(bench), operation: 'encode', platform, reference, image, format: 'none',
              pt: bench.value, ref: ref.value, ratio: ref.value / bench.value, unit: 'ms',
              ptBytes: sizesValid ? ptSize.value : null, refBytes: sizesValid ? refSize.value : null });
          }
        }
        const memory = bench.name.match(/^([^/]+)\/memory-copy-vs-(libpng(?:-zng)?)\/64MiB$/);
        if (memory && bench.unit === 'MB/s') {
          // The two reference executables time the same copy. Prefer the zlib-ng record.
          if (memory[2] === 'libpng' && byName.has(memory[1] + '/memory-copy-vs-libpng-zng/64MiB')) continue;
          result.push({ ...base(bench), operation: 'memory', platform: memory[1], reference: 'copy', image: 'memory',
            format: 'none', pt: bench.value, ref: null, ratio: null, unit: 'MB/s' });
        }
      }
    }
    return result.sort((a, b) => a.date - b.date);
  }
  const api = { buildRecords, cpuSummary, runUrl };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  if (typeof document === 'undefined') return;

  function init(data) {
    if (!data || !data.entries) throw new Error('Benchmark history could not be loaded. Please reload this page.');
    const records = buildRecords(data);
    if (!records.length) throw new Error('No benchmark measurements are available yet.');
    const $ = id => document.getElementById(id);
    const params = new URLSearchParams(location.search);
    const state = { mode: params.get('mode') || 'decode', platform: params.get('platform') || 'linux-x64',
      image: params.get('image') || 'photo_rgb8', format: params.get('format') || 'native',
      reference: params.get('reference') || 'libpng-zng', metric: params.get('metric') || 'speed', range: params.get('range') || '10' };
    const number = value => new Intl.NumberFormat('en', { maximumFractionDigits: 2 }).format(value);
    const bytes = value => value >= 1048576 ? number(value / 1048576) + ' MiB' :
      value >= 1024 ? number(value / 1024) + ' KiB' : number(value) + ' B';
    const valueText = (record, value) => value === null ? '—' : number(value) + ' ' + record.unit;
    const dateText = date => new Date(date).toISOString().slice(0, 16).replace('T', ' ');
    const make = (tag, text, className) => { const element = document.createElement(tag);
      if (text !== undefined) element.textContent = text;
      if (className) element.className = className; return element; };
    const values = (array, key) => [...new Set(array.map(record => record[key]))];
    function options(id, available, labels, current, preferred) {
      const select = $(id); select.replaceChildren();
      for (const value of available) { const option = make('option', labels[value] || value); option.value = value; select.append(option); }
      select.value = available.includes(current) ? current : available.includes(preferred) ? preferred : available[0];
      return select.value;
    }
    function addStat(title, value, detail, className) {
      const card = make('div', undefined, 'stat panel'); card.append(make('div', title, 'eyebrow'),
        make('div', value, 'stat-value ' + (className || '')), make('div', detail, 'stat-detail')); $('stats').append(card);
    }
    function drawChart(history) {
      const ratio = state.metric === 'speed';
      const size = state.metric === 'size';
      const names = state.mode === 'memory' ? ['Memory copy'] : ratio ? ['ptpng / reference speed'] : ['ptpng', references[state.reference]];
      const series = ratio ? [history.map(record => record.ratio)] : size ?
        [history.map(record => record.ptBytes), history.map(record => record.refBytes)] :
        state.mode === 'memory' ? [history.map(record => record.pt)] : [history.map(record => record.pt), history.map(record => record.ref)];
      const allValues = series.flat().filter(value => value !== null);
      const high = Math.max(...allValues, ratio ? 1 : 0) * 1.12 || 1;
      const width = Math.max(300, $('chart').clientWidth), height = $('chart').clientHeight;
      const left = 58, right = 16, top = 20, bottom = 42;
      const x = index => left + (history.length === 1 ? .5 : index / (history.length - 1)) * (width - left - right);
      const y = value => height - bottom - value / high * (height - top - bottom);
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svg.setAttribute('viewBox', '0 0 ' + width + ' ' + height); svg.setAttribute('role', 'group');
      svg.setAttribute('aria-label', 'Measurement history. Each point links to its run.');
      function shape(tag, attributes, text, parent = svg) {
        const element = document.createElementNS(svg.namespaceURI, tag);
        for (const [name, value] of Object.entries(attributes)) element.setAttribute(name, value);
        if (text !== undefined) element.textContent = text; parent.append(element); return element;
      }
      for (let i = 0; i <= 4; i++) {
        const value = high * i / 4;
        shape('line', { x1: left, x2: width - right, y1: y(value), y2: y(value), class: 'grid' });
        shape('text', { x: left - 9, y: y(value) + 4, 'text-anchor': 'end' }, size ? bytes(value) : number(value) + (ratio ? '×' : ''));
      }
      if (ratio) shape('line', { x1: left, x2: width - right, y1: y(1), y2: y(1), class: 'baseline' });
      const ticks = [...new Set([0, Math.floor((history.length - 1) / 2), history.length - 1])];
      for (const index of ticks) shape('text', { x: x(index), y: height - 15, 'text-anchor': 'middle' },
        new Date(history[index].date).toISOString().slice(5, 10));
      const colors = ['#69e2bb', '#80aaff'];
      series.forEach((items, seriesIndex) => {
        const points = items.map((value, index) => value === null ? null : x(index) + ',' + y(value));
        // Split at missing samples rather than connecting across absent size data.
        let segment = [];
        const drawSegment = () => { if (segment.length) shape('polyline', { points: segment.join(' '), fill: 'none',
          stroke: colors[seriesIndex], 'stroke-width': 2.5 }); segment = []; };
        for (const point of points) { if (point === null) drawSegment(); else segment.push(point); }
        drawSegment();
        items.forEach((value, index) => {
          if (value === null) return;
          const record = history[index]; const text = names[seriesIndex] + ': ' +
            (size ? bytes(value) : number(value) + (ratio ? '×' : ' ' + record.unit)) + '\n' + dateText(record.date) + ' UTC\n' +
            'Commit ' + String(record.commit.id || '').slice(0, 7) + '\n' + cpuSummary(record.machine);
          const url = runUrl(data, record);
          const link = shape('a', { ...(url ? { href: url, target: '_blank', rel: 'noopener noreferrer' } : {}),
            tabindex: 0, 'aria-label': text.replace(/\n/g, ', ') });
          shape('circle', { cx: x(index), cy: y(value), r: 4, fill: colors[seriesIndex], class: 'point' }, undefined, link);
          shape('title', {}, text, link);
          const showPoint = () => { $('point-help').textContent = text.replace(/\n/g, ' · '); };
          const resetPoint = () => { if (document.activeElement !== link) $('point-help').textContent =
            'Hover or focus a point for its date and machine. Open a point to inspect its run.'; };
          link.addEventListener('focus', showPoint); link.addEventListener('mouseenter', showPoint);
          link.addEventListener('blur', resetPoint); link.addEventListener('mouseleave', resetPoint);
        });
      });
      $('chart').replaceChildren(svg); $('legend').replaceChildren();
      names.forEach((name, index) => { const label = make('span', name); label.style.setProperty('--legend-color', colors[index]); $('legend').append(label); });
      if (ratio) { const label = make('span', '1× = equal speed'); label.style.setProperty('--legend-color', '#91a0b2'); $('legend').append(label); }
    }
    function render() {
      if (!['decode', 'encode', 'memory'].includes(state.mode) || !records.some(record => record.operation === state.mode)) state.mode = 'decode';
      document.querySelectorAll('[data-mode]').forEach(button => {
        button.setAttribute('aria-pressed', String(button.dataset.mode === state.mode));
        button.disabled = !records.some(record => record.operation === button.dataset.mode);
      });
      const operation = records.filter(record => record.operation === state.mode);
      state.platform = options('platform', values(operation, 'platform'), platforms, state.platform, 'linux-x64');
      const onPlatform = operation.filter(record => record.platform === state.platform);
      state.image = options('image', values(onPlatform, 'image'), images, state.image, 'photo_rgb8');
      state.format = options('format', values(onPlatform, 'format'), formats, state.format, 'native');
      const inFormat = onPlatform.filter(record => record.format === state.format);
      state.reference = options('reference', values(inFormat, 'reference'), references, state.reference,
        state.mode === 'encode' ? 'libpng-zng-level1' : 'libpng-zng');
      const metrics = state.mode === 'encode' ? { speed: 'Speedup', time: 'Encode time', size: 'PNG size' } :
        state.mode === 'memory' ? { throughput: 'Bandwidth' } : { speed: 'Speedup', throughput: 'Throughput' };
      state.metric = options('metric', Object.keys(metrics), metrics, state.metric, 'speed');
      $('image').disabled = state.mode === 'memory'; $('format').disabled = state.mode !== 'decode'; $('reference').disabled = state.mode === 'memory';
      document.querySelector('.checksums').textContent = state.mode === 'memory' ? 'Warm buffers · payload bandwidth' : 'Checksums enabled';
      $('range').value = ['10', '30', 'all'].includes(state.range) ? state.range : '10'; state.range = $('range').value;
      const matching = inFormat.filter(record => record.reference === state.reference);
      const selected = matching.filter(record => record.image === state.image);
      if (!selected.length) { state.image = matching[0].image; $('image').value = state.image; return render(); }
      const history = state.range === 'all' ? selected : selected.slice(-Number(state.range));
      const latest = selected[selected.length - 1];
      $('stats').replaceChildren();
      addStat(state.mode === 'memory' ? 'Memory copy' : 'ptpng', valueText(latest, latest.pt),
        state.mode === 'encode' ? 'Median encode time' : state.mode === 'memory' ? 'Measured payload bandwidth' : 'Median decode throughput');
      if (state.mode === 'memory') {
        addStat('Working set', '128 MiB', 'Reads and writes warm buffers');
        addStat('Measurement', dateText(latest.date).slice(5, 10), dateText(latest.date).slice(11) + ' UTC');
        addStat('History', number(selected.length) + ' runs', 'Not a theoretical PNG ceiling');
      } else {
        addStat('Reference', valueText(latest, latest.ref), references[state.reference]);
        addStat('Speedup', number(latest.ratio) + '×', latest.ratio >= 1 ? 'Faster than the reference' : 'Slower than the reference', latest.ratio >= 1 ? 'gain' : 'loss');
        if (state.mode === 'encode') addStat('PNG size', latest.ptBytes === null ? 'Not recorded' : bytes(latest.ptBytes),
          latest.ptBytes === null ? 'No size sample for this run' : number(latest.ptBytes / latest.refBytes * 100) + '% of reference bytes');
        else addStat('Output', formats[state.format], state.image.includes('rgba16') || state.image === 'noise_rgba8' ? '1024 × 768 pixels' : '3200 × 2400 pixels');
      }
      $('trend-title').textContent = images[state.image] || state.image;
      $('chart-caption').textContent = state.metric === 'speed' ? 'Higher is faster. Each ratio compares engines within the same run.' :
        state.metric === 'size' ? 'Lower is smaller. Both encoders receive identical pixels.' : state.mode === 'encode' ?
          'Median milliseconds per image. Lower is faster.' : state.mode === 'memory' ? 'Payload MB/s. Higher is faster.' : 'MPix/s. Higher is faster.';
      $('machine').textContent = cpuSummary(latest.machine) + (latest.machine && latest.machine.logical_cpus ?
        ' · ' + latest.machine.logical_cpus + ' logical CPUs' : '') + ' · ' + dateText(latest.date) + ' UTC';
      $('latest-run').href = runUrl(data, latest); $('latest-run').hidden = !runUrl(data, latest);
      drawChart(history);
      const latestByImage = new Map(matching.map(record => [record.image, record]));
      $('case-count').textContent = latestByImage.size + (latestByImage.size === 1 ? ' workload' : ' workloads');
      $('overview-caption').textContent = platforms[state.platform] + (state.mode === 'decode' ? ' · ' + formats[state.format] : '') + ' · ' + references[state.reference];
      const heading = make('tr'); const columns = state.mode === 'memory' ? ['Workload', 'MB/s'] :
        state.mode === 'encode' ? ['Image', 'ptpng, ms', 'Speedup', 'Size / ref'] : ['Image', 'ptpng, MPix/s', 'Speedup'];
      columns.forEach(label => heading.append(make('th', label))); $('overview-head').replaceChildren(heading); $('overview-body').replaceChildren();
      for (const [image, record] of latestByImage) {
        const row = make('tr', undefined, image === state.image ? 'selected' : '');
        const cell = make('td'); const button = make('button', images[image] || image, 'image-button');
        button.type = 'button'; button.setAttribute('aria-pressed', String(image === state.image));
        button.onclick = () => { state.image = image; render();
          $('overview-body').querySelector('[aria-pressed="true"]').focus({ preventScroll: true }); };
        cell.append(button); row.append(cell, make('td', number(record.pt)));
        if (state.mode !== 'memory') row.append(make('td', number(record.ratio) + '×', record.ratio >= 1 ? 'gain' : 'loss'));
        if (state.mode === 'encode') row.append(make('td', record.ptBytes === null ? '—' : number(record.ptBytes / record.refBytes * 100) + '%'));
        $('overview-body').append(row);
      }
      $('history-body').replaceChildren();
      for (const record of [...history].reverse()) {
        const row = make('tr');
        for (const text of [dateText(record.date), String(record.commit.id || '').slice(0, 7), valueText(record, record.pt), valueText(record, record.ref)]) row.append(make('td', text));
        const machineCell = make('td', cpuSummary(record.machine));
        machineCell.title = record.machine ? [record.machine.os, record.machine.runner_image, record.machine.runner_image_version, record.machine.affinity].filter(Boolean).join('\n') : 'CPU not recorded';
        row.append(machineCell); const cell = make('td'); const url = runUrl(data, record);
        if (url) { const link = make('a', 'Open ↗'); link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer'; cell.append(link); }
        row.append(cell); $('history-body').append(row);
      }
      const query = new URLSearchParams(state); historyReplace(query);
    }
    function historyReplace(query) {
      const url = location.pathname + '?' + query;
      root.history.replaceState(null, '', url); $('view-link').href = url;
    }
    const repoUrl = safeUrl(data.repoUrl); $('repository-link').href = repoUrl;
    $('updated').textContent = 'Updated ' + dateText(data.lastUpdate) + ' UTC';
    $('history-count').textContent = Object.values(data.entries).reduce((total, entries) => total + entries.length, 0) + ' history records · all measurements retained';
    for (const id of ['platform', 'image', 'format', 'reference', 'metric', 'range']) $(id).onchange = () => { state[id] = $(id).value; render(); };
    document.querySelectorAll('[data-mode]').forEach(button => { button.onclick = () => { state.mode = button.dataset.mode; render(); }; });
    let resizeFrame;
    root.addEventListener('resize', () => { cancelAnimationFrame(resizeFrame); resizeFrame = requestAnimationFrame(render); });
    $('download').onclick = () => {
      const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
      const link = make('a'); link.href = url; link.download = 'ptpng-benchmarks.json'; link.click();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
    };
    render();
  }
  try { init(root.BENCHMARK_DATA); } catch (error) {
    const message = document.getElementById('error'); message.hidden = false; message.textContent = error.message;
  }
}(typeof window === 'undefined' ? globalThis : window));
