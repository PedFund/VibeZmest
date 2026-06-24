document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navbar = document.querySelector('.navbar');

  if (navToggle && navbar) {
    navToggle.addEventListener('click', () => {
      navbar.classList.toggle('active');
    });
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.scroll-section').forEach((section) => {
    observer.observe(section);
  });

  const courseUrl = '#';
  const telegramUrl = 'https://t.me/vibezmest';

  const courseLinkElement = document.getElementById('course-link');
  if (courseLinkElement) {
    courseLinkElement.setAttribute('href', courseUrl);
  }

  const telegramLinkElement = document.getElementById('telegram-link');
  if (telegramLinkElement) {
    telegramLinkElement.setAttribute('href', telegramUrl);
  }
});
