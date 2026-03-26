/* ============================================================
   app.js — Logique principale de DactyloSenior
   ============================================================ */

/* ---------- STATE ---------- */
let state = {
  theme:       null,
  level:       null,
  exercises:   [],
  index:       0,
  score:       0,
  streak:      0,
  bestStreak:  0,
  wordsOk:     0,
  hintShown:   false,
  wordDone:    false,
};

/* ---------- INIT ---------- */
document.addEventListener('DOMContentLoaded', () => {
  renderThemeGrid();
  document.getElementById('typing-input').addEventListener('input', onType);
  document.getElementById('typing-input').addEventListener('keydown', e => {
    if (e.key === 'Enter') e.preventDefault();
  });
});

/* ---------- THEME GRID ---------- */
function renderThemeGrid() {
  const grid = document.getElementById('theme-grid');
  grid.innerHTML = '';
  THEMES.forEach(theme => {
    const card = document.createElement('div');
    card.className = 'theme-card';
    card.dataset.theme = theme.id;
    card.innerHTML = `
      <img class="theme-card-banner" src="${theme.banner}" alt="${theme.label}" loading="lazy">
      <div class="theme-card-body">
        <div class="theme-card-title">${theme.label}</div>
        <div class="theme-card-desc">${theme.description}</div>
      </div>
    `;
    card.addEventListener('click', () => selectTheme(theme));
    grid.appendChild(card);
  });
}

