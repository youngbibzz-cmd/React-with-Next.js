"use client";

import { useState, type FormEvent } from "react";

const contactEmail = "hello@jordanlee.dev";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);

    setStatus("Opening your email app with your message ready to send.");
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Your name</label>
        <input id="name" name="name" autoComplete="name" placeholder="How should I address you?" required />
      </div>
      <div className="field">
        <label htmlFor="email">Email address</label>
        <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
      </div>
      <div className="field field-wide">
        <label htmlFor="message">A little about your project</label>
        <textarea id="message" name="message" placeholder="What are you dreaming up?" required />
      </div>
      <button className="button button-dark form-submit" type="submit">Prepare email <span aria-hidden="true">↗</span></button>
      <p className="form-status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
