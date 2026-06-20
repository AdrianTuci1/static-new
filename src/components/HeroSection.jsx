import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__video-bg">
        <video autoPlay muted loop playsInline className="hero__video">
          <source src="/hero-overlay.mp4" type="video/mp4" />
        </video>
        <div className="hero__video-overlay"></div>
      </div>
      <div className="hero__gradient"></div>

      <div className="hero__container">
        {/* Top Row: Nav Links */}
        <div className="hero__top-row">
          <div className="hero__nav-area">
            <nav className="hero__nav-links">
              <Link to="/about">AI Strategy</Link>
              <Link to="/">Custom Agents</Link>
              <Link to="/">Process Automation</Link>
              <Link to="/">Data Intelligence</Link>
            </nav>
          </div>
        </div>

        {/* Bottom Content */}
        <div className="hero__bottom">
          <div className="hero__content-left">
            <h1 className="hero__title">
              Power your<br />future with AI
            </h1>
            <p className="hero__desc">
              Deploy custom enterprise agents and automate complex workflows. Scale your intelligence with Armory today.
            </p>
            <Link to="/contact" className="hero__cta">
              <span className="hero__cta-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="13" y="4" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="4" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="13" y="13" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </span>
              <span className="hero__cta-text">Build A Workflow</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
