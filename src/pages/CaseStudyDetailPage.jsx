import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './CaseStudyDetailPage.css';

const projectsData = {
  octomus: {
    client: 'octomus healthcare',
    title: 'Octomus Smart Health Systems',
    subtitle: 'Revolutionizing patient care through predictive analytics and seamless AI-driven diagnostic integration tools.',
    stats: [
      { number: '$45M', desc: 'Funding secured for AI infrastructure expansion' },
      { number: '700%', desc: 'Increase in patient data processing efficiency' },
      { number: '41x', desc: 'ROI within first fiscal year of deployment' },
      { number: '84', desc: 'Healthcare providers integrated into the network' },
    ],
    testimonial: {
      quote: 'The AI implementation transformed how we interact with patient data. It is not just a tool; it is a fundamental shift in healthcare efficiency and accuracy for our global network.',
      author: 'Sarah Jenkins',
      role: 'HEAD OF INNOVATION, CIGNA',
    },
    sidebar: [
      { label: 'INDUSTRY', value: 'Healthcare AI' },
      { label: 'TIMELINE', value: '4 Months' },
      { label: 'PLATFORM', value: 'Web & Mobile' },
      { label: 'LIVE WEBSITE', value: 'octomus.com/ai-innovation' },
    ],
    challenge: 'The challenge was to modernize a legacy healthcare infrastructure with cutting-edge artificial intelligence. We focused on bridging the gap between complex medical data and actionable patient insights for providers.',
  },
  cigna: {
    client: 'cigna healthcare',
    title: 'Cigna Smart Health Systems',
    subtitle: 'Revolutionizing patient care through predictive analytics and seamless AI-driven diagnostic integration tools.',
    stats: [
      { number: '$45M', desc: 'Funding secured for AI infrastructure expansion' },
      { number: '700%', desc: 'Increase in patient data processing efficiency' },
      { number: '41x', desc: 'ROI within first fiscal year of deployment' },
      { number: '84', desc: 'Healthcare providers integrated into the network' },
    ],
    testimonial: {
      quote: 'The AI implementation transformed how we interact with patient data. It is not just a tool; it is a fundamental shift in healthcare efficiency and accuracy for our global network.',
      author: 'Sarah Jenkins',
      role: 'HEAD OF INNOVATION, CIGNA',
    },
    sidebar: [
      { label: 'INDUSTRY', value: 'Healthcare AI' },
      { label: 'TIMELINE', value: '4 Months' },
      { label: 'PLATFORM', value: 'Web & Mobile' },
      { label: 'LIVE WEBSITE', value: 'cigna.com/ai-innovation' },
    ],
    challenge: 'The challenge was to modernize a legacy healthcare infrastructure with cutting-edge artificial intelligence. We focused on bridging the gap between complex medical data and actionable patient insights for providers.',
  },
  aetna: {
    client: 'aetna',
    title: 'Aetna Health Data Ecosystem',
    subtitle: "We automated Aetna's member data management using secure AI to provide personalized care and clinical insights.",
    stats: [
      { number: '94%', desc: 'Reduction in manual data entry cycles' },
      { number: '2.5M', desc: 'Patient records securely processed' },
      { number: '18x', desc: 'ROI within first six months of deployment' },
      { number: '12', desc: 'Weeks to full system integration' },
    ],
    testimonial: {
      quote: 'The automation of our patient data pipeline was flawless. The system is extremely secure and has cut our operations cycle time by more than half.',
      author: 'Robert Vance',
      role: 'VP OF CLINICAL SYSTEMS, AETNA',
    },
    sidebar: [
      { label: 'INDUSTRY', value: 'Health Data' },
      { label: 'TIMELINE', value: '3 Months' },
      { label: 'PLATFORM', value: 'API & Secure Cloud' },
      { label: 'LIVE WEBSITE', value: 'aetna.com/data-systems' },
    ],
    challenge: 'Aetna needed to aggregate data from disparate legacy databases into a unified, secure system that conforms to HIPAA compliance while offering real-time retrieval for clinical support.',
  },
  anthem: {
    client: 'anthem',
    title: 'Anthem Neural Care Network',
    subtitle: "We deployed a custom LLM to automate Anthem's provider relations, reducing ticket latency by eighty-five percent.",
    stats: [
      { number: '85%', desc: 'Reduction in provider support ticket latency' },
      { number: '90%', desc: 'Accuracy on automated inquiries' },
      { number: '10K+', desc: 'Provider support hours saved' },
      { number: '4', desc: 'Weeks to system deployment' },
    ],
    testimonial: {
      quote: 'The custom language models built by the team have allowed our provider relations team to focus on complex cases, while routine requests are handled instantly and accurately.',
      author: 'Marcus Aurelius',
      role: 'DIRECTOR OF OPERATIONS, ANTHEM',
    },
    sidebar: [
      { label: 'INDUSTRY', value: 'Healthcare Operations' },
      { label: 'TIMELINE', value: '2 Months' },
      { label: 'PLATFORM', value: 'LLM & Slack Integration' },
      { label: 'LIVE WEBSITE', value: 'anthem.com/neural-care' },
    ],
    challenge: "Anthem's provider operations were overwhelmed by repetitive tickets. The challenge was to fine-tune a domain-specific LLM to safely automate answers to complex medical billing and policy questions.",
  },
  thunder: {
    client: 'thunder',
    title: 'Thunder Workflow Engine',
    subtitle: 'Automated workflow orchestration for enterprise teams with real-time collaboration and AI-powered decision support.',
    stats: [
      { number: '$12M', desc: 'Annual cost savings through automation' },
      { number: '300%', desc: 'Increase in team productivity' },
      { number: '15x', desc: 'Faster decision-making cycles' },
      { number: '200+', desc: 'Enterprise teams onboarded' },
    ],
    testimonial: {
      quote: 'StaticLabs transformed our operational workflows. The AI-driven automation has reduced our manual processing time by over 80%.',
      author: 'Michael Chen',
      role: 'CTO, THUNDER',
    },
    sidebar: [
      { label: 'INDUSTRY', value: 'Enterprise SaaS' },
      { label: 'TIMELINE', value: '6 Months' },
      { label: 'PLATFORM', value: 'Web & API' },
      { label: 'LIVE WEBSITE', value: 'thunder.io/automation' },
    ],
    challenge: 'Thunder needed to scale their workflow automation to handle millions of transactions while maintaining sub-second response times across their global user base.',
  },
  statsparrot: {
    client: 'statsparrot',
    title: 'StatsParrot Analytics',
    subtitle: 'Real-time analytics dashboard with intelligent alerting and automated reporting for data-driven teams.',
    stats: [
      { number: '$8M', desc: 'Revenue impact from data-driven decisions' },
      { number: '500%', desc: 'Increase in reporting efficiency' },
      { number: '10x', desc: 'Faster anomaly detection' },
      { number: '50+', desc: 'Data sources integrated' },
    ],
    testimonial: {
      quote: 'The analytics platform built by StaticLabs has become the central nervous system of our data operations.',
      author: 'Emily Rodriguez',
      role: 'HEAD OF DATA, STATSPARROT',
    },
    sidebar: [
      { label: 'INDUSTRY', value: 'Data Analytics' },
      { label: 'TIMELINE', value: '3 Months' },
      { label: 'PLATFORM', value: 'Web & Mobile' },
      { label: 'LIVE WEBSITE', value: 'statsparrot.com/analytics' },
    ],
    challenge: 'StatsParrot needed to unify data from 50+ sources into a single coherent analytics platform with real-time alerting capabilities.',
  },
  pixtooth: {
    client: 'pixtooth',
    title: 'PixTooth Image Processing',
    subtitle: 'AI-powered image processing pipeline for creative workflows with automated enhancement and batch processing.',
    stats: [
      { number: '$5M', desc: 'Funding for AI image research' },
      { number: '1000%', desc: 'Faster image processing' },
      { number: '20x', desc: 'Batch processing throughput' },
      { number: '100K+', desc: 'Images processed daily' },
    ],
    testimonial: {
      quote: 'The image processing pipeline has revolutionized our creative workflow. What used to take hours now happens in seconds.',
      author: 'David Park',
      role: 'CREATIVE DIRECTOR, PIXTOOTH',
    },
    sidebar: [
      { label: 'INDUSTRY', value: 'Creative Tech' },
      { label: 'TIMELINE', value: '5 Months' },
      { label: 'PLATFORM', value: 'Web & Desktop' },
      { label: 'LIVE WEBSITE', value: 'pixtooth.com/process' },
    ],
    challenge: 'PixTooth needed to process over 100,000 images daily with AI-powered enhancement while maintaining visual quality standards.',
  },
};

