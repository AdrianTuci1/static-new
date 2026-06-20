import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './ArticleDetailPage.css';

const articlesData = {
  'ai-business-asset': {
    title: 'What It Takes to Turn AI Into a Business Asset',
    lead: 'We explore the infrastructure, logic, and design patterns that separate experimental AI from production-grade systems.',
    readTime: '12 MIN READ',
    date: 'JAN 15, 2026',
    content: [
      { type: 'h2', text: 'The Infrastructure Gap' },
      { type: 'p', text: 'Most AI projects fail not because of the model, but because of the infrastructure around it. Building a prototype that works on your laptop is vastly different from deploying a system that serves millions of requests with sub-100ms latency.' },
      { type: 'p', text: 'The gap between experimental and production AI is widening. Teams that bridge this gap successfully share common patterns in their architecture, observability, and deployment strategies.' },
      { type: 'h2', text: 'Design Patterns for Scale' },
      { type: 'p', text: 'Production AI systems require careful consideration of caching, batching, and fallback strategies. When your primary model is unavailable, what happens? When latency spikes, how do you degrade gracefully?' },
      { type: 'blockquote', text: 'The best AI systems are those that fail gracefully and recover quickly. Reliability is not an afterthought—it is the foundation.' },
      { type: 'h3', text: 'Key Considerations' },
      { type: 'ul', items: ['Model versioning and rollback strategies', 'A/B testing frameworks for model iterations', 'Observability into model performance and drift', 'Cost optimization through intelligent caching'] },
      { type: 'h2', text: 'Building for the Long Term' },
      { type: 'p', text: 'AI systems that deliver lasting value are built with the same rigor as any other production software. This means comprehensive testing, monitoring, and the ability to iterate quickly based on real-world feedback.' },
    ],
  },
  'building-autonomous-agents': {
    title: 'Building Autonomous Agents That Scale',
    lead: 'The architecture behind self-improving agent systems and how to deploy them at enterprise scale.',
    readTime: '12 MIN READ',
    date: 'FEB 2, 2026',
    content: [
      { type: 'h2', text: 'Agent Architecture' },
      { type: 'p', text: 'Autonomous agents require a fundamentally different architecture than traditional software. They need to perceive, reason, act, and learn from feedback loops.' },
      { type: 'h2', text: 'The Feedback Loop' },
      { type: 'p', text: 'Every action an agent takes should generate observable outcomes that can be evaluated. This feedback loop is what enables continuous improvement.' },
    ],
  },
  'llm-native-workflows': {
    title: 'LLM-Native Workflows in Production',
    lead: 'How we built a production pipeline that processes millions of requests with sub-50ms latency.',
    readTime: '15 MIN READ',
    date: 'MAR 10, 2026',
    content: [
      { type: 'h2', text: 'The Challenge' },
      { type: 'p', text: 'Processing millions of LLM requests while maintaining sub-50ms latency requires a carefully orchestrated pipeline of caching, pre-processing, and intelligent routing.' },
    ],
  },
  'data-intelligence-pipelines': {
    title: 'Data Intelligence Pipelines for Modern Teams',
    lead: 'Designing secure data pipelines that extract, transform, and load high-fidelity data at scale.',
    readTime: '10 MIN READ',
    date: 'APR 5, 2026',
    content: [
      { type: 'h2', text: 'Pipeline Architecture' },
      { type: 'p', text: 'Modern data pipelines need to handle structured and unstructured data, real-time and batch processing, all while maintaining security and compliance.' },
    ],
  },
  'neural-infrastructure': {
    title: 'Neural Infrastructure: A Practical Guide',
    lead: 'Everything you need to know about deploying and scaling neural networks in production.',
    readTime: '6 MIN READ',
    date: 'MAY 20, 2026',
    content: [
      { type: 'h2', text: 'Getting Started' },
      { type: 'p', text: 'Deploying neural networks in production requires understanding of hardware acceleration, model optimization, and serving infrastructure.' },
    ],
  },
};

function ArticleDetailPage() {
  const { slug } = useParams();
  const article = articlesData[slug] || articlesData['ai-business-asset'];

  const renderContent = (block) => {
    switch (block.type) {
      case 'h2':
        return <h2 className="article-content__h2">{block.text}</h2>;
      case 'h3':
        return <h3 className="article-content__h3">{block.text}</h3>;
      case 'p':
        return <p className="article-content__p">{block.text}</p>;
      case 'blockquote':
        return <blockquote className="article-content__blockquote">{block.text}</blockquote>;
      case 'ul':
        return (
          <ul className="article-content__ul">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
      default:
        return null;
    }
  };

  return (
    <div className="article-detail-page">
      <Navbar />

      {/* Article Hero */}
      <section className="article-hero">
        <div className="article-hero__bg"></div>
        <div className="container">
          <div className="article-hero__content">
            <span className="article-hero__label">ARTICLE</span>
            <h1 className="article-hero__title">{article.title}</h1>
            <p className="article-hero__lead">{article.lead}</p>
            <div className="article-hero__meta">
              <span>⏱ {article.readTime}</span>
              <span>📅 {article.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="article-content">
        <div className="container">
          <div className="article-content__body">
            {article.content.map((block, index) => (
              <div key={index}>{renderContent(block)}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="related-articles">
        <div className="container">
          <div className="section-label section-label--dark">
            <span className="section-label__icon">////</span>
            <span className="section-label__text">MORE ARTICLES</span>
          </div>
          <h2 className="related-articles__title">Continue Reading</h2>
          <div className="related-articles__grid">
            {Object.entries(articlesData)
              .filter(([key]) => key !== slug)
              .slice(0, 3)
              .map(([key, article]) => (
                <Link key={key} to={`/article/${key}`} className="related-article-card">
                  <div className="related-article-card__image"></div>
                  <span className="related-article-card__category">{article.date}</span>
                  <h3 className="related-article-card__title">{article.title}</h3>
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ArticleDetailPage;
