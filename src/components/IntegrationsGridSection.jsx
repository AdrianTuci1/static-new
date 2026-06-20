import React from 'react';
import './IntegrationsGridSection.css';

// SVG Logos
const AnthropicLogo = () => (
  <svg viewBox="0 0 100 100" fill="currentColor" className="integration-logo" style={{ height: '28px' }}>
    <path d="M25 80 L45 20 H55 L75 80 H62 L50 40 L38 80 H25 Z M80 20 L90 80 H80 L70 20 H80 Z" />
  </svg>
);

const AwsLogo = () => (
  <svg viewBox="0 0 100 60" fill="currentColor" className="integration-logo" style={{ height: '36px' }}>
    <text x="20" y="32" fontSize="26" fontWeight="bold" fontFamily="sans-serif" letterSpacing="-1.5">aws</text>
    <path d="M16 38c14 6 36 6 48 0" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M60 35l4 5.5-5.5 .5" />
  </svg>
);

const MicrosoftLogo = () => (
  <svg viewBox="0 0 40 40" fill="currentColor" className="integration-logo" style={{ height: '24px' }}>
    <rect x="2" y="2" width="16" height="16" />
    <rect x="22" y="2" width="16" height="16" />
    <rect x="2" y="22" width="16" height="16" />
    <rect x="22" y="22" width="16" height="16" />
  </svg>
);

const BoltLogo = () => (
  <svg viewBox="0 0 100 40" fill="currentColor" className="integration-logo" style={{ height: '26px' }}>
    <path d="M20 5l-7 14h6l-4 15 12-17h-6z" />
    <text x="32" y="26" fontSize="22" fontWeight="bold" fontFamily="sans-serif">bolt</text>
  </svg>
);

const SlackLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="integration-logo" style={{ height: '26px' }}>
    <path d="M20 2v10M20 28v10M2 20h10M28 20h10M7 7l7 7M26 26l7 7M7 33l7-7M26 14l7-7" />
  </svg>
);

const NotionLogo = () => (
  <svg viewBox="0 0 40 40" fill="currentColor" className="integration-logo" style={{ height: '26px' }}>
    <rect x="5" y="5" width="30" height="30" rx="5" stroke="currentColor" strokeWidth="3.5" fill="none" />
    <path d="M11 11h7.5M11 29V11M29 29V11M18.5 11l10.5 18" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const SparkleLogo = () => (
  <svg viewBox="0 0 40 40" fill="currentColor" className="integration-logo" style={{ height: '28px' }}>
    <path d="M20 2c0 9.9-8.1 18-18 18 9.9 0 18 8.1 18 18 0-9.9 8.1-18 18-18-9.9 0-18-8.1-18-18Z" />
  </svg>
);

const BrainLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3" className="integration-logo" style={{ height: '26px' }}>
    <path d="M18 10a6 6 0 0 0-10 6 6 0 0 0 3 9 5 5 0 0 0 7 5" strokeLinecap="round" />
    <path d="M22 10a6 6 0 0 1 10 6 6 0 0 1-3 9 5 5 0 0 1-7 5" strokeLinecap="round" />
    <line x1="20" y1="8" x2="20" y2="33" />
    <circle cx="20" cy="14" r="1.5" fill="currentColor" />
    <circle cx="20" cy="22" r="1.5" fill="currentColor" />
  </svg>
);

const MetaLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3" className="integration-logo" style={{ height: '24px' }}>
    <path d="M13 25c-5.5 0-10-4.5-10-10s4.5-10 10-10c5.5 0 8.5 4.5 12 10s6.5 10 12 10c5.5 0 10-4.5 10-10s-4.5-10-10-10c-5.5 0-8.5 4.5-12 10s-6.5 10-12 10Z" />
  </svg>
);

const HashiCorpLogo = () => (
  <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="3.5" className="integration-logo" style={{ height: '26px' }}>
    <rect x="5" y="5" width="12" height="12" rx="2" fill="currentColor" />
    <rect x="23" y="5" width="12" height="12" rx="2" fill="currentColor" />
    <rect x="5" y="23" width="12" height="12" rx="2" fill="currentColor" />
    <rect x="23" y="23" width="12" height="12" rx="2" fill="currentColor" />
    <line x1="17" y1="11" x2="23" y2="11" />
    <line x1="17" y1="29" x2="23" y2="29" />
    <line x1="11" y1="17" x2="11" y2="23" />
    <line x1="29" y1="17" x2="29" y2="23" />
  </svg>
);

const HerokuLogo = () => (
  <svg viewBox="0 0 40 40" fill="currentColor" className="integration-logo" style={{ height: '26px' }}>
    <path d="M10 8h6v24h-6zM24 8h6v24h-6zM16 18h8v4h-8z" />
  </svg>
);

function IntegrationsGridSection() {
  const integrationList = [
    { id: 1, logo: <AnthropicLogo /> },
    { id: 2, logo: <AwsLogo /> },
    { id: 3, logo: <MicrosoftLogo /> },
    { id: 4, logo: <BoltLogo /> },
    { id: 5, logo: <SlackLogo /> },
    { id: 6, logo: <NotionLogo /> },
    { id: 7, logo: <SparkleLogo /> },
    { id: 8, logo: <BrainLogo /> },
    { id: 9, logo: <MetaLogo /> },
    { id: 10, logo: <HashiCorpLogo /> },
    { id: 11, logo: <HerokuLogo /> },
  ];

  return (
    <section className="integrations-grid-section">
      {/* Background Vertical Grid Lines */}
      <div className="integrations-grid-section__grid">
        <div className="integrations-grid-section__grid-line integrations-grid-section__grid-line--1"></div>
        <div className="integrations-grid-section__grid-line integrations-grid-section__grid-line--2"></div>
        <div className="integrations-grid-section__grid-line integrations-grid-section__grid-line--3"></div>
      </div>

      <div className="integrations-grid-section__container">
        {/* Integrations Header */}
        <div className="integrations-grid-section__header">
          <div className="integrations-grid-section__badge">
            <span className="integrations-grid-section__badge-slashes">///</span>
            <span className="integrations-grid-section__badge-text">INTEGRATIONS</span>
          </div>
          <h2 className="integrations-grid-section__title">
            Armory bridges the gap between your data and your tools. Deploy agents that live where you work, from Slack to GitHub and beyond.
          </h2>
        </div>

        {/* 3 Rows x 4 Columns Grid */}
        <div className="integrations-grid-section__logo-grid">
          {integrationList.map((item) => (
            <div key={item.id} className="integrations-grid-section__logo-cell">
              <div className="integrations-grid-section__logo-wrapper">
                {item.logo}
              </div>
            </div>
          ))}
          {/* Decorative empty 12th cell */}
          <div className="integrations-grid-section__logo-cell integrations-grid-section__logo-cell--empty"></div>
        </div>
      </div>
    </section>
  );
}

export default IntegrationsGridSection;