/* ---------- SELECT THEME ---------- */
function selectTheme(theme) {
  state.theme = theme;
  // highlight card
  document.querySelectorAll('.theme-card').forEach(c => c.classList.remove('active'));
  document.querySelector(`.theme-card[data-theme="${theme.id}"]`).classList.add('active');
  renderLevelCards(theme);
  document.getElementById('level-section').style.display = '';
  document.getElementById('exercise-section').style.display = 'none';
  document.getElementById('results-section').style.display = 'none';
  document.getElementById('level-title').textContent = `${theme.label} — Choisissez votre niveau`;
  // scroll to levels
  document.getElementById('level-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---------- LEVEL CARDS ---------- */
function renderLevelCards(theme) {
  const container = document.getElementById('level-cards');
  container.innerHTML = '';
  theme.levels.forEach(level => {
    const card = document.createElement('div');
    card.className = 'level-card';
    card.innerHTML = `
      <div class="level-card-icon">${level.icon}</div>
      <div class="level-card-name">${level.name}</div>
      <div class="level-card-info">${level.info}</div>
    `;
    card.addEventListener('click', () => startLevel(level));
    container.appendChild(card);
  });
}

/* ---------- START LEVEL ---------- */
function startLevel(level) {
  state.level      = level;
  state.exercises  = shuffle([...level.exercises]);
  state.index      = 0;
  state.score      = 0;
  state.streak     = 0;
  state.bestStreak = 0;
  state.wordsOk    = 0;

  document.getElementById('level-section').style.display = 'none';
  document.getElementById('exercise-section').style.display = '';
  document.getElementById('results-section').style.display = 'none';

  loadExercise();
  document.getElementById('exercise-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ---------- BACK BUTTON ---------- */
document.getElementById('back-btn').addEventListener('click', goHome);

function goHome() {
  document.getElementById('exercise-section').style.display = 'none';
  document.getElementById('results-section').style.display = 'none';
  document.getElementById('level-section').style.display = '';
  document.getElementById('theme-section') && (document.getElementById('theme-section').style.display = '');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------- LOAD EXERCISE ---------- */
function loadExercise() {
  const ex = currentEx();
  state.hintShown = false;
  state.wordDone  = false;

  // image
  const img = document.getElementById('exercise-img');
  img.style.opacity = '0';
  img.src = ex.img;
  img.alt = ex.caption;
  img.onload = () => { img.style.opacity = '1'; };
  document.getElementById('image-caption').textContent = ex.caption;

  // word display
  buildLetterBoxes(ex.word, '');

  // input
  const input = document.getElementById('typing-input');
  input.value = '';
  input.disabled = false;
  setTimeout(() => input.focus(), 100);

  // feedback + hint btn
  setFeedback('', '');
  document.getElementById('hint-btn').disabled = false;

  // progress
  const total = state.exercises.length;
  const pct   = Math.round((state.index / total) * 100);
  document.getElementById('progress-bar').style.width = pct + '%';
  document.getElementById('progress-label').textContent = `Exercice ${state.index + 1} / ${total}`;

  updateStars();
  updateHeaderStats();
}

function currentEx() {
  return state.exercises[state.index % state.exercises.length];
}

/* ---------- LETTER BOXES ---------- */
function buildLetterBoxes(word, typed) {
  const container = document.getElementById('word-display');
  container.innerHTML = '';
  const chars = word.split('');

  chars.forEach((ch, i) => {
    const box = document.createElement('div');

    if (ch === ' ') {
      box.className = 'letter-box space';
    } else {
      box.className = 'letter-box';
      if (i < typed.length) {
        const ok = typed[i].toLowerCase() === ch.toLowerCase();
        box.classList.add(ok ? 'done' : 'error');
        box.textContent = ok ? ch : typed[i];
      } else if (i === typed.length) {
        box.classList.add('current');
        box.textContent = ch; // show letter to help seniors
      } else {
        box.classList.add('pending');
        box.textContent = '·';
      }
    }
    container.appendChild(box);
  });
}

/* ---------- TYPING ---------- */
function onType() {
  if (state.wordDone) return;

  const input = document.getElementById('typing-input');
  const typed  = input.value;
  const word   = currentEx().word;

  buildLetterBoxes(word, typed);

  // check for errors in typed portion
  let hasError = false;
  for (let i = 0; i < typed.length; i++) {
    if (i >= word.length || typed[i].toLowerCase() !== word[i].toLowerCase()) {
      hasError = true;
      break;
    }
  }

  if (hasError) {
    setFeedback('↩ Effacez et réessayez !', 'error');
    return;
  }

  if (typed.length > 0 && typed.length < word.length) {
    setFeedback('👍 Continuez…', 'good');
  } else if (typed.length === 0) {
    setFeedback('', '');
  }

  // SUCCESS
  if (typed.toLowerCase() === word.toLowerCase()) {
    onSuccess();
  }
}

function onSuccess() {
  state.wordDone = true;
  state.wordsOk++;
  state.streak++;
  if (state.streak > state.bestStreak) state.bestStreak = state.streak;

  const pts = state.hintShown ? 5 : 10 + (state.streak > 1 ? (state.streak - 1) * 2 : 0);
  state.score += pts;

  const msgs = state.streak >= 4
    ? [`🔥 Série de ${state.streak} ! Incroyable !`]
    : state.streak >= 2
    ? [`⚡ ${state.streak} d'affilée ! Bravo !`]
    : ['✅ Bravo !', '🎉 Excellent !', '👏 Parfait !'];

  setFeedback(msgs[Math.floor(Math.random() * msgs.length)], 'success');
  updateHeaderStats();
  updateStars();

  // confetti
  spawnConfetti();

  // disable input briefly
  document.getElementById('typing-input').disabled = true;

  setTimeout(() => {
    advanceWord();
  }, 1400);
}

function advanceWord() {
  state.index++;
  if (state.index >= state.exercises.length) {
    showResults();
  } else {
    loadExercise();
  }
}

/* ---------- HINT ---------- */
function showHint() {
  state.hintShown = true;
  document.getElementById('image-caption').textContent = '💡 ' + currentEx().hint;
  document.getElementById('hint-btn').disabled = true;
}

/* ---------- SKIP ---------- */
function skipWord() {
  state.streak = 0;
  updateHeaderStats();
  state.index++;
  if (state.index >= state.exercises.length) {
    showResults();
  } else {
    loadExercise();
  }
}

/* ---------- NEXT WORD (manual) ---------- */
function nextWord() {
  if (!state.wordDone) return;
  advanceWord();
}

/* ---------- RESULTS ---------- */
function showResults() {
  document.getElementById('exercise-section').style.display = 'none';
  document.getElementById('results-section').style.display = '';

  const pct = Math.round((state.wordsOk / state.exercises.length) * 100);
  const subtitle = pct === 100
    ? '🌟 Parfait ! Vous avez tout réussi !'
    : pct >= 70
    ? `Très bien ! ${state.wordsOk} mots sur ${state.exercises.length} réussis.`
    : `Bon début ! Continuez à pratiquer.`;

  document.getElementById('results-subtitle').textContent = subtitle;
  document.getElementById('res-score').textContent   = state.score;
  document.getElementById('res-words').textContent   = state.wordsOk;
  document.getElementById('res-streak').textContent  = state.bestStreak;

  document.getElementById('results-section').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function restartLevel() {
  startLevel(state.level);
}

/* ---------- HELPERS ---------- */
function setFeedback(msg, cls) {
  const el = document.getElementById('feedback-msg');
  el.textContent = msg;
  el.className = 'feedback-msg' + (cls ? ' ' + cls : '');
}

function updateStars() {
  const ok = state.wordsOk;
  const stars = ok < 3 ? '☆☆☆' : ok < 6 ? '⭐☆☆' : ok < 10 ? '⭐⭐☆' : '⭐⭐⭐';
  document.getElementById('stars-display').textContent = stars;
}

function updateHeaderStats() {
  document.getElementById('hdr-score').textContent  = state.score;
  document.getElementById('hdr-streak').textContent = state.streak;
  document.getElementById('hdr-words').textContent  = state.wordsOk;
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ---------- CONFETTI ---------- */
function spawnConfetti() {
  const layer = document.getElementById('confetti-layer');
  const colors = ['#e63312','#ffd700','#1a56a0','#4caf50','#ff9800','#ab47bc'];
  const card   = document.getElementById('exercise-card');
  const rect   = card.getBoundingClientRect();
  const layerRect = layer.getBoundingClientRect();

  const cx = rect.left - layerRect.left + rect.width / 2;
  const cy = rect.top  - layerRect.top  + 80;

  for (let i = 0; i < 22; i++) {
    const dot = document.createElement('div');
    const size  = 7 + Math.random() * 9;
    const angle = Math.random() * Math.PI * 2;
    const dist  = 40 + Math.random() * 80;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const isRect = Math.random() > 0.5;
    const delay  = Math.random() * 0.15;

    dot.className = 'conf-dot';
    dot.style.cssText = `
      width:${size}px; height:${size}px;
      background:${color};
      left:${cx}px; top:${cy}px;
      border-radius:${isRect ? '3px' : '50%'};
      animation-delay:${delay}s;
      --tx:${Math.cos(angle)*dist}px;
      --ty:${Math.sin(angle)*dist - 60}px;
    `;
    // override keyframes inline
    dot.style.animation = 'none';
    layer.appendChild(dot);

    // trigger
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        dot.style.transition = `transform ${0.6 + Math.random()*0.4}s ease-out, opacity 0.6s ease-out`;
        dot.style.transform  = `translate(${Math.cos(angle)*dist}px, ${Math.sin(angle)*dist - 80}px) rotate(${Math.random()*360}deg)`;
        dot.style.opacity    = '0';
        dot.style.opacity    = '1';
        // fade out
        setTimeout(() => { dot.style.opacity = '0'; }, 300 + delay * 1000);
        setTimeout(() => dot.remove(), 900);
      });
    });
    dot.style.opacity = '1';
  }
}