function CaseStudyDetailPage() {
  const { slug } = useParams();
  const project = projectsData[slug] || projectsData.octomus;

  return (
    <div className="case-study-page">
      <Navbar />

      {/* Case Study Hero */}
      <section className="case-study-hero">
        <div className="case-study-hero__bg">
          <div className="case-study-hero__gradient"></div>
        </div>
        <div className="container">
          <div className="case-study-hero__content">
            <span className="case-study-hero__client">{project.client}</span>
            <h1 className="case-study-hero__title">{project.title}</h1>
            <p className="case-study-hero__subtitle">{project.subtitle}</p>
          </div>
        </div>
        <div className="case-study-hero__stats">
          <div className="container">
            <div className="case-study-hero__stats-grid">
              {project.stats.map((stat, index) => (
                <div key={index} className="case-study-hero__stat">
                  <div className="case-study-hero__stat-icon">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <span className="case-study-hero__stat-number">{stat.number}</span>
                  <p className="case-study-hero__stat-desc">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial + Overview */}
      <section className="case-study-overview">
        <div className="container">
          <div className="case-study-overview__grid">
            <div className="case-study-overview__left">
              <blockquote className="case-study-overview__quote">
                {project.testimonial.quote}
              </blockquote>
              <div className="case-study-overview__author">
                <span className="case-study-overview__author-name">{project.testimonial.author}</span>
                <span className="case-study-overview__author-role">{project.testimonial.role}</span>
              </div>
              <p className="case-study-overview__challenge">{project.challenge}</p>
            </div>
            <div className="case-study-overview__right">
              {project.sidebar.map((item, index) => (
                <div key={index} className="case-study-overview__info-item">
                  <span className="case-study-overview__info-label">{item.label}</span>
                  <span className="case-study-overview__info-value">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="case-study-image">
        <div className="case-study-image__placeholder"></div>
      </section>

      <Footer />
    </div>
  );
}

export default CaseStudyDetailPage;
