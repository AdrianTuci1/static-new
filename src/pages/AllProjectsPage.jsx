import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AllProjectsPage.css';

const projects = [
  {
    slug: 'octomus',
    year: '/2026',
    logo: 'octomus',
    title: 'Octomus AI Assistant',
    desc: 'Revolutionizing patient care through predictive analytics and seamless AI-driven diagnostic integration tools.',
  },
  {
    slug: 'thunder',
    year: '/2026',
    logo: 'thunder',
    title: 'Thunder Workflow Engine',
    desc: 'Automated workflow orchestration for enterprise teams with real-time collaboration and AI-powered decision support.',
  },
  {
    slug: 'statsparrot',
    year: '/2026',
    logo: 'statsparrot',
    title: 'StatsParrot Analytics',
    desc: 'Real-time analytics dashboard with intelligent alerting and automated reporting for data-driven teams.',
  },
  {
    slug: 'pixtooth',
    year: '/2026',
    logo: 'pixtooth',
    title: 'PixTooth Image Processing',
    desc: 'AI-powered image processing pipeline for creative workflows with automated enhancement and batch processing.',
  },
];

function AllProjectsPage() {
  return (
    <div className="all-projects-page">
      <Navbar />

      <section className="all-projects-hero">
        <div className="all-projects-hero__grid-lines"></div>
        <div className="container">
          <div className="section-label">
            <span className="section-label__icon">〰</span>
            <span className="section-label__text">CASE STUDIES</span>
          </div>
          <h1 className="all-projects-hero__title">AI systems we've designed and deployed</h1>
          <p className="all-projects-hero__desc">
            Explore real builds across automation, AI agents, and custom workflows, designed to solve specific problems and deliver measurable results.
          </p>
        </div>
      </section>

      <section className="projects-list">
        <div className="container">
          {projects.map((project) => (
            <Link key={project.slug} to={`/project/${project.slug}`} className="project-row">
              <span className="project-row__year">{project.year}</span>
              <span className="project-row__logo">{project.logo}</span>
              <div className="project-row__content">
                <h3 className="project-row__title">{project.title}</h3>
                <p className="project-row__desc">{project.desc}</p>
              </div>
              <span className="project-row__arrow">↗</span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AllProjectsPage;