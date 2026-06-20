import React from 'react';
import './ArticlesSection.css';

// Import images for articles
import anthemBg from '../assets/anthem_bg.jpg';
import cignaBg from '../assets/cigna_bg.jpg';
import aetnaBg from '../assets/aetna_bg.jpg';

// View Articles Icon SVG
const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="articles-cta__arrow">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

function ArticlesSection() {
  return (
    <section className="articles-section">
      {/* Background Vertical Grid Lines */}
      <div className="articles-section__grid">
        <div className="articles-section__grid-line articles-section__grid-line--1"></div>
        <div className="articles-section__grid-line articles-section__grid-line--2"></div>
        <div className="articles-section__grid-line articles-section__grid-line--3"></div>
      </div>

      <div className="articles-section__container">
        {/* Section Header */}
        <div className="articles-header">
          <div className="articles-header__content">
            <div className="articles-badge">
              <span className="articles-badge__slashes">///</span>
              <span className="articles-badge__text">ARTICLES</span>
            </div>
            <h2 className="articles-title">Insights on neural logic</h2>
            <p className="articles-desc">
              Deep dives into AI architecture, agent automation, and the future of enterprise intelligence. Stay ahead of the neural curve.
            </p>
          </div>
        </div>

        {/* Section Body */}
        <div className="articles-body">
          
          {/* Left Side: Featured Article */}
          <a href="/blog/turn-ai-into-business-asset" className="featured-article" onClick={(e) => e.preventDefault()}>
            {/* Image cell (spanning full width of left panel) */}
            <div className="featured-article__image-cell">
              <div className="featured-article__image-container">
                <img src={anthemBg} alt="Featured Article" className="featured-article__image" />
                <div className="featured-article__image-overlay"></div>
                <h3 className="featured-article__title">
                  What It Takes to Turn AI Into a Business Asset
                </h3>
              </div>
            </div>
          </a>

          {/* Small Article 1 */}
          <a href="/blog/why-ai-outputs-feel-inconsistent" className="small-article" onClick={(e) => e.preventDefault()}>
            {/* Left Column (Col 3): Full-Height Image cell */}
            <div className="small-article__image-cell">
              <div className="small-article__image-container">
                <img src={cignaBg} alt="Article Thumbnail" className="small-article__image" />
                <div className="small-article__image-overlay"></div>
              </div>
            </div>
            
            {/* Right Column (Col 4): Info column split into 2 equal-height rows */}
            <div className="small-article__text-col">
              <div className="small-article__title-cell">
                <h4 className="small-article__title">
                  Why Your AI Outputs Feel Inconsistent
                </h4>
              </div>
              <div className="small-article__meta-cell">
                <div className="small-article__meta">
                  <div className="small-article__meta-date">APR 29, 2026</div>
                  <div className="small-article__meta-time">3 MINS READ</div>
                </div>
              </div>
            </div>
          </a>

          {/* Small Article 2 */}
          <a href="/blog/from-prompting-to-systems" className="small-article" onClick={(e) => e.preventDefault()}>
            {/* Left Column (Col 3): Full-Height Image cell */}
            <div className="small-article__image-cell">
              <div className="small-article__image-container">
                <img src={aetnaBg} alt="Article Thumbnail" className="small-article__image" />
                <div className="small-article__image-overlay"></div>
              </div>
            </div>
            
            {/* Right Column (Col 4): Info column split into 2 equal-height rows */}
            <div className="small-article__text-col">
              <div className="small-article__title-cell">
                <h4 className="small-article__title">
                  From Prompting to Systems: The Real Shift in AI
                </h4>
              </div>
              <div className="small-article__meta-cell">
                <div className="small-article__meta">
                  <div className="small-article__meta-date">APR 29, 2026</div>
                  <div className="small-article__meta-time">2 MINS READ</div>
                </div>
              </div>
            </div>
          </a>

        </div>

        {/* Bottom CTA Row (Spans Columns 1 to 4) */}
        <div className="articles-cta-row">
          {/* Column 1: Featured Article Metadata */}
          <div className="articles-cta-meta-col">
            <span className="articles-cta-meta-date">APR 29, 2026</span>
            <span className="articles-cta-meta-time">2 MINS READ</span>
          </div>

          {/* Column 2: Description of the featured article */}
          <div className="articles-cta-featured-desc-col">
            <p className="articles-cta-featured-desc">
              Using AI tools is easy. Turning them into something that drives real outcomes across your business requires structure.
            </p>
          </div>
          
          {/* Column 3: Access text */}
          <div className="articles-cta-text-col">
            <p className="articles-cta-text">
              Access all our articles in one place.
            </p>
          </div>
          
          {/* Column 4: View Articles Button */}
          <div className="articles-cta-button-col">
            <a href="/blog" className="articles-cta-button" onClick={(e) => { e.preventDefault(); alert('Blog incoming!'); }}>
              <span className="articles-cta-button__icon-box">
                <ArrowIcon />
              </span>
              <span className="articles-cta-button__text-box">
                View Articles
              </span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ArticlesSection;
