'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [message, setMessage] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const name = new FormData(form).get('name')?.trim();
    if (!name) {
      setMessage('Please fill in every field before sending.');
      return;
    }
    setMessage(`Thanks, ${name}. This demo form is not connected yet. Please email leezexuan4@gmail.com directly.`);
    form.reset();
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Your name" required />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="you@example.com" required />
      <label htmlFor="message">Message</label>
      <textarea id="message" name="message" rows="5" placeholder="How can I help?" required />
      <button type="submit" className="button button-primary">Send Message <span aria-hidden="true">↗</span></button>
      <p className="form-message" aria-live="polite">{message}</p>
    </form>
  );
}
