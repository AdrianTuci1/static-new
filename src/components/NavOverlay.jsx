import React from 'react';
import { Link } from 'react-router-dom';
import './NavOverlay.css';

function NavOverlay({ isOpen, onClose }) {
  const quickLinks = [
    { label: 'Home', to: '/' },
    { label: 'Pricing', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Articles', to: '/blog' },
    { label: 'Contact Us', to: '/contact' },
  ];

  const otherLinks = [
    { label: 'Terms & Conditions', to: '/' },
    { label: 'Privacy Policies', to: '/' },
    { label: 'Hire via Contra', to: '/' },
    { label: 'Book A Call', to: '/' },
  ];

  return (
    <div className={`nav-overlay ${isOpen ? 'nav-overlay--open' : ''}`}>
      {/* Left Panel */}
      <div className="nav-overlay__left">
        <div className="nav-overlay__grid-pattern"></div>
        <div className="nav-overlay__left-content">
          <h2 className="nav-overlay__headline">
            Integrate your data with the world's most powerful neural engines
          </h2>
          <p className="nav-overlay__subheadline">Armory 2026</p>
        </div>
        <div className="nav-overlay__left-footer">
          <span>2919 MANCHACA RD #102, AUSTIN, TX 78704</span>
        </div>
      </div>

      {/* Right Panel */}
      <div className="nav-overlay__right">
        <div className="nav-overlay__right-top">
          <button className="nav-overlay__close" onClick={onClose} aria-label="Close menu">
            <span></span>
            <span></span>
          </button>

          <div className="nav-overlay__nav">
            <div className="nav-overlay__nav-column">
              <span className="nav-overlay__nav-label">QUICK LINKS</span>
              <nav className="nav-overlay__nav-links">
                {quickLinks.map((link) => (
                  <Link key={link.label} to={link.to} onClick={onClose} className="nav-overlay__nav-link">
                    <span>{link.label}</span>
                    <span className="nav-overlay__nav-arrow">↗</span>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="nav-overlay__nav-column">
              <span className="nav-overlay__nav-label">OTHER LINKS</span>
              <nav className="nav-overlay__nav-links">
                {otherLinks.map((link) => (
                  <Link key={link.label} to={link.to} onClick={onClose} className="nav-overlay__nav-link">
                    <span>{link.label}</span>
                    <span className="nav-overlay__nav-arrow">↗</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="nav-overlay__right-bottom">
          <div className="nav-overlay__image-placeholder"></div>
          <div className="nav-overlay__right-footer">
            <span className="nav-overlay__date">Jun 20, 2026</span>
            <div className="nav-overlay__socials">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="X">X</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">IG</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavOverlay;