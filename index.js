const scrollBtn = document.getElementById("scrollBtn");

const toggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
toggleBtn.textContent = savedTheme === 'light' ? 'Dark Mode' : 'Light Mode';

toggleBtn.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  toggleBtn.textContent = newTheme === 'light'  ? 'Dark Mode' : 'Light Mode';

  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});

