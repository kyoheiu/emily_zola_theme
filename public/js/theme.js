const key = 'current_emily_zola_style';

function getTheme() {
  let theme = document.getElementById('stylesheet');
  let current_style = localStorage.getItem(key);
  if (current_style === null) {
    localStorage.setItem(key, theme.href);
  }
  theme.href = localStorage.getItem(key);
}

function changeTheme() {
  let current_style = localStorage.getItem(key);
  if (current_style.includes('dark')) {
    localStorage.setItem(key, '/light.css');
  }
  else {
    localStorage.setItem(key, '/dark.css');
  }
  let theme = document.getElementById('stylesheet');
  theme.href = localStorage.getItem(key);
}