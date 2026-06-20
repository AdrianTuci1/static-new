import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './BlogPage.css';

const articles = [
  {
    slug: 'ai-business-asset',
    category: 'NEURAL OPS',
    date: 'JAN 15, 2026',
    readTime: '8 MIN READ',
    title: 'What It Takes to Turn AI Into a Business Asset',
    excerpt: 'We explore the infrastructure, logic, and design patterns that separate experimental AI from production-grade systems.',
    featured: true,
  },
  {
    slug: 'building-autonomous-agents',
    category: 'AGENT DESIGN',
    date: 'FEB 2, 2026',
    readTime: '12 MIN READ',
    title: 'Building Autonomous Agents That Scale',
    excerpt: 'The architecture behind self-improving agent systems and how to deploy them at enterprise scale.',
    featured: false,
  },
  {
    slug: 'llm-native-workflows',
    category: 'CASE STUDY',
    date: 'MAR 10, 2026',
    readTime: '15 MIN READ',
    title: 'LLM-Native Workflows in Production',
    excerpt: 'How we built a production pipeline that processes millions of requests with sub-50ms latency.',
    featured: false,
  },
  {
    slug: 'data-intelligence-pipelines',
    category: 'DATA OPS',
    date: 'APR 5, 2026',
    readTime: '10 MIN READ',
    title: 'Data Intelligence Pipelines for Modern Teams',
    excerpt: 'Designing secure data pipelines that extract, transform, and load high-fidelity data at scale.',
    featured: false,
  },
  {
    slug: 'neural-infrastructure',
    category: 'INFRASTRUCTURE',
    date: 'MAY 20, 2026',
    readTime: '6 MIN READ',
    title: 'Neural Infrastructure: A Practical Guide',
    excerpt: 'Everything you need to know about deploying and scaling neural networks in production.',
    featured: false,
  },
];

function BlogPage() {
  const featuredArticle = articles.find(a => a.featured);
  const otherArticles = articles.filter(a => !a.featured);

  return (
    <div className="blog-page">
      <Navbar />

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="container">
          <div className="blog-hero__content">
            <div className="section-label">
              <span className="section-label__icon">////</span>
              <span className="section-label__text">ALL ARTICLES</span>
            </div>
            <h1 className="blog-hero__title">
              Explore the latest in neural systems, agent architecture, and enterprise AI.
            </h1>
            <div className="blog-hero__images">
              <div className="blog-hero__image blog-hero__image--1"></div>
              <div className="blog-hero__image blog-hero__image--2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="featured-articles">
        <div className="container">
          <div className="featured-articles__grid">
            <Link to={`/article/${featuredArticle.slug}`} className="article-card article-card--featured">
              <div className="article-card__image article-card__image--featured"></div>
              <div className="article-card__overlay">
                <span className="article-card__category">{featuredArticle.category}</span>
                <h3 className="article-card__title">{featuredArticle.title}</h3>
                <span className="article-card__meta">{featuredArticle.date} // {featuredArticle.readTime}</span>
              </div>
            </Link>
            <div className="featured-articles__side">
              {otherArticles.slice(0, 2).map(article => (
                <Link key={article.slug} to={`/article/${article.slug}`} className="article-card article-card--standard">
                  <div className="article-card__image article-card__image--standard"></div>
                  <div className="article-card__content">
                    <span className="article-card__category">{article.category}</span>
                    <h3 className="article-card__title">{article.title}</h3>
                    <span className="article-card__meta">{article.date} // {article.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="articles-list">
        <div className="container">
          {otherArticles.slice(2).map(article => (
            <Link key={article.slug} to={`/article/${article.slug}`} className="article-row">
              <div className="article-row__image"></div>
              <div className="article-row__content">
                <span className="article-row__meta">{article.category} // {article.date} // {article.readTime}</span>
                <h3 className="article-row__title">{article.title}</h3>
                <p className="article-row__excerpt">{article.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default BlogPage;