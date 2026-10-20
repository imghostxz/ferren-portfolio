// Ferren portfolio: detail reel, headline chips, details bento, gallery, lightbox, commission plans, FAQ,
// optional ambient music and the screentone background.
document.documentElement.classList.add('js');

// ---------------------------------------------------------------------------
// CONTENT. Edit here.
// ---------------------------------------------------------------------------

// Every finished piece the artist shared in #staff-chat (images prepared by tools/prepare_art.py).
// `mature: true` shows the piece blurred until the visitor clicks it.
// `views` adds extra views of the same piece in the large viewer (a close-up or another version).
const ARTWORKS = [
  { id: 'illustration-03', cat: 'illustration', w: 1083, h: 1506,
    alt: 'Man in a long black coat seated in front of red curtains, the word commissions painted behind him',
    views: [['illustration-03-detail', 'Close-up']] },
  { id: 'manga-03', cat: 'manga', w: 1280, h: 1700,
    alt: 'Black and white scene: a man and a woman in white riding a horse through a misty forest',
    views: [['manga-03-detail', 'Close-up']] },
  { id: 'illustration-11', cat: 'illustration', w: 1280, h: 1613,
    alt: 'Grinning woman with glowing eyes and a beaded headdress, in red light' },
  { id: 'adopt-02', cat: 'adopt', w: 1563, h: 1504,
    alt: 'Adopt design: silver-haired hooded character with twin sickles, with head studies and a glowing demon mask' },
  { id: 'illustration-04', cat: 'illustration', w: 1280, h: 1252,
    alt: 'Man in a fur hat with a golden eagle, painted against a grey sky' },
  { id: 'manga-06', cat: 'manga', w: 1280, h: 1816,
    alt: 'Black and white warrior with long white hair and a fur hat',
    views: [['manga-06-colour', 'Colour version']] },
  { id: 'illustration-08', cat: 'illustration', w: 1280, h: 1179,
    alt: 'Blond man with blood running down his face, touching his cheek' },
  { id: 'illustration-02', cat: 'illustration', w: 2000, h: 1297,
    alt: 'Woman swinging a blood-red creature with a chainsaw figure beside her, the word commission behind them, on a peach background' },
  { id: 'manga-04', cat: 'manga', w: 1212, h: 1184,
    alt: 'Black and white portrait with screentone: a man with long curly hair under a wide fur hat' },
  { id: 'adopt-01', cat: 'adopt', w: 1374, h: 1479,
    alt: 'Adopt design: pale-haired character in a black harness, corset and studded belts, shown close up and full body' },
  { id: 'illustration-09', cat: 'illustration', w: 1280, h: 1592,
    alt: 'Dark-haired man with glowing eyes, half under red water' },
  { id: 'illustration-10', cat: 'illustration', w: 1280, h: 1224,
    alt: 'Woman with long black hair and green eyes looking over her shoulder' },
  { id: 'manga-02', cat: 'manga', w: 1613, h: 1550,
    alt: 'Black and white manga-style illustration: a woman in a fur hat holding an embroidered patterned scarf' },
  { id: 'illustration-07', cat: 'illustration', w: 1125, h: 1813, mature: true,
    alt: 'Long-haired woman with claws holding a net of skulls, on a red background' },
  { id: 'illustration-06', cat: 'illustration', w: 1280, h: 1698,
    alt: 'Pale young man with a black flower in his mouth, on a deep blue background' },
  { id: 'manga-01', cat: 'manga', w: 1300, h: 1510,
    alt: 'Black and white manga-style portrait with screentone: a bearded man in a fur hat and an armoured collar' },
  { id: 'illustration-05', cat: 'illustration', w: 1270, h: 1214, mature: true,
    alt: 'Two figures in a close embrace, painted in warm tones' },
  { id: 'illustration-01', cat: 'illustration', w: 1456, h: 1508,
    alt: 'Horned character in a black bucket hat with piercings and a cut-out black outfit, on a mint and grey textured background' },
  { id: 'manga-05', cat: 'manga', w: 975, h: 1771,
    alt: 'Black and white sketch of a woman with long braids, with screentone texture' },
  { id: 'ych-03', cat: 'ych', w: 2000, h: 1352, sketch: true,
    alt: 'Coloured sketch of two characters close together on a red background' },
  { id: 'ych-02', cat: 'ych', w: 2000, h: 1340, sketch: true,
    alt: 'Rough sketch of two characters close together on a dark red background' },
  { id: 'ych-01', cat: 'ych', w: 2000, h: 1139, sketch: true,
    alt: 'Pencil sketch of a girl with wavy hair next to a roaring big cat' },
];

