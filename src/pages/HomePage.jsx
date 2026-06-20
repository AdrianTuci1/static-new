import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import IntegrationsSection from '../components/IntegrationsSection';
import FeaturesSection from '../components/FeaturesSection';
import StatisticsSection from '../components/StatisticsSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <Navbar />

      {/* Sections with global grid lines */}
      <div className="home-page__grid-wrapper">
        {/* Global Grid Lines */}
        <div className="home-page__grid">
          <div className="home-page__grid-line home-page__grid-line--1"></div>
          <div className="home-page__grid-line home-page__grid-line--2"></div>
          <div className="home-page__grid-line home-page__grid-line--3"></div>
        </div>

        <HeroSection />
        <IntegrationsSection />
        <FeaturesSection />
      </div>

      <StatisticsSection />

      <CaseStudiesSection />

      {/* Product Demo Section */}
      <section className="product-demo">
        <div className="product-demo__container max-w-[1440px] mx-auto px-12">
          <h2 className="product-demo__title">See it in action.</h2>
          <p className="product-demo__desc">A glimpse into the platform that powers modern workflows.</p>
          <div className="product-demo__mockup">
            <div className="mockup-browser">
              <div className="mockup-browser__header">
                <div className="mockup-browser__dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className="mockup-browser__address">app.platform.com/dashboard</div>
              </div>
              <div className="mockup-browser__content">
                <div className="workflow-node">
                  <div className="workflow-node__icon">◆</div>
                  <div className="workflow-node__title">Ingest</div>
                  <div className="workflow-node__subtitle">Data Sources</div>
                </div>
                <div className="workflow-node workflow-node--active">
                  <div className="workflow-node__icon">◇</div>
                  <div className="workflow-node__title">Process</div>
                  <div className="workflow-node__subtitle">Transform</div>
                </div>
                <div className="workflow-node">
                  <div className="workflow-node__icon">◆</div>
                  <div className="workflow-node__title">Analyze</div>
                  <div className="workflow-node__subtitle">Insights</div>
                </div>
                <div className="workflow-node">
                  <div className="workflow-node__icon">◆</div>
                  <div className="workflow-node__title">Deploy</div>
                  <div className="workflow-node__subtitle">Actions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Tabs Section */}
      <section className="features-tabs">
        <div className="features-tabs__container max-w-[1440px] mx-auto px-12">
          <h2 className="features-tabs__title">Built for modern teams.</h2>
          <p className="features-tabs__desc">Everything you need to ship faster, collaborate better, and scale confidently.</p>
          <div className="features-tabs__content">
            <div className="features-tabs__mockup">
              <div className="mockup-chat__header">
                <span className="mockup-chat__toggle mockup-chat__toggle--active">Chat</span>
                <span className="mockup-chat__toggle">Code</span>
                <span className="mockup-chat__toggle">Preview</span>
              </div>
              <div className="mockup-chat__messages">
                <div className="mockup-chat__message">How can I optimize this query?</div>
                <div className="mockup-chat__message mockup-chat__message--user">Here are three indexing strategies...</div>
                <div className="mockup-chat__message">Can you show me the execution plan?</div>
              </div>
            </div>
            <p className="features-tabs__text">
              Intelligent assistance that understands your codebase, infrastructure, and business logic. Get context-aware suggestions without switching contexts.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="our-approach">
        <div className="our-approach__container max-w-[1440px] mx-auto px-12">
          <div className="our-approach__grid">
            <div className="our-approach__image">
              <div className="our-approach__image-placeholder"></div>
            </div>
            <div className="our-approach__content">
              <h2 className="our-approach__title">Our approach is different.</h2>
              <p className="our-approach__desc">
                We believe the best tools disappear into the background. No steep learning curves, no forced migrations—just thoughtful design that respects how your team already works.
              </p>
              <div className="our-approach__features">
                <div className="approach-feature">
                  <div className="approach-feature__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <span className="approach-feature__title">Modular Architecture</span>
                  <span className="approach-feature__desc">Use only what you need. Add capabilities as you grow.</span>
                </div>
                <div className="approach-feature">
                  <div className="approach-feature__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <span className="approach-feature__title">Zero-Config Setup</span>
                  <span className="approach-feature__desc">Get started in minutes, not days. Smart defaults included.</span>
                </div>
                <div className="approach-feature">
                  <div className="approach-feature__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="3" y1="9" x2="21" y2="9" />
                      <line x1="9" y1="21" x2="9" y2="9" />
                    </svg>
                  </div>
                  <span className="approach-feature__title">Enterprise Security</span>
                  <span className="approach-feature__desc">SOC 2 compliant with end-to-end encryption by default.</span>
                </div>
                <div className="approach-feature">
                  <div className="approach-feature__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <span className="approach-feature__title">Real-Time Sync</span>
                  <span className="approach-feature__desc">Changes propagate instantly across all connected systems.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-section__container max-w-[1440px] mx-auto px-12 relative z-10">
          <h2 className="cta-section__title">Ready to get started?</h2>
          <p className="cta-section__desc">Join thousands of teams already shipping faster.</p>
          <form className="cta-section__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="cta-section__input"
              placeholder="Enter your email"
            />
            <button type="submit" className="cta-section__button">
              Get Started
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default HomePage;
