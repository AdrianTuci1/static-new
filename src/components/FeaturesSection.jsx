import React from 'react';

function FeaturesSection() {
  return (
    <section className="features">
      <div className="features__container">
        <div className="feature-card">
          <div className="feature-card__illustration">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="70" y="60" width="60" height="50" rx="4" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="100" cy="85" r="12" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M100 60V50" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="100" cy="48" r="6" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="100" cy="110" r="25" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="100" cy="110" r="10" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M100 80V75M100 140V145M75 110H70M130 110H135" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M82 92L78 88M118 128L122 132M82 128L78 132M118 92L122 88" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <h3 className="feature-card__title">Secure Guard</h3>
          <p className="feature-card__desc">We fortify your AI deployments with robust security protocols. Our team ensures every model adheres to strict data privacy standards.</p>
        </div>
        <div className="feature-card">
          <div className="feature-card__illustration">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="70" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="110" y="70" width="40" height="40" rx="4" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M90 90H110" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="100" cy="90" r="4" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M70 85V80M70 100V95" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="70" cy="80" r="2" fill="currentColor"/>
              <path d="M70 110V120M130 110V120" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="60" y="120" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="120" y="120" width="20" height="8" rx="2" stroke="currentColor" strokeWidth="1.5"/>
            </svg>
          </div>
          <h3 className="feature-card__title">Agent Build</h3>
          <p className="feature-card__desc">Tailored AI agents designed for your specific needs. We develop custom logic and workflows that integrate deeply with your existing tools.</p>
        </div>
        <div className="feature-card">
          <div className="feature-card__illustration">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="55" y="55" width="90" height="90" rx="4" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="100" cy="100" r="8" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M100 70V85M100 115V130M70 100H85M115 100H130" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M82 82L92 92M108 108L118 118M82 118L92 108M108 92L118 82" stroke="currentColor" strokeWidth="1.5"/>
              <circle cx="65" cy="65" r="3" stroke="currentColor" strokeWidth="1"/>
              <circle cx="135" cy="65" r="3" stroke="currentColor" strokeWidth="1"/>
              <circle cx="65" cy="135" r="3" stroke="currentColor" strokeWidth="1"/>
              <circle cx="135" cy="135" r="3" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <h3 className="feature-card__title">Cloud Scale</h3>
          <p className="feature-card__desc">Infrastructure optimization for high-traffic AI apps. We ensure your systems remain fast, responsive, and ready for any level of demand.</p>
        </div>
        <div className="feature-card">
          <div className="feature-card__illustration">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="80" cy="70" rx="25" ry="8" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M55 70V100" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M105 70V100" stroke="currentColor" strokeWidth="1.5"/>
              <ellipse cx="80" cy="100" rx="25" ry="8" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M55 100V130" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M105 100V130" stroke="currentColor" strokeWidth="1.5"/>
              <ellipse cx="80" cy="130" rx="25" ry="8" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="110" y="60" width="30" height="40" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="115" y="55" width="30" height="40" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M125 70H135M125 78H135M125 86H130" stroke="currentColor" strokeWidth="1"/>
            </svg>
          </div>
          <h3 className="feature-card__title">Data Mining</h3>
          <p className="feature-card__desc">Transform raw information into actionable intelligence. We build the pipelines and vector stores that power your organization's future.</p>
        </div>
      </div>
      {/* Horizontal line connecting to Statistics grid */}
      <div className="features__bottom-line"></div>
    </section>
  );
}

export default FeaturesSection;