const CATEGORY = { illustration: 'Illustration', adopt: 'Adopt', ych: 'YCH', manga: 'Manga style' };

// Close-ups cut from finished pieces (art/detail/*.jpg), each opening its piece. Every close-up appears once.
// [image, piece it comes from]
const DETAIL = (name, piece) => ({ src: `art/detail/${name}.jpg`, piece });
const VIEW = (name, piece) => ({ src: `art/thumb/${name}.jpg`, piece });

const CHIPS = [
  [DETAIL('belts', 'adopt-01'), DETAIL('creature', 'illustration-02'), DETAIL('eagle', 'illustration-04')],
  [DETAIL('fur', 'manga-01'), DETAIL('green-eye', 'illustration-10'), DETAIL('flower', 'illustration-06')],
];
const REEL = [
  VIEW('illustration-03-detail', 'illustration-03'), DETAIL('beads', 'illustration-11'), VIEW('manga-03-detail', 'manga-03'),
  DETAIL('water', 'illustration-09'), VIEW('manga-06-colour', 'manga-06'), DETAIL('blood', 'illustration-08'),
];
const BENTO = [
  { ...DETAIL('skulls', 'illustration-07'), size: 'big', label: 'Skulls, in red' },
  { ...DETAIL('horse', 'manga-03'), label: 'Forest ride' },
  { ...DETAIL('gaze', 'manga-04'), label: 'Screentone' },
];

// Shown above the gallery when a filter is picked (the artist's own notes from #staff-chat).
const FILTER_NOTES = {
  illustration: "Full illustrations of the client's characters, or artwork of the client's skins.",
  ych: 'Work-in-progress sketches for now. Finished YCH examples are coming soon.',
};

// Commission types. Prices are not set yet: fill `usd` and/or `robux` with text when the artist decides,
// for example usd: '$25', robux: '2,500 Robux'. While both are null the card shows "On request".
// As soon as any price is filled in, a USD / Robux switch appears above the cards.
const PLANS = [
  { title: 'Full illustration', art: 'art/detail/eagle.jpg',
    text: 'Your character, or your Roblox skin, as a full-fledged illustration.', usd: null, robux: null },
  { title: 'Adopts', art: 'art/detail/mask.jpg',
    text: 'Original characters designed by the artist, ready to be adopted.', usd: null, robux: null },
  { title: 'YCH', art: 'art/thumb/ych-03.jpg',
    text: 'Your Character Here: a ready-made composition with your character drawn in.', usd: null, robux: null },
  { title: 'Manga style', art: 'art/detail/scarf.jpg',
    text: 'Black and white, manga-inspired artwork with screentone and texture.', usd: null, robux: null },
];

// Multi-art packs (cheaper per piece than single orders). Add rows when the artist sets them,
// for example { label: '3 artworks', usd: '...', robux: '...' }.
const PACKS = [];

