import React from 'react';
import './FeaturesStatsSection.css';

const featuresData = [
  {
    title: 'Infinite Visual\nCanvas',
    desc: 'Map out multi-step agent behaviors on a high-precision grid. Drag and drop triggers, logic gates, and actions to craft custom paths.',
    icon: () => (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '48px', height: '48px' }}>
        <path d="M24 8L40 18L24 28L8 18Z" />
        <path d="M16 13L24 18L32 13" />
        <circle cx="24" cy="18" r="2" fill="currentColor" />
        <circle cx="16" cy="18" r="2" fill="currentColor" />
        <circle cx="32" cy="18" r="2" fill="currentColor" />
        <circle cx="24" cy="13" r="2" fill="currentColor" />
        <circle cx="24" cy="23" r="2" fill="currentColor" />
        <line x1="24" y1="13" x2="24" y2="18" />
        <line x1="24" y1="18" x2="24" y2="23" />
        <line x1="16" y1="18" x2="24" y2="18" />
        <line x1="24" y1="18" x2="32" y2="18" />
      </svg>
    ),
  },
  {
    title: 'Autonomous\nExecution',
    desc: 'Run complex decision trees without manual intervention. Our engine handles conditional branching and error recovery automatically.',
    icon: () => (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '48px', height: '48px' }}>
        <path d="M24 16L36 22L24 28L12 22Z" opacity="0.3" />
        <path d="M24 12L36 18L24 24L12 18Z" opacity="0.6" />
        <path d="M24 8L36 14L24 20L12 14Z" />
        <line x1="18" y1="13" x2="24" y2="16" />
        <line x1="18" y1="15" x2="28" y2="20" />
        <line x1="22" y1="13" x2="30" y2="17" />
      </svg>
    ),
  },
  {
    title: 'End-to-End\nEncryption',
    desc: 'Every node and data transfer is shielded by industrial-grade security. Maintain total control over your organizational data flow.',
    icon: () => (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '48px', height: '48px' }}>
        <path d="M24 8C32.837 8 40 12.477 40 18C40 23.523 32.837 28 24 28C15.163 28 8 23.523 8 18C8 12.477 15.163 8 24 8Z" />
        <path d="M24 13V18" />
        <path d="M20 18H28" />
        <path d="M18 15C18 10 21 8 24 8C27 8 30 10 30 15" />
        <circle cx="24" cy="18" r="3" />
      </svg>
    ),
  },
  {
    title: 'Production-\nReady Stack',
    desc: 'Connect core business platforms and internal services through secure, ready integrations that scale with your volume.',
    icon: () => (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '48px', height: '48px' }}>
        <path d="M24 28L36 34L24 40L12 34Z" />
        <path d="M12 34V37L24 43V40" />
        <path d="M36 34V37L24 43V40" />
        <path d="M24 18L36 24L24 30L12 24Z" />
        <path d="M12 24V27L24 33V30" />
        <path d="M36 24V27L24 33V30" />
        <path d="M24 8L36 14L24 20L12 14Z" />
        <path d="M12 14V17L24 23V20" />
        <path d="M36 14V17L24 23V20" />
      </svg>
    ),
  },
];

const MetricLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}>
    <path d="M4 4L20 20M4 20L9 15M15 9L20 4" strokeLinecap="round" />
  </svg>
);

