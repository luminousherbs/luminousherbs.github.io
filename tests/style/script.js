console.log(location.pathname);

// On page load
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);


function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
} window.setTheme = setTheme;