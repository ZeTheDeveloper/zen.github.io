const form = document.querySelector('#contactForm');
const messageText = document.querySelector('#formMessage');
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => revealObserver.observe(element));

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    messageText.textContent = 'Please fill in every field before sending.';
    return;
  }

  messageText.textContent = `Thanks, ${name}! Your message is ready to be sent.`;
  form.reset();
});