const FAQ = [
  ['How much does a commission cost?', 'The price depends on how complex the piece is. Open a ticket on Discord with your idea and you get a price for it.'],
  ['Are packs cheaper?', 'Yes. Ordering several artworks in one go costs less per piece than single commissions.'],
  ['What payment methods do you accept?', 'PayPal and Robux.'],
  ['Can you draw my Roblox avatar?', 'Yes. Artwork of your Roblox skin is one of the commission types. Send your username and screenshots of your avatar in the ticket.'],
  ['What is a YCH?', 'YCH means "Your Character Here": a ready-made composition where your character is drawn in.'],
  ['What is an adopt?', 'An original character designed by the artist that you can adopt and make your own.'],
  ['How do I order?', 'Join the Discord, go to #open-a-ticket and click "Open a ticket". Please don\'t send DMs to the owners or the staff.'],
  ['What should I send in the ticket?', null, [
    'The type: full illustration, adopt, YCH or manga style',
    'References of your character, or your Roblox username and screenshots of your skin',
    'How many characters',
    'Pose, expression and mood',
    'Background idea, if you want one',
    'Your deadline, if you have one',
    'How you will pay: PayPal or Robux',
  ]],
  ['Can I repost the art?', 'All artwork belongs to Ferren and all rights are reserved. Please ask before reposting, and never trace or edit the art.'],
];

// ---------------------------------------------------------------------------

const $ = (s, el = document) => el.querySelector(s);
const indexOf = Object.fromEntries(ARTWORKS.map((a, i) => [a.id, i]));
const thumb = (id) => `art/thumb/${id}.jpg`;
const full = (id) => `art/full/${id}.jpg`;
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const revealed = new Set(); // mature pieces the visitor chose to see
const label = (a) => (a.sketch ? 'YCH · Sketch' : CATEGORY[a.cat]);

$('#year').textContent = String(new Date().getFullYear());
document.addEventListener('dragstart', (e) => { if (e.target.tagName === 'IMG') e.preventDefault(); });

// ---------- detail reel ----------
const reel = $('#reel');
const reelItem = (d, copy) => {
  const a = ARTWORKS[indexOf[d.piece]];
  const b = document.createElement('button');
  b.type = 'button';
  if (copy) {
    b.tabIndex = -1;
    b.setAttribute('aria-hidden', 'true');
  } else {
    b.setAttribute('aria-label', `Open the full piece: ${a.alt}`);
  }
  b.innerHTML = `<img src="${d.src}" alt="" decoding="async">`;
  b.addEventListener('click', () => openLightbox(indexOf[d.piece]));
  return b;
};
REEL.forEach((d) => reel.append(reelItem(d, false)));
REEL.forEach((d) => reel.append(reelItem(d, true))); // second copy keeps the loop seamless

// ---------- headline chips ----------
if (!reduceMotion) {
  document.querySelectorAll('.chip').forEach((chip) => {
    const list = CHIPS[Number(chip.dataset.chip)];
    const img = chip.querySelector('img');
    let k = 0;
    setInterval(() => {
      chip.classList.add('is-swapping');
      setTimeout(() => {
        k = (k + 1) % list.length;
        img.src = list[k].src;
        chip.classList.remove('is-swapping');
      }, 350);
    }, 2600 + Number(chip.dataset.chip) * 700);
  });
}

// ---------- details bento ----------
const bento = $('#bento');
BENTO.forEach((d, n) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.className = `bento-tile lift${d.size ? ` ${d.size}` : ''}`;
  b.setAttribute('aria-label', `${d.label}: open the full piece`);
  b.innerHTML = `<img src="${d.src}" alt="" loading="lazy" decoding="async"><span>${d.label}</span>`;
  b.addEventListener('click', () => openLightbox(indexOf[d.piece]));
  if (n === 0) bento.prepend(b); else bento.append(b);
});

// ---------- gallery ----------
const gallery = $('#gallery');
ARTWORKS.forEach((a, i) => {
  const card = document.createElement('figure');
  card.className = `card lift${a.mature ? ' is-mature' : ''}`;
  card.dataset.cat = a.cat;
  card.innerHTML = `
    <button class="card-btn" type="button" aria-label="${a.mature ? 'Mature piece, click to view' : `Open: ${a.alt}`}">
      <img src="${thumb(a.id)}" alt="${a.alt}" width="${a.w}" height="${a.h}" loading="lazy" decoding="async">
      <span class="card-tag">${label(a)}</span>
    </button>`;
  card.querySelector('.card-btn').addEventListener('click', () => {
    if (a.mature && !revealed.has(a.id)) {
      revealed.add(a.id);
      card.classList.remove('is-mature');
      card.querySelector('.card-btn').setAttribute('aria-label', `Open: ${a.alt}`);
      return;
    }
    openLightbox(i);
  });
  gallery.append(card);
});

