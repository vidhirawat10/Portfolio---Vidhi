// src/components/ConnectSection.js
import React, { useState } from 'react';
import './ConnectSection.css';
import FallingStars from './FallingStars'; // For the background animation

// No longer importing connectIllustration as it's removed from the design.
// import connectIllustration from '../data/Connect.png';

function ConnectSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send this data to a backend service (e.g., EmailJS, Formspree, your own API)
    alert('Thank you for your message! I will get back to you shortly.');
    setFormData({ // Clear form after submission
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };

  return (
    <div className="connect-section-main">
      <FallingStars numberOfStars={100} />
      <div className="connect-content-wrapper">
        <h2 className="connect-main-heading">
          <span className="heading-icon">🎧</span> Get In Touch
        </h2>

        <div className="contact-card">
          {/* Removed contact-illustration div */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name" className="visually-hidden">Name</label>
              <div className="input-with-icon">
                <span className="icon">👤</span>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email" className="visually-hidden">Email</label>
              <div className="input-with-icon">
                <span className="icon">📧</span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="visually-hidden">Phone</label>
              <div className="input-with-icon">
                <span className="icon">📞</span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message" className="visually-hidden">Message</label>
              <div className="input-with-icon message-input">
                <span className="icon msg-icon">💬</span>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <button type="submit" className="submit-button">
              Submit <span className="send-icon">➤</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ConnectSection;