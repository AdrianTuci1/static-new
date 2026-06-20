import React from 'react';
import { Link } from 'react-router-dom';
import cignaBg from '../assets/cigna_bg.jpg';
import aetnaBg from '../assets/aetna_bg.jpg';
import anthemBg from '../assets/anthem_bg.jpg';
import './CaseStudiesSection.css';

const caseStudies = [
  {
    slug: 'cigna',
    client: 'cigna',
    title: 'Cigna Smart Health Systems',
    desc: 'Revolutionizing patient care through predictive analytics and seamless AI-driven diagnostic integration tools.',
    year: '//2026',
    bgImage: cignaBg,
    logo: 'cigna',
  },
  {
    slug: 'aetna',
    client: 'aetna',
    title: 'Aetna Health Data Ecosystem',
    desc: "We automated Aetna's member data management using secure AI to provide personalized care and clinical insights.",
    year: '//2026',
    bgImage: aetnaBg,
    logo: 'aetna',
  },
  {
    slug: 'anthem',
    client: 'anthem',
    title: 'Anthem Neural Care Network',
    desc: "We deployed a custom LLM to automate Anthem's provider relations, reducing ticket latency by eighty-five percent.",
    year: '//2026',
    bgImage: anthemBg,
    logo: 'anthem',
  },
];

const renderLogo = (logoName) => {
  switch (logoName) {
    case 'cigna':
      return (
        <div className="logo-cigna" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg className="cigna-icon" viewBox="0 0 24 24" fill="none" style={{ width: '24px', height: '24px' }}>
            <path d="M12 22C12 22 12 13 12 11" stroke="currentColor" strokeWidth="1.5" />
            <path d="M12 14C14.5 12 17 12 19 13.5C17 11 15 9 12 10.5C9 9 7 11 5 13.5C7 12 9.5 12 12 14Z" fill="currentColor" />
            <path d="M12 10C13.5 8 16 7 18.5 8C16.5 6.5 14.5 5.5 12 7C9.5 5.5 7.5 6.5 5.5 8C8 7 10.5 8 12 10Z" fill="currentColor" />
            <circle cx="12" cy="18" r="1.5" fill="currentColor" />
          </svg>
          <div className="logo-cigna__text" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: '1' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', fontWeight: '800', letterSpacing: '-0.03em' }}>cigna</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'inherit', marginTop: '1px' }}>healthcare</span>
          </div>
        </div>
      );
    case 'aetna':
      return (
        <div className="logo-aetna" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <svg className="aetna-icon" viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: '700', letterSpacing: '-0.04em' }}>aetna</span>
        </div>
      );
    case 'anthem':
      return (
        <div className="logo-anthem" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontSize: '20px', fontWeight: '700', letterSpacing: '-0.03em' }}>Anthem</span>
          <svg className="anthem-icon" viewBox="0 0 36 24" fill="currentColor" style={{ height: '18px' }}>
            <path d="M6 10H2v4h4v4h4v-4h4v-4h-4V6H6v4z" />
            <path d="M24 4.5L16 8v6c0 5.25 3.4 10.16 8 11.5 4.6-1.34 8-6.25 8-11.5V8l-8-3.5z" />
          </svg>
        </div>
      );
    default:
      return <span>{logoName}</span>;
  }
};

function CaseStudiesSection() {
  return (
    <section className="case-studies">
      {/* Background Grid Lines */}
      <div className="case-studies__grid">
        <div className="case-studies__grid-line case-studies__grid-line--1"></div>
        <div className="case-studies__grid-line case-studies__grid-line--2"></div>
        <div className="case-studies__grid-line case-studies__grid-line--3"></div>
      </div>

      <div className="case-studies__container">
        {/* Header Row */}
        <div className="case-studies__header-row">
          <div className="case-studies__header-content">
            <div className="section-label-case">
              <div className="section-label-case__bars">
                <span className="section-label-case__bar"></span>
                <span className="section-label-case__bar"></span>
                <span className="section-label-case__bar"></span>
                <span className="section-label-case__bar"></span>
                <span className="section-label-case__bar"></span>
              </div>
              <span className="section-label-case__text">CASE STUDIES</span>
            </div>
            <h2 className="case-studies__heading">Proven neural solutions</h2>
            <p className="case-studies__subheading">
              We partner with industry leaders to deploy bespoke AI agents that solve complex operational hurdles and drive measurable growth.
            </p>
          </div>
        </div>

        {/* Case Studies List (Grid Rows) */}
        <div className="case-studies__rows">
          {caseStudies.map((study) => (
            <Link 
              key={study.slug} 
              to={`/project/${study.slug}`} 
              className="case-study-grid-row"
            >
              {/* Column 1: Logo/Image container */}
              <div className="case-study-grid-row__col-1">
                <div 
                  className="case-study-grid-row__image-container"
                  style={{ '--hover-bg': `url(${study.bgImage})` }}
                >
                  <div className="case-study-grid-row__logo-wrapper">
                    {renderLogo(study.logo)}
                  </div>
                </div>
              </div>

              {/* Column 2: Year */}
              <div className="case-study-grid-row__col-2">
                <span className="case-study-grid-row__year">{study.year}</span>
              </div>

              {/* Column 3: Title and Description */}
              <div className="case-study-grid-row__col-3">
                <h3 className="case-study-grid-row__title">{study.title}</h3>
                <p className="case-study-grid-row__desc">{study.desc}</p>
              </div>

              {/* Column 4: Chevron Arrow */}
              <div className="case-study-grid-row__col-4">
                <span className="case-study-grid-row__arrow">
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    style={{ width: '20px', height: '20px' }}
                  >
                    <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom row containing the More Projects button */}
        <div className="case-studies__footer-row">
          <div className="case-studies__footer-col-2">
            <Link to="/projects" className="more-projects-btn">
              <span className="more-projects-btn__icon">
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '10px', height: '10px' }}>
                  <path d="M4 18h2V6H4v12zm5-12v12l8.5-6L9 6z" />
                </svg>
              </span>
              <span className="more-projects-btn__text">More Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudiesSection;