let filter = 'all';
document.querySelectorAll('.filter').forEach((btn) => btn.addEventListener('click', () => {
  filter = btn.dataset.filter;
  document.querySelectorAll('.filter').forEach((b) => {
    b.classList.toggle('is-active', b === btn);
    b.setAttribute('aria-selected', String(b === btn));
  });
  gallery.querySelectorAll('.card').forEach((c) => { c.hidden = filter !== 'all' && c.dataset.cat !== filter; });
  const note = $('#filter-note');
  note.hidden = !FILTER_NOTES[filter];
  note.textContent = FILTER_NOTES[filter] ?? '';
}));

// ---------- lightbox ----------
const lb = $('#lightbox');
const lbImg = $('#lb-img');
let current = 0;
const all = ARTWORKS.map((_, i) => i);
// Arrows move through the filtered set; a piece opened from a close-up moves through everything.
const navList = () => {
  const list = all.filter((i) => filter === 'all' || ARTWORKS[i].cat === filter);
  return list.includes(current) ? list : all;
};

function setView(a, viewId) {
  lbImg.src = full(viewId);
  lbImg.alt = a.alt;
  const hidden = Boolean(a.mature && !revealed.has(a.id));
  lbImg.classList.toggle('is-hidden-mature', hidden);
  $('#lb-title').textContent = hidden ? 'Mature piece · click the image to view' : label(a);
  $('#lb-views').querySelectorAll('button').forEach((b) => b.classList.toggle('is-active', b.dataset.view === viewId));
}

function showArt(i) {
  current = i;
  const a = ARTWORKS[i];
  const views = a.views ? [[a.id, 'Full piece'], ...a.views] : [];
  $('#lb-views').innerHTML = views.map(([id, name]) => `<button type="button" data-view="${id}">${name}</button>`).join('');
  setView(a, a.id);
}
$('#lb-views').addEventListener('click', (e) => {
  const b = e.target.closest('button');
  if (b) setView(ARTWORKS[current], b.dataset.view);
});
lbImg.addEventListener('click', () => {
  const a = ARTWORKS[current];
  if (a.mature && !revealed.has(a.id)) {
    revealed.add(a.id);
    lbImg.classList.remove('is-hidden-mature');
    $('#lb-title').textContent = label(a);
    gallery.children[current].classList.remove('is-mature');
  }
});
function openLightbox(i) {
  showArt(i);
  if (!lb.open) lb.showModal();
}
function step(dir) {
  const list = navList();
  showArt(list[(list.indexOf(current) + dir + list.length) % list.length]);
}
$('.lb-close').addEventListener('click', () => lb.close());
$('.lb-prev').addEventListener('click', () => step(-1));
$('.lb-next').addEventListener('click', () => step(1));
lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });
document.addEventListener('keydown', (e) => {
  if (!lb.open) return;
  if (e.key === 'ArrowLeft') step(-1);
  if (e.key === 'ArrowRight') step(1);
});
let touchX = null;
lb.addEventListener('touchstart', (e) => { touchX = e.touches[0].clientX; }, { passive: true });
lb.addEventListener('touchend', (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
  touchX = null;
});

// ---------- commission plans ----------
const hasPrices = [...PLANS, ...PACKS].some((p) => p.usd || p.robux);
let currency = 'usd';
const priceOf = (p) => p[currency] ?? p[currency === 'usd' ? 'robux' : 'usd'];

