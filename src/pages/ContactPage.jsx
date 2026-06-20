import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ContactPage.css';

function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    budget: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (Demo)');
  };

  return (
    <div className="contact-page">
      <Navbar />

      <section className="contact-section">
        <div className="container">
          <div className="contact-section__grid">
            <div className="contact-section__form-area">
              <div className="section-label">
                <span className="section-label__icon">////</span>
                <span className="section-label__text">CONTACT US</span>
              </div>
              <h1 className="contact-section__title">Start your AI build</h1>
              <p className="contact-section__desc">
                Ready to deploy custom agents? Let's discuss your infrastructure.
              </p>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form__row">
                  <input
                    type="text"
                    name="name"
                    className="contact-form__input"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="email"
                    className="contact-form__input"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="contact-form__row">
                  <select
                    name="location"
                    className="contact-form__input contact-form__select"
                    value={formData.location}
                    onChange={handleChange}
                  >
                    <option value="">Location</option>
                    <option value="us">United States</option>
                    <option value="uk">United Kingdom</option>
                    <option value="eu">Europe</option>
                    <option value="other">Other</option>
                  </select>
                  <select
                    name="budget"
                    className="contact-form__input contact-form__select"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Budget</option>
                    <option value="10k">$10k - $50k</option>
                    <option value="50k">$50k - $100k</option>
                    <option value="100k">$100k - $500k</option>
                    <option value="500k">$500k+</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  className="contact-form__textarea"
                  placeholder="Message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                />
                <button type="submit" className="contact-form__submit">
                  <span>Submit</span>
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>

            <div className="contact-section__map">
              <div className="contact-map">
                <div className="contact-map__placeholder">
                  <div className="contact-map__marker">
                    <div className="contact-map__marker-dot"></div>
                    <div className="contact-map__marker-pulse"></div>
                  </div>
                </div>
                <div className="contact-map__controls">
                  <button className="contact-map__control">+</button>
                  <button className="contact-map__control">−</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-info__grid">
            <div className="contact-info__column">
              <span className="contact-info__label">Email</span>
              <a href="mailto:hello@staticlabs.ai" className="contact-info__value">hello@staticlabs.ai</a>
            </div>
            <div className="contact-info__column">
              <span className="contact-info__label">Phone</span>
              <a href="tel:+15550123456" className="contact-info__value">+1 (555) 012-3456</a>
            </div>
            <div className="contact-info__column">
              <span className="contact-info__label">Address</span>
              <span className="contact-info__value">123 AI Street, London, UK</span>
            </div>
            <div className="contact-info__column">
              <span className="contact-info__label">Social</span>
              <div className="contact-info__social">
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">X</a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">YT</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ContactPage;