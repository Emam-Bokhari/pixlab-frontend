// Pixlab – shared script. Change API when you deploy the backend.
const API = 'http://localhost:5000/api/v1';

const q = n => document.querySelector(`[data-r="${n}"]`);
const qa = s => document.querySelectorAll(s);
const inp = 'w-full rounded-xl border border-line bg-white px-4 py-3 text-base font-normal outline-none focus:border-ink focus:ring-4 focus:ring-gold/40';
const dims = (a, b) => `${a}|${b}`;

const tools = {
  bg: { path: 'bg-remove', out: 'bg-removed.png',
    fields: [{ n: 'bgColor', l: 'Fill colour (optional)', t: 'text', p: '#FFFFFF, empty = transparent' }],
    stats: [['Fill colour', 'X-Background-Color', '']] },
  upscale: { path: 'upscales',
    fields: [{ n: 'scale', l: 'Scale', o: [2, 3, 4] }],
    stats: [['Original', dims('X-Original-Width', 'X-Original-Height'), ' px'], ['Upscaled', dims('X-Upscaled-Width', 'X-Upscaled-Height'), ' px'],
      ['File before', 'X-Original-Size-KB', ' KB'], ['File after', 'X-Upscaled-Size-KB', ' KB'], ['Size change', 'X-Size-Increase-Percent', '%'], ['Scale', 'X-Scale', 'x']] },
  reduce: { path: 'reduce',
    fields: [{ n: 'targetSizeKb', l: 'Target size (KB)', t: 'number', p: '200', a: 'required min="1"' }],
    stats: [['Original', dims('X-Original-Width', 'X-Original-Height'), ' px'], ['Output', dims('X-Reduced-Width', 'X-Reduced-Height'), ' px'],
      ['File before', 'X-Original-Size-KB', ' KB'], ['File after', 'X-Reduced-Size-KB', ' KB'], ['Reduced by', 'X-Reduction-Percent', '%'], ['Target', 'X-Target-Size-KB', ' KB']] },
  resize: { path: 'resize',
    fields: [{ n: 'width', l: 'Width (px)', t: 'number', p: '800', a: 'required min="8" max="8000"', h: 1 }, { n: 'height', l: 'Height (px)', t: 'number', p: '600', a: 'required min="8" max="8000"', h: 1 }],
    stats: [['Original', dims('X-Original-Width', 'X-Original-Height'), ' px'], ['Resized', dims('X-Resized-Width', 'X-Resized-Height'), ' px'],
      ['File before', 'X-Original-Size-KB', ' KB'], ['File after', 'X-Resized-Size-KB', ' KB']] }
};

const netErr = 'Cannot reach the server. Check your connection and try again.';
const cur = tools[document.body.dataset.tool];
let file = null;

if (cur) {
  q('fields').innerHTML = cur.fields.map(f =>
    `<label class="${f.h ? 'col-span-1' : 'col-span-2'} flex flex-col gap-1.5 text-sm font-semibold">${f.l}` +
    (f.o ? `<select name="${f.n}" class="${inp}">${f.o.map(v => `<option value="${v}">${v}x larger</option>`).join('')}</select>`
         : `<input name="${f.n}" type="${f.t}" placeholder="${f.p || ''}" ${f.a || ''} class="${inp}">`) + `</label>`).join('');

  const showErr = m => { const e = q('err'); e.textContent = m; e.classList.toggle('hidden', !m); };
  const setFile = f => {
    if (!f) return;
    file = f; showErr('');
    q('fname').textContent = `${f.name} (${(f.size / 1024).toFixed(0)} KB)`;
    q('orig').src = URL.createObjectURL(f);
    q('orig').classList.remove('hidden'); q('origph').classList.add('hidden');
  };
  q('file').addEventListener('change', e => setFile(e.target.files[0]));
  const drop = q('drop');
  ['dragenter', 'dragover'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.add('border-gold'); }));
  ['dragleave', 'drop'].forEach(ev => drop.addEventListener(ev, e => { e.preventDefault(); drop.classList.remove('border-gold'); }));
  drop.addEventListener('drop', e => { q('file').files = e.dataTransfer.files; setFile(e.dataTransfer.files[0]); });

  q('go').addEventListener('click', async () => {
    if (!file) return showErr('Choose an image first.');
    const fd = new FormData(); fd.append('image', file);
    for (const i of qa('[data-r="fields"] [name]')) {
      if (!i.checkValidity()) return i.reportValidity();
      if (i.value) fd.append(i.name, i.value);
    }
    showErr(''); q('go').disabled = true; q('spin').classList.remove('hidden');
    try {
      const r = await fetch(`${API}/${cur.path}`, { method: 'POST', body: fd });
      if (!r.ok) { const j = await r.json().catch(() => ({})); throw new Error(j.message || 'The server could not process this image. Try another file.'); }
      const url = URL.createObjectURL(await r.blob());
      q('res').src = url; q('res').classList.remove('hidden'); q('resph').classList.add('hidden');
      q('stats').innerHTML = cur.stats.map(([l, h, s]) => {
        const v = h.split('|').map(x => r.headers.get(x));
        return v.includes(null) ? '' : `<div class="rounded-2xl border border-line bg-white p-4"><dt class="text-xs text-dim">${l}</dt><dd class="mt-1 font-head text-lg font-bold">${v.join(' × ')}${s}</dd></div>`;
      }).join('');
      const d = q('dl'); d.href = url; d.download = cur.out || ('snap-' + file.name); d.classList.remove('hidden');
    } catch (x) { showErr(x.message === 'Failed to fetch' ? netErr : x.message); }
    q('go').disabled = false; q('spin').classList.add('hidden');
  });
}

if (q('contact')) {
  q('contact').addEventListener('submit', async e => {
    e.preventDefault();
    const f = e.target, s = q('cstatus'), b = f.querySelector('button');
    b.disabled = true;
    const paint = (ok, m) => { s.textContent = m; s.className = `rounded-xl p-3 text-sm font-medium sm:col-span-2 ${ok ? 'bg-emerald-50 text-emerald-800' : 'bg-red-50 text-red-700'}`; };
    try {
      const r = await fetch(`${API}/supports`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(new FormData(f))) });
      const j = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(j.message || 'Message not sent. Check the fields and try again.');
      paint(true, 'Message sent. We will reply by email.'); f.reset();
    } catch (x) { paint(false, x.message === 'Failed to fetch' ? netErr : x.message); }
    b.disabled = false;
  });
}

// Home page before/after slider
if (q('range')) {
  const top = q('top'), knob = q('knob'), rg = q('range');
  const set = () => { top.style.clipPath = `inset(0 ${100 - rg.value}% 0 0)`; knob.style.left = rg.value + '%'; };
  rg.addEventListener('input', set); set();
}
