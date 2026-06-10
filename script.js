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

const profileCard = document.querySelector('#profileCard');

if (profileCard) {
  let isFlipped = false;
  let currentX = 0;
  let currentY = 0;
  let isDragging = false;
  let startX = 0;
  let startY = 0;

  const setCardRotation = (x, y) => {
    profileCard.style.setProperty('--card-rotate-x', `${x}deg`);
    profileCard.style.setProperty('--card-rotate-y', `${y}deg`);
  };

  const toggleFlip = () => {
    isFlipped = !isFlipped;
    if (isFlipped) {
      setCardRotation(0, 180);
      currentY = 180;
    } else {
      setCardRotation(0, 0);
      currentY = 0;
    }
  };

  const pointerDown = (event) => {
    if (event.button !== 0) return;
    startX = event.clientX;
    startY = event.clientY;
    isDragging = false;
    profileCard.setPointerCapture(event.pointerId);
  };

  const pointerMove = (event) => {
    if (!isDragging) {
      const deltaX = Math.abs(event.clientX - startX);
      const deltaY = Math.abs(event.clientY - startY);
      if (deltaX > 5 || deltaY > 5) {
        isDragging = true;
      }
    }

    if (!isDragging) return;
    event.preventDefault();

    const deltaX = event.clientX - startX;
    const deltaY = event.clientY - startY;

    const nextY = currentY + deltaX * 0.35;
    const nextX = Math.max(-35, Math.min(35, currentX - deltaY * 0.25));

    setCardRotation(nextX, nextY);
  };

  const pointerUp = (event) => {
    if (!isDragging) {
      toggleFlip();
    } else {
      const nextX = Number(profileCard.style.getPropertyValue('--card-rotate-x').replace('deg', '')) || currentX;
      const nextY = Number(profileCard.style.getPropertyValue('--card-rotate-y').replace('deg', '')) || currentY;

      currentX = nextX;
      currentY = nextY;
      isFlipped = Math.abs(nextY % 360) > 90;
    }
    isDragging = false;
    try {
      profileCard.releasePointerCapture(event.pointerId);
    } catch (error) {
      // ignore if pointer was already released
    }
  };

  profileCard.addEventListener('pointerdown', pointerDown);
  profileCard.addEventListener('pointermove', pointerMove);
  profileCard.addEventListener('pointerup', pointerUp);
  profileCard.addEventListener('pointerleave', () => {
    if (isDragging) {
      isDragging = false;
    }
  });
  profileCard.addEventListener('pointercancel', pointerUp);
  profileCard.addEventListener('dragstart', (event) => event.preventDefault());
}

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
