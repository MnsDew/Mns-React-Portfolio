// portfolio/src/components/ContactCard.js
import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../css/ContactCard.css";

export default function ContactCard({ onClose }) {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          alert("Message sent successfully!");
          e.target.reset();
          onClose();
        },
        () => {
          alert("Failed to send message. Try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="contact-card-overlay">
      <div className="contact-card">
        <button onClick={onClose} className="close-btn">×</button>
        <h2>Contact Me</h2>
        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" placeholder="Your message..." required />
          <button type="submit" disabled={loading} className="submit-btn">
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}