function FeaturesStatsSection() {
  return (
    <section className="features-stats-section">
      {/* Background Grid Lines */}
      <div className="features-stats-section__grid">
        <div className="features-stats-section__grid-line features-stats-section__grid-line--1"></div>
        <div className="features-stats-section__grid-line features-stats-section__grid-line--2"></div>
        <div className="features-stats-section__grid-line features-stats-section__grid-line--3"></div>
      </div>

      <div className="features-stats-section__container">
        {/* 4-Column Features Grid */}
        <div className="features-stats-row">
          {featuresData.map((item, index) => (
            <div key={index} className="feature-stat-card">
              <div className="feature-stat-card__icon">
                {item.icon()}
              </div>
              <h3 className="feature-stat-card__title" style={{ whiteSpace: 'pre-line' }}>
                {item.title}
              </h3>
              <p className="feature-stat-card__desc">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Product Statistics Header Block */}
        <div className="stats-header-row">
          <div className="stats-header-content">
            <div className="section-label-stats">
              <div className="section-label-stats__bars">
                <span className="section-label-stats__bar"></span>
                <span className="section-label-stats__bar"></span>
                <span className="section-label-stats__bar"></span>
                <span className="section-label-stats__bar"></span>
                <span className="section-label-stats__bar"></span>
              </div>
              <span className="section-label-stats__text">PRODUCT STATISTICS</span>
            </div>
            <h2 className="stats-heading">Optimized for performance</h2>
            <p className="stats-subheading">
              Monitor every neural pulse in real-time. Armory provides deep telemetry into agent accuracy, server latency, and token efficiency.
            </p>
          </div>
        </div>

        {/* Statistics Metric Visualizations Row */}
        <div className="stats-cards-row">
          {/* Column 1: System Load */}
          <div className="stat-grid-card">
            <div className="metric-header">
              <div className="metric-header__left">
                <div className="metric-header__logo">
                  <MetricLogo />
                </div>
                <div className="metric-header__titles">
                  <h4 className="metric-header__title">System Load</h4>
                  <span className="metric-header__subtitle">Active neural processing</span>
                </div>
              </div>
              <span className="metric-header__value">98.7%</span>
            </div>

            <div className="metric-visualization">
              <div className="system-load-details">
                <div className="system-load-detail">
                  <span className="system-load-detail__value">99%</span>
                  <span className="system-load-detail__label">CACHE</span>
                </div>
                <div className="system-load-detail">
                  <span className="system-load-detail__value">6M</span>
                  <span className="system-load-detail__label">UPTIME</span>
                </div>
              </div>

              <div className="system-load-gauge">
                <svg viewBox="0 0 140 140">
                  {/* Gauge Arc Track (270 degrees, starting at 7:30 o'clock/135deg) */}
                  <circle 
                    cx="70" 
                    cy="70" 
                    r="50" 
                    fill="none" 
                    stroke="rgba(255, 255, 255, 0.05)" 
                    strokeWidth="10" 
                    strokeDasharray="235.6 314.16" 
                    transform="rotate(135 70 70)" 
                  />
                  {/* Active White Arc (180 degrees, starting at 10:30 o'clock/225deg) */}
                  <circle 
                    cx="70" 
                    cy="70" 
                    r="50" 
                    fill="none" 
                    stroke="#ffffff" 
                    strokeWidth="10" 
                    strokeDasharray="157.08 314.16" 
                    transform="rotate(225 70 70)" 
                  />

                  {/* Gauge Arc Ticks (37 ticks from 7:30 to 4:30) */}
                  {Array.from({ length: 37 }).map((_, i) => {
                    const angle = 135 + i * 7.5;
                    const isHighlighted = i >= 12; // starts at 10:30 (i = 12)
                    const isLong = i === 6 || i === 18 || i === 30;
                    const tickLength = isLong ? 8 : 4;
                    return (
                      <line
                        key={i}
                        x1="70"
                        y1="26" // inner edge is at 70 - 45 = 25, we start at 26
                        x2="70"
                        y2={26 + tickLength}
                        stroke={isHighlighted ? '#ffffff' : 'rgba(255, 255, 255, 0.15)'}
                        strokeWidth={isLong ? 1.5 : 1}
                        transform={`rotate(${angle} 70 70)`}
                      />
                    );
                  })}
                  
                  {/* Center Text Details */}
                  <text x="70" y="76" fill="#ffffff" fontSize="32" fontWeight="400" textAnchor="middle" fontFamily="var(--font-sans)">
                    15
                  </text>
                  <text x="70" y="94" fill="rgba(255, 255, 255, 0.4)" fontSize="8" fontWeight="500" textAnchor="middle" fontFamily="var(--font-mono)" letterSpacing="0.05em">
                    Core Systems
                  </text>
                </svg>
              </div>
            </div>
          </div>

          {/* Column 2: SLA Response */}
          <div className="stat-grid-card">
            <div className="metric-header">
              <div className="metric-header__left">
                <div className="metric-header__logo">
                  <MetricLogo />
                </div>
                <div className="metric-header__titles">
                  <h4 className="metric-header__title">SLA Response</h4>
                  <span className="metric-header__subtitle">Global uptime monitoring</span>
                </div>
              </div>
              <span className="metric-header__value">99.99%</span>
            </div>

            <div className="metric-visualization">
              <div className="sla-response-visualization">
                <svg viewBox="0 0 280 130">
                  <defs>
                    <linearGradient id="rainbowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#7F00FF" />
                      <stop offset="50%" stopColor="#FF007F" />
                      <stop offset="100%" stopColor="#00F0FF" />
                    </linearGradient>
                  </defs>

                  {/* Bracket baseline: x=20 to x=260, y=110 */}
                  <line x1="20" y1="110" x2="260" y2="110" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
                  <line x1="20" y1="104" x2="20" y2="110" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />
                  <line x1="260" y1="104" x2="260" y2="110" stroke="rgba(255, 255, 255, 0.12)" strokeWidth="1" />

                  {/* Dash line from badge to 7th bar (gradient dot) */}
                  {/* Badge starts at x=20, width=52, ends at 72. Gradient bar is at x=164. */}
                  <line x1="72" y1="30" x2="164" y2="30" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="3,3" />

                  {/* SLA 99% Badge Pill */}
                  <rect x="20" y="21" width="52" height="18" rx="9" fill="#ffffff" />
                  <text x="46" y="32" fill="#000000" fontSize="8" fontWeight="600" fontFamily="var(--font-mono)" textAnchor="middle">
                    SLA 99%
                  </text>

                  {/* Bars & Dots */}
                  {/* Bar 1: White, Dot. x=20, y=60 */}
                  <line x1="20" y1="110" x2="20" y2="60" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="20" cy="60" r="2.5" fill="#ffffff" />

                  {/* Bar 2: Muted. x=44, y=85 */}
                  <line x1="44" y1="110" x2="44" y2="85" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />

                  {/* Bar 3: White, Dot. x=68, y=70 */}
                  <line x1="68" y1="110" x2="68" y2="70" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="68" cy="70" r="2.5" fill="#ffffff" />

                  {/* Bar 4: Muted. x=92, y=80 */}
                  <line x1="92" y1="110" x2="92" y2="80" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />

                  {/* Bar 5: White, Dot. x=116, y=45 */}
                  <line x1="116" y1="110" x2="116" y2="45" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="116" cy="45" r="2.5" fill="#ffffff" />

                  {/* Bar 6: Muted. x=140, y=75 */}
                  <line x1="140" y1="110" x2="140" y2="75" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />

                  {/* Bar 7: Highlighted (Rainbow Gradient Dot). x=164, y=30 */}
                  <line x1="164" y1="110" x2="164" y2="30" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="164" cy="30" r="5" fill="url(#rainbowGrad)" />

                  {/* Bar 8: Muted. x=188, y=68 */}
                  <line x1="188" y1="110" x2="188" y2="68" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />

                  {/* Bar 9: White, Dot. x=212, y=55 */}
                  <line x1="212" y1="110" x2="212" y2="55" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="212" cy="55" r="2.5" fill="#ffffff" />

                  {/* Bar 10: Muted. x=236, y=82 */}
                  <line x1="236" y1="110" x2="236" y2="82" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />

                  {/* Bar 11: White, Dot. x=260, y=65 */}
                  <line x1="260" y1="110" x2="260" y2="65" stroke="#ffffff" strokeWidth="1.5" />
                  <circle cx="260" cy="65" r="2.5" fill="#ffffff" />
                </svg>
              </div>
            </div>
          </div>

          {/* Column 3: Token Usage */}
          <div className="stat-grid-card">
            <div className="metric-header">
              <div className="metric-header__left">
                <div className="metric-header__logo">
                  <MetricLogo />
                </div>
                <div className="metric-header__titles">
                  <h4 className="metric-header__title">Token Usage</h4>
                  <span className="metric-header__subtitle">Monthly volume throughput</span>
                </div>
              </div>
              <span className="metric-header__value">8.4M</span>
            </div>

            <div className="token-usage-visualization">
              <div className="token-usage-container">
                <div className="token-usage-gauge">
                  <svg viewBox="0 0 220 120">
                    {/* Gauge Arc Ticks (35 ticks from left to right, spans 180deg) */}
                    {Array.from({ length: 35 }).map((_, i) => {
                      const angle = -90 + (i * 180) / 34; // spans 180 degrees
                      const isHighlighted = angle <= 30; // highlight up to needle angle (30 deg)
                      return (
                        <line
                          key={i}
                          x1="110"
                          y1="11" // outer tick start radius = 99 (110 - 99 = 11)
                          x2="110"
                          y2="17" // tick length = 6 (110 - 93 = 17)
                          stroke={isHighlighted ? '#ffffff' : 'rgba(255, 255, 255, 0.15)'}
                          strokeWidth="1.5"
                          transform={`rotate(${angle} 110 110)`}
                        />
                      );
                    })}
                    
                    {/* Thick Inner Arcs (Radius 90, Center at 110, 110) */}
                    {/* Inactive Track (Dark) */}
                    <path 
                      d="M 20 110 A 90 90 0 0 1 200 110" 
                      fill="none" 
                      stroke="rgba(255, 255, 255, 0.05)" 
                      strokeWidth="12" 
                      strokeLinecap="round" 
                    />
                    {/* Active Segment (White) - 120 degree span (from -90 to +30) */}
                    <path 
                      d="M 20 110 A 90 90 0 0 1 200 110" 
                      fill="none" 
                      stroke="#ffffff" 
                      strokeWidth="12" 
                      strokeDasharray="282.7" 
                      strokeDashoffset="94.2" 
                      strokeLinecap="round"
                    />

                    {/* Center Text Details */}
                    <text x="110" y="85" fill="#ffffff" fontSize="40" fontWeight="400" textAnchor="middle" fontFamily="var(--font-sans)">
                      316
                    </text>
                    
                    {/* Needle line (pointing to 30 degrees) */}
                    <line 
                      x1="110" 
                      y1="110" 
                      x2="110" 
                      y2="65" 
                      stroke="#ffffff" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      transform="rotate(30 110 110)" 
                    />
                    {/* Needle hub */}
                    <circle cx="110" cy="110" r="8" fill="#09090a" stroke="#ffffff" strokeWidth="2" />
                  </svg>
                </div>

                <div className="token-usage-details">
                  <div className="token-usage-detail">
                    <span className="token-usage-detail__value">152</span>
                    <span className="token-usage-detail__label">TOTAL QUERIES</span>
                  </div>
                  <div className="token-usage-detail">
                    <span className="token-usage-detail__value">115</span>
                    <span className="token-usage-detail__label">ACTIVE NODES</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesStatsSection;
