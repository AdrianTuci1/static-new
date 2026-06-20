import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './FAQPage.css';

const faqData = {
  Overview: [
    { icon: '■', question: 'What is StaticLabs and how does it work?', answer: 'StaticLabs is an AI automation platform that enables enterprises to build, deploy, and manage custom AI agents. Our platform provides the infrastructure, tools, and frameworks needed to create intelligent workflows that automate complex business processes.' },
    { icon: '○', question: 'Is my data secure with StaticLabs?', answer: 'Yes, security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, and strict data isolation. Your data never trains our models unless explicitly opted in.' },
    { icon: '⊞', question: 'Can I integrate StaticLabs with my existing tools?', answer: 'Absolutely. StaticLabs integrates with over 200+ tools including Salesforce, Slack, HubSpot, and custom APIs via our robust integration framework.' },
  ],
  Security: [
    { icon: '☁', question: 'What kind of support do you offer?', answer: 'We offer tiered support including community forums, email support, dedicated Slack channels, and enterprise-grade 24/7 phone support with dedicated account managers.' },
    { icon: 'Ⓟ', question: 'How does pricing work for enterprise?', answer: 'Enterprise pricing is based on usage, number of agents, and support tier. Contact our sales team for a custom quote tailored to your organization needs.' },
    { icon: '∞', question: 'What is your SLA and uptime guarantee?', answer: 'We guarantee 99.9% uptime for all paid plans with automatic failover and redundancy. Enterprise plans include custom SLA agreements.' },
  ],
  Protocols: [
    { icon: '■', question: 'What protocols do you support?', answer: 'We support REST, GraphQL, WebSocket, gRPC, and custom protocol adapters for legacy systems integration.' },
    { icon: '○', question: 'How do you handle data compliance?', answer: 'We are GDPR, CCPA, and HIPAA compliant. Data residency options are available for enterprise customers requiring specific geographic data storage.' },
  ],
  Licensing: [
    { icon: '⊞', question: 'What licensing options are available?', answer: 'We offer SaaS, private cloud, and on-premise deployment options. Licenses are available per-user, per-agent, or unlimited enterprise agreements.' },
    { icon: '☁', question: 'Can I resell StaticLabs?', answer: 'Yes, we have a partner program for resellers, system integrators, and consultants. Contact our partner team for program details.' },
  ],
};

function FAQPage() {
  const [activeTab, setActiveTab] = useState('Overview');
  const [openIndex, setOpenIndex] = useState(0);

  const tabs = Object.keys(faqData);

  return (
    <div className="faq-page">
      <Navbar />

      <section className="faq-hero">
        <div className="container">
          <div className="faq-hero__grid">
            <div className="faq-hero__content">
              <div className="section-label section-label--dark">
                <span className="section-label__icon">////</span>
                <span className="section-label__text">FAQ</span>
              </div>
              <h1 className="faq-hero__title">Common inquiries</h1>
              <p className="faq-hero__desc">
                Find answers to frequently asked questions about our platform, security, and enterprise solutions.
              </p>
              <Link to="/contact" className="faq-hero__cta">
                <span className="faq-hero__cta-icon">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="faq-hero__cta-text">Contact Us</span>
              </Link>
            </div>
            <div className="faq-hero__tabs">
              <div className="faq-tabs">
                {tabs.map(tab => (
                  <button
                    key={tab}
                    className={`faq-tab ${activeTab === tab ? 'faq-tab--active' : ''}`}
                    onClick={() => { setActiveTab(tab); setOpenIndex(0); }}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="faq-accordion">
                {faqData[activeTab].map((item, index) => (
                  <div key={index} className={`faq-item ${openIndex === index ? 'faq-item--open' : ''}`}>
                    <button
                      className="faq-item__header"
                      onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    >
                      <span className="faq-item__icon">{item.icon}</span>
                      <span className="faq-item__question">{item.question}</span>
                      <span className="faq-item__toggle">
                        {openIndex === index ? '✕' : '+'}
                      </span>
                    </button>
                    <div className="faq-item__content">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default FAQPage;