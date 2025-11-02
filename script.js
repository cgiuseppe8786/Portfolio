
//  Gestione Tema
const btn = document.getElementById('theme-toggle');
const body = document.body;

const saved = localStorage.getItem('theme');
if (saved) {
    body.dataset.theme = saved;
    btn.textContent = saved === 'dark' ? '☀️' : '🌙';
} else {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    body.dataset.theme = prefersDark ? 'dark' : 'light';
    btn.textContent = prefersDark ? '☀️' : '🌙';
}

function toggleTheme() {
    const isDark = body.dataset.theme === 'dark';
    body.dataset.theme = isDark ? 'light' : 'dark';
    localStorage.setItem('theme', body.dataset.theme);
    btn.textContent = isDark ? '🌙' : '☀️';
}
btn.addEventListener('click', toggleTheme);
btn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') toggleTheme();
});

//  Gestione Accordion
const accordion = document.getElementById('projects-accordion');
if (accordion) {
    accordion.addEventListener('click', (e) => {
        const btn = e.target.closest('.projects-group__header');
        if (!btn) return;
        const group = btn.closest('.projects-group');
        // se vuoi "solo uno aperto alla volta", decommenta il forEach
        // accordion.querySelectorAll('.projects-group').forEach(g => g.classList.remove('is-open'));
        group.classList.toggle('is-open');
    });

    // Conta il numero di progetti per aggiornare il badge
     function updateProjectBadges() {
    const groups = document.querySelectorAll('.projects-group');
    groups.forEach((group) => {
      const panel = group.querySelector('.projects-group__panel');
      const badge = group.querySelector('.projects-group__badge');
      if (!panel || !badge) return;

      // conta tutte le card progetto dentro a questo gruppo
      const projects = panel.querySelectorAll('.project-tile');
      const count = projects.length;

      badge.textContent = count;
    });
  }
  updateProjectBadges();
}