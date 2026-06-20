import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import IntegrationsSection from '../components/IntegrationsSection';
import FeaturesSection from '../components/FeaturesSection';
import CaseStudiesSection from '../components/CaseStudiesSection';
import VisualizerSection from '../components/VisualizerSection';
import FeaturesStatsSection from '../components/FeaturesStatsSection';
import OurApproachSection from '../components/OurApproachSection';
import EngineeredAutonomySection from '../components/EngineeredAutonomySection';
import IntegrationsGridSection from '../components/IntegrationsGridSection';
import ArticlesSection from '../components/ArticlesSection';
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

      <CaseStudiesSection />

      <VisualizerSection />

      <FeaturesStatsSection />

      <OurApproachSection />

      <EngineeredAutonomySection />

      <IntegrationsGridSection />

      <ArticlesSection />

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