function renderPlans() {
  $('#plans').innerHTML = PLANS.map((p) => {
    const price = priceOf(p);
    return `
      <article class="plan lift">
        <div class="plan-art"><img src="${p.art}" alt="" loading="lazy"></div>
        <div class="plan-body">
          <h3>${p.title}</h3>
          <p>${p.text}</p>
          <div class="plan-price">
            <span>Price</span>
            <strong class="${price ? '' : 'is-pending'}">${price ?? 'On request'}</strong>
          </div>
          <a class="pill pill-solid" href="https://discord.gg/yUHukMJtHS" target="_blank" rel="noopener">Order on Discord <span aria-hidden="true">→</span></a>
        </div>
      </article>`;
  }).join('');
  $('#pack-prices').innerHTML = (PACKS.length ? PACKS : [{ label: 'Pack prices', usd: null, robux: null }]).map((p) => `
    <div><dt>${p.label}</dt><dd>${priceOf(p) ?? 'Coming soon, ask in a ticket'}</dd></div>`).join('');
}
renderPlans();
if (hasPrices) {
  const cur = $('#currency');
  cur.hidden = false;
  cur.addEventListener('click', (e) => {
    const b = e.target.closest('button');
    if (!b) return;
    currency = b.dataset.cur;
    cur.querySelectorAll('button').forEach((x) => x.classList.toggle('is-active', x === b));
    renderPlans();
  });
}

// ---------- FAQ ----------
$('#faq-list').innerHTML = FAQ.map(([q, a, list], i) => `
  <details${i === 0 ? ' open' : ''}>
    <summary>${q}</summary>
    <div class="answer">${a ? `<p>${a}</p>` : ''}${list ? `<ul>${list.map((x) => `<li>${x}</li>`).join('')}</ul>` : ''}</div>
  </details>`).join('');

// ---------- header + entrance ----------
const header = $('.top');
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 30);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Everything is visible from the start; items below the fold only lift a little as they scroll in.
const io = new IntersectionObserver((entries) => entries.forEach((en) => {
  if (en.isIntersecting) {
    en.target.classList.add('is-lifting');
    io.unobserve(en.target);
  }
}), { rootMargin: '0px 0px -6% 0px' });
document.querySelectorAll('.lift, .step').forEach((el) => {
  el.classList.add('lift');
  if (el.getBoundingClientRect().top > window.innerHeight) io.observe(el);
});

// ---------- ambient music ----------
// Generated live in the browser (no audio file): a slow dark pad in D minor with a soft bell melody and reverb.
// It only starts when the visitor presses the button.
const music = (() => {
  let ctx = null;
  let master = null;
  let timer = null;
  let nextChord = 0;
  let nextBell = 0;
  let chordIndex = 0;
  const hz = (midi) => 440 * 2 ** ((midi - 69) / 12);
  const CHORDS = [[50, 53, 57], [46, 50, 53], [43, 46, 50], [45, 49, 52]]; // Dm, Bb, Gm, A
  const BELLS = [62, 65, 67, 69, 72, 74, 77];

  function reverb() {
    const len = ctx.sampleRate * 4;
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const d = buf.getChannelData(ch);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len) ** 3;
    }
    const conv = ctx.createConvolver();
    conv.buffer = buf;
    return conv;
  }

  let wet;
  function pad(t, notes) {
    notes.forEach((n) => {
      const g = ctx.createGain();
      const f = ctx.createBiquadFilter();
      f.type = 'lowpass';
      f.frequency.value = 650;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.05, t + 3);
      g.gain.linearRampToValueAtTime(0.0001, t + 10);
      [-7, 7].forEach((cents) => {
        const o = ctx.createOscillator();
        o.type = 'sawtooth';
        o.frequency.value = hz(n);
        o.detune.value = cents;
        o.connect(f);
        o.start(t);
        o.stop(t + 10.2);
      });
      f.connect(g);
      g.connect(master);
      g.connect(wet);
    });
    const sub = ctx.createOscillator();
    const sg = ctx.createGain();
    sub.type = 'sine';
    sub.frequency.value = hz(notes[0] - 12);
    sg.gain.setValueAtTime(0, t);
    sg.gain.linearRampToValueAtTime(0.09, t + 3);
    sg.gain.linearRampToValueAtTime(0.0001, t + 10);
    sub.connect(sg).connect(master);
    sub.start(t);
    sub.stop(t + 10.2);
  }

  function bell(t) {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = 'triangle';
    o.frequency.value = hz(BELLS[Math.floor(Math.random() * BELLS.length)]);
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(0.045, t + 0.02);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 2.6);
    o.connect(g);
    g.connect(wet);
    g.connect(master);
    o.start(t);
    o.stop(t + 2.7);
  }

  function schedule() {
    const now = ctx.currentTime;
    while (nextChord < now + 1) {
      pad(nextChord, CHORDS[chordIndex % CHORDS.length]);
      chordIndex += 1;
      nextChord += 8;
    }
    while (nextBell < now + 1) {
      bell(nextBell);
      nextBell += 0.7 + Math.random() * 2.2;
    }
  }

  return {
    async start() {
      if (!ctx) {
        ctx = new (window.AudioContext || window.webkitAudioContext)();
        master = ctx.createGain();
        master.gain.value = 0;
        master.connect(ctx.destination);
        wet = ctx.createGain();
        wet.gain.value = 0.9;
        const rv = reverb();
        wet.connect(rv).connect(master);
        nextChord = ctx.currentTime + 0.1;
        nextBell = ctx.currentTime + 2;
      }
      await ctx.resume();
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.linearRampToValueAtTime(0.55, ctx.currentTime + 2.5);
      schedule();
      timer = setInterval(schedule, 400);
    },
    stop() {
      if (!ctx) return;
      clearInterval(timer);
      master.gain.cancelScheduledValues(ctx.currentTime);
      master.gain.setValueAtTime(master.gain.value, ctx.currentTime);
      master.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.2);
      setTimeout(() => ctx.suspend(), 1300);
    },
  };
})();

