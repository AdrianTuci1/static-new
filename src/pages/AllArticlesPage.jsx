import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './AllArticlesPage.css';

const articles = [
  { slug: 'ai-business-asset', title: 'What It Takes to Turn AI Into a Business Asset', date: 'JAN 15, 2026' },
  { slug: 'building-autonomous-agents', title: 'Building Autonomous Agents That Scale', date: 'FEB 2, 2026' },
  { slug: 'llm-native-workflows', title: 'LLM-Native Workflows in Production', date: 'MAR 10, 2026' },
  { slug: 'data-intelligence-pipelines', title: 'Data Intelligence Pipelines for Modern Teams', date: 'APR 5, 2026' },
  { slug: 'neural-infrastructure', title: 'Neural Infrastructure: A Practical Guide', date: 'MAY 20, 2026' },
  { slug: 'agent-orchestration', title: 'Agent Orchestration at Scale', date: 'JUN 8, 2026' },
];

function AllArticlesPage() {
  return (
    <div className="all-articles-page">
      <Navbar />

      <section className="all-articles-hero">
        <div className="all-articles-hero__grid-lines"></div>
        <div className="container">
          <div className="section-label">
            <span className="section-label__icon">≡</span>
            <span className="section-label__text">ALL ARTICLES</span>
          </div>
          <h1 className="all-articles-hero__title">Ideas shaping the future of AI systems</h1>
          <p className="all-articles-hero__desc">
            Explore practical insights on AI automation, intelligent workflows, product strategy, and the systems helping modern teams move faster.
          </p>
        </div>
      </section>

      <section className="articles-grid">
        <div className="container">
          <div className="articles-grid__grid">
            {articles.map((article) => (
              <Link key={article.slug} to={`/article/${article.slug}`} className="articles-grid__card">
                <div className="articles-grid__card-image"></div>
                <div className="articles-grid__card-overlay">
                  <span className="articles-grid__card-date">{article.date}</span>
                  <h3 className="articles-grid__card-title">{article.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default AllArticlesPage;