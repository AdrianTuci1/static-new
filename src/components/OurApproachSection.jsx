import React from 'react';
import './OurApproachSection.css';

const StarIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="approach-card__icon-svg">
    {/* 3D Isometric Star Prism */}
    <path d="M32 10 L52 20 L32 30 L12 20 Z" />
    <path d="M12 20 V28 L32 38 L52 28 V20" strokeOpacity="0.5" />
    <path d="M32 30 V38" strokeOpacity="0.5" />
    {/* Star engraved on the face */}
    <path d="M32 14 L35 19 L41 19 L36 22 L38 27 L32 24 L26 27 L28 22 L23 19 L29 19 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const EyeIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="approach-card__icon-svg">
    {/* 3D Isometric Eye Prism */}
    <path d="M32 10 L52 20 L32 30 L12 20 Z" />
    <path d="M12 20 V28 L32 38 L52 28 V20" strokeOpacity="0.5" />
    <path d="M32 30 V38" strokeOpacity="0.5" />
    {/* Isometric Eye / Iris shape in the middle */}
    <ellipse cx="32" cy="20" rx="9" ry="4.5" stroke="currentColor" strokeWidth="1" />
    <circle cx="32" cy="20" r="3" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const LightningIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="approach-card__icon-svg">
    {/* 3D Isometric Lightning Prism */}
    <path d="M32 10 L52 20 L32 30 L12 20 Z" />
    <path d="M12 20 V28 L32 38 L52 28 V20" strokeOpacity="0.5" />
    <path d="M32 30 V38" strokeOpacity="0.5" />
    {/* Lightning Bolt */}
    <path d="M33 14 L37 19 H33 L35 26 L31 21 H35 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const StackIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" className="approach-card__icon-svg">
    {/* 3D Isometric Server Stack Prism */}
    <path d="M32 10 L52 20 L32 30 L12 20 Z" />
    <path d="M12 20 V26 L32 36 L52 26 V20" strokeOpacity="0.5" />
    <path d="M32 30 V36" strokeOpacity="0.5" />
    {/* Second Stack Layer */}
    <path d="M12 28 V34 L32 44 L52 34 V28" strokeOpacity="0.5" />
    <path d="M32 38 V44" strokeOpacity="0.5" />
    {/* Third Stack Layer */}
    <path d="M12 36 V42 L32 52 L52 42 V36" strokeOpacity="0.5" />
    <path d="M32 46 V52" strokeOpacity="0.5" />
  </svg>
);

function OurApproachSection() {
  return (
    <section className="our-approach-section">
      <div className="our-approach-container">
        {/* Left Side: Grayscale WebM Video */}
        <div className="our-approach-video-panel">
          <video 
            src="/ourapproach-visual.webm" 
            className="our-approach-video" 
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>

        {/* Right Side: Copy & Blueprint Grid */}
        <div className="our-approach-content-panel">
          {/* Header Block */}
          <div className="our-approach-header">
            <div className="section-label-approach">
              <div className="section-label-approach__bars">
                <span className="section-label-approach__bar"></span>
                <span className="section-label-approach__bar"></span>
                <span className="section-label-approach__bar"></span>
                <span className="section-label-approach__bar"></span>
                <span className="section-label-approach__bar"></span>
              </div>
              <span className="section-label-approach__text">OUR APPROACH</span>
            </div>
            <h2 className="approach-heading">Built for the long term</h2>
            <p className="approach-subheading">
              We don't just ship code; we architect neural ecosystems. Our approach combines rigorous testing with rapid deployment cycles.
            </p>
          </div>

          {/* Features Grid (3 Rows: 2 normal rows + 1 half-height row) */}
          <div className="approach-features-grid">
            {/* Feature 1: Prime Logic */}
            <div className="approach-feature-card">
              <div className="approach-card__icon">
                <StarIcon />
              </div>
              <h3 className="approach-card__title">Prime Logic</h3>
              <p className="approach-card__desc">
                We prioritize high-fidelity model alignment to ensure your agents deliver consistent results.
              </p>
            </div>

            {/* Feature 2: Total Clarity */}
            <div className="approach-feature-card">
              <div className="approach-card__icon">
                <EyeIcon />
              </div>
              <h3 className="approach-card__title">Total Clarity</h3>
              <p className="approach-card__desc">
                Gain full observability into how your data is processed, indexed, and retrieved by your AI.
              </p>
            </div>

            {/* Feature 3: Fast Cycles */}
            <div className="approach-feature-card">
              <div className="approach-card__icon">
                <LightningIcon />
              </div>
              <h3 className="approach-card__title">Fast Cycles</h3>
              <p className="approach-card__desc">
                Transition from prototype to production in record time with our optimized deployment framework.
              </p>
            </div>

            {/* Feature 4: Enterprise Scale */}
            <div className="approach-feature-card">
              <div className="approach-card__icon">
                <StackIcon />
              </div>
              <h3 className="approach-card__title">Enterprise Scale</h3>
              <p className="approach-card__desc">
                Deploy your workflows globally on SOC-2 compliant, highly available serverless infrastructure.
              </p>
            </div>

            {/* Row 3 (Half-height Row): Left Decoder */}
            <div className="approach-feature-card approach-feature-card--half">
              <div className="approach-card__decoder">
                <span className="decoder-tag">[SYS.OP_APPROACH]</span>
                <span className="decoder-value">READY // 0x7FF</span>
              </div>
            </div>

            {/* Row 3 (Half-height Row): Right Decoder */}
            <div className="approach-feature-card approach-feature-card--half">
              <div className="approach-card__decoder">
                <span className="decoder-tag">[NODE.SEC_VERIFY]</span>
                <span className="decoder-value">ACTIVE // 100%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurApproachSection;