const soundBtn = $('#sound');
soundBtn.addEventListener('click', async () => {
  const on = soundBtn.getAttribute('aria-pressed') !== 'true';
  soundBtn.setAttribute('aria-pressed', String(on));
  soundBtn.querySelector('.sound-label').textContent = on ? 'Music on' : 'Play music';
  try {
    if (on) await music.start(); else music.stop();
  } catch {
    soundBtn.setAttribute('aria-pressed', 'false');
    soundBtn.querySelector('.sound-label').textContent = 'Music unavailable';
  }
});

// ---------- animated screentone background ----------
// Halftone dots (the screentone the artist uses) whose size drifts slowly; they grow a little near the pointer.
(function halftone() {
  const canvas = $('#halftone');
  const ctx = canvas.getContext('2d');
  let gap = 18;
  let w = 0;
  let h = 0;
  const pointer = { x: -9999, y: -9999, tx: -9999, ty: -9999 };

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    w = window.innerWidth;
    h = window.innerHeight;
    gap = w < 760 ? 13 : 18;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function frame(t) {
    const s = t / 1000;
    pointer.x += (pointer.tx - pointer.x) * 0.08;
    pointer.y += (pointer.ty - pointer.y) * 0.08;
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(115, 12, 30, 0.5)'; // #730c1e
    ctx.beginPath();
    for (let y = gap / 2; y < h + gap; y += gap) {
      for (let x = gap / 2; x < w + gap; x += gap) {
        let v = (Math.sin(x * 0.0052 + s * 0.35) + Math.sin(y * 0.0071 - s * 0.27)
          + Math.sin((x + y) * 0.0034 + s * 0.22) + Math.sin(Math.hypot(x - w * 0.5, y) * 0.006 - s * 0.4)) / 4;
        const d = Math.hypot(x - pointer.x, y - pointer.y);
        if (d < 220) v += (1 - d / 220) * 0.55;
        const r = Math.max(0, v - 0.08) * gap * 0.6;
        if (r > 0.35) {
          ctx.moveTo(x + r, y);
          ctx.arc(x, y, r, 0, Math.PI * 2);
        }
      }
    }
    ctx.fill();
  }

  let last = 0;
  function loop(t) {
    if (t - last > 33) {
      frame(t);
      last = t;
    }
    requestAnimationFrame(loop);
  }
  resize();
  window.addEventListener('resize', () => {
    resize();
    if (reduceMotion) frame(0);
  });
  window.addEventListener('pointermove', (e) => { pointer.tx = e.clientX; pointer.ty = e.clientY; }, { passive: true });
  if (reduceMotion) frame(0);
  else requestAnimationFrame(loop);
}());
