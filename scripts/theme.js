const root = document.body;
const toggleBtn = document.getElementById('themeToggle');

function applyTheme(theme) {
  root.classList.remove('theme-light', 'theme-dark', 'theme-default');
  root.classList.add(`theme-${theme}`);
  localStorage.setItem('theme', theme);

 if (theme === 'dark') {
  toggleBtn.innerHTML = `<i class="fa fa-sun"></i>`;
  toggleBtn.setAttribute('aria-label', 'Switch to light mode');
} else {
  toggleBtn.innerHTML = `<i class="fa fa-moon"></i>`;
  toggleBtn.setAttribute('aria-label', 'Switch to dark mode');
}
 
  // Switch Prism theme
  const prismLight = document.getElementById('prism-light');
  const prismDark = document.getElementById('prism-dark');

  if (prismLight && prismDark) {
    if (theme === 'dark') {
      prismDark.disabled = false
      prismLight.disabled = true;
    } else {
      prismDark.disabled = true;
      prismLight.disabled = false;
    }
  }
}

function detectSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');

  if (savedTheme === 'light' || savedTheme === 'dark') {
    applyTheme(savedTheme);
  } else {
    applyTheme(detectSystemTheme());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const current = root.classList.contains('theme-dark') ? 'dark' : 'light';
      applyTheme(current === 'dark' ? 'light' : 'dark');
      
      if (root.classList.contains('theme-dark')) {
        toggleBtn.innerHTML = `<i class="fa fa-sun"></i>`;
      } else {
        toggleBtn.innerHTML = `<i class="fa fa-moon"></i>`;
      }
    
    });
  }
});











