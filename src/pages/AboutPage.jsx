import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AboutPage.css';

function GaugeChart({ percentage, label }) {
  const circumference = 2 * Math.PI * 40;
  const offset = circumference * (1 - percentage / 100);

  return (
    <div className="gauge-chart">
      <svg viewBox="0 0 100 100" className="gauge-chart__svg">
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#B0B0B0"
          strokeWidth="3"
        />
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="#1A1A1A"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
        />
        <text
          x="50"
          y="50"
          textAnchor="middle"
          dominantBaseline="central"
          fontSize="20"
          fontWeight="500"
          fill="#1A1A1A"
        >
          {percentage}%
        </text>
      </svg>
      <span className="gauge-chart__label">{label}</span>
    </div>
  );
}

function AboutPage() {
  const capabilities = [
    { number: '//01', percentage: 95, title: 'Neural Engine', desc: 'We build custom neural architectures tailored to your data and domain.' },
    { number: '//02', percentage: 90, title: 'Agent Core', desc: 'Autonomous agents that reason, plan, and execute complex workflows.' },
    { number: '//03', percentage: 92, title: 'Data Mining', desc: 'Secure pipelines that extract, transform, and load high-fidelity data.' },
    { number: '//04', percentage: 100, title: 'Cloud Scale', desc: 'Elastic infrastructure that scales from prototype to enterprise.' },
  ];

  return (
    <div className="about-page">
      <Navbar />

      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__grid">
            <div className="about-hero__content">
              <div className="section-label section-label--dark">
                <span className="section-label__icon">////</span>
                <span className="section-label__text">OUR MISSION</span>
              </div>
              <h1 className="about-hero__title">Building on machine intelligence</h1>
              <p className="about-hero__desc">
                We architect neural ecosystems that power modern enterprises, combining deep research with production-ready engineering.
              </p>
              <div className="about-hero__stats">
                <div className="about-hero__stat">
                  <span className="about-hero__stat-number">8</span>
                  <span className="about-hero__stat-label">yrs</span>
                </div>
                <div className="about-hero__stat">
                  <span className="about-hero__stat-number">3</span>
                  <span className="about-hero__stat-label">x</span>
                </div>
                <div className="about-hero__stat">
                  <span className="about-hero__stat-number">12</span>
                  <span className="about-hero__stat-label">Core AI Frameworks</span>
                </div>
              </div>
            </div>
            <div className="about-hero__image">
              <div className="about-hero__image-placeholder">
                <Link to="/contact" className="about-hero__cta">Get started</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="about-gallery">
        <div className="container">
          <div className="about-gallery__grid">
            <div className="about-gallery__item about-gallery__item--tall"></div>
            <div className="about-gallery__item about-gallery__item--wide"></div>
            <div className="about-gallery__item about-gallery__item--medium"></div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="about-capabilities">
        <div className="container">
          <p className="about-capabilities__intro">
            We combine deep research with production-ready engineering to deliver systems that think, learn, and scale.
          </p>
          <div className="about-capabilities__grid">
            {capabilities.map((cap, index) => (
              <div key={index} className="capability-card">
                <span className="capability-card__number">{cap.number}</span>
                <GaugeChart percentage={cap.percentage} label={cap.title} />
                <h4 className="capability-card__title">{cap.title}</h4>
                <p className="capability-card__desc">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <div className="container">
          <div className="about-team__grid">
            <div className="about-team__content">
              <div className="section-label section-label--dark">
                <span className="section-label__icon">////</span>
                <span className="section-label__text">OUR TEAM</span>
              </div>
              <h2 className="about-team__title">The people behind the neural networks</h2>
              <p className="about-team__desc">
                We are a team of researchers, engineers, and designers building the future of AI infrastructure.
              </p>
              <Link to="/contact" className="about-team__cta">
                Apply Now
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
            <div className="about-team__photos">
              <div className="about-team__photo about-team__photo--1"></div>
              <div className="about-team__photo about-team__photo--2"></div>
              <div className="about-team__photo about-team__photo--3"></div>
              <div className="about-team__photo about-team__photo--4"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AboutPage;