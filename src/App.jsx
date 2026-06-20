import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import AllProjectsPage from './pages/AllProjectsPage';
import AllArticlesPage from './pages/AllArticlesPage';
import './App.css';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/articles" element={<AllArticlesPage />} />
        <Route path="/article/:slug" element={<ArticleDetailPage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
        <Route path="/project/:slug" element={<CaseStudyDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
