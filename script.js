const toggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu-list');

toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  toggle.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

document.getElementById('calcBtn').addEventListener('click', () => {
  const bottles = parseInt(document.getElementById('bottles').value) || 0;
  const sort = parseInt(document.getElementById('sort').value) || 0;

  let score = 100 - bottles * 2 + sort / 2;
  if (score > 100) score = 100;
  if (score < 0) score = 0;

  const result = document.getElementById('result');
  if (score > 70) {
    result.textContent = `Отлично! 🌿 Твой экологический след минимален (${score}%)`;
    result.style.color = "#00b894";
  } else if (score > 40) {
    result.textContent = `Хорошо 👍 Но можно лучше (${score}%)`;
    result.style.color = "#f39c12";
  } else {
    result.textContent = `Пора задуматься 😟 (${score}%)`;
    result.style.color = "#d63031";
  }
});


