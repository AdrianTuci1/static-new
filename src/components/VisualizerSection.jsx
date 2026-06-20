import React, { useState } from 'react';
import './VisualizerSection.css';

// SVG Icons helper
const Icons = {
  undo: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}>
      <path d="M3 7v6h6M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
    </svg>
  ),
  redo: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '14px', height: '14px' }}>
      <path d="M21 7v6h-6M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </svg>
  ),
  sparkles: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.3-6.3l-.7.7M6.7 17.3l-.7.7m12.6 0l-.7-.7M6.7 6.7l-.7-.7" />
      <path d="M10 8.5L12 6l2 2.5L16.5 8l-2 2 2.5 2-2.5 2-2 2.5-2-2.5-2.5-2 2.5-2z" fill="currentColor" stroke="none" />
    </svg>
  ),
  untitled: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  ),
  openai: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
      <path d="M4.5 16.5c-1.5-1.25-2.5-3.25-2.5-5.5s1-4.25 2.5-5.5M19.5 16.5c1.5-1.25 2.5-3.25 2.5-5.5s-1-4.25-2.5-5.5" />
      <path d="M12 2c2.5 0 4.5 2 4.5 4.5S14.5 11 12 11 7.5 9 7.5 6.5 9.5 2 12 2z" />
      <path d="M12 22c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" />
      <path d="M16.5 12c0 2.5-2 4.5-4.5 4.5s-4.5-2-4.5-4.5 2-4.5 4.5-4.5 4.5 2 4.5 4.5z" opacity="0.5" />
    </svg>
  ),
  anthropic: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
      <path d="M12 2v20M2 12h20M5.75 5.75l12.5 12.5M5.75 18.25l12.5-12.5" />
    </svg>
  ),
  gemini: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
      <path d="M12 2c0 5.523 4.477 10 10 10-5.523 0-10 4.477-10 10-0-5.523-4.477-10-10-10 5.523 0 10-4.477 10-10z" />
    </svg>
  ),
  llama: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '20px', height: '20px' }}>
      <path d="M16 18a4 4 0 0 1-8 0v-4a4 4 0 0 1 8 0v4z" />
      <path d="M12 6c1.5 0 3 .5 3 2v2H9V8c0-1.5 1.5-2 3-2z" />
      <path d="M7 11V9a2 2 0 0 1 2-2M17 11V9a2 2 0 0 0-2-2" />
      <circle cx="10" cy="14" r="1" fill="currentColor" />
      <circle cx="14" cy="14" r="1" fill="currentColor" />
    </svg>
  ),
  mistral: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '18px', height: '18px' }}>
      <path d="M4 20V8l8 6 8-6v12M12 14v8" />
    </svg>
  ),
  plus: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: '16px', height: '16px' }}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  ),
  envelope: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 6l9 6 9-6" />
    </svg>
  ),
  pencil: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '22px', height: '22px' }}>
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  ),
  lightning: () => (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: '16px', height: '16px' }}>
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  code: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  telegram: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
      <line x1="22" y1="2" x2="11" y2="13" />
      <polygon points="22 2 15 22 11 13 2 9 22 2" />
    </svg>
  ),
  fork: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '24px', height: '24px' }}>
      <path d="M12 2v20" />
      <path d="M12 12h6a2 2 0 0 0 2-2V4M12 12H6a2 2 0 0 0-2 2v6" />
    </svg>
  ),
};

function VisualizerSection() {
  const [activeTab, setActiveTab] = useState('chat'); // 'chat' or 'agent'

  return (
    <section className="visualizer-section">
      {/* Background Grid Lines */}
      <div className="visualizer-section__grid">
        <div className="visualizer-section__grid-line visualizer-section__grid-line--1"></div>
        <div className="visualizer-section__grid-line visualizer-section__grid-line--2"></div>
        <div className="visualizer-section__grid-line visualizer-section__grid-line--3"></div>
      </div>

      <div className="visualizer-section__container">
        {/* Title Block */}
        <div className="visualizer-section__header-row">
          <div className="visualizer-section__header-content">
            <div className="section-label-visualizer">
              <div className="section-label-visualizer__bars">
                <span className="section-label-visualizer__bar"></span>
                <span className="section-label-visualizer__bar"></span>
                <span className="section-label-visualizer__bar"></span>
                <span className="section-label-visualizer__bar"></span>
                <span className="section-label-visualizer__bar"></span>
              </div>
              <span className="section-label-visualizer__text">OUR PRODUCT</span>
            </div>
            <h2 className="visualizer-section__heading">Build logic at scale</h2>
            <p className="visualizer-section__subheading">
              Design, deploy, and manage sophisticated AI workflows through an intuitive visual interface.<br />
              No complex coding—just pure logic.
            </p>
          </div>
        </div>

        {/* Visualizer Technical Frame */}
        <div className="visualizer-frame">
          {/* Left Decorators */}
          <div className="visualizer-deco-left">
            <div className="visualizer-deco-left__bars-top">
              <span className="visualizer-deco-left__bar-top"></span>
              <span className="visualizer-deco-left__bar-top"></span>
              <span className="visualizer-deco-left__bar-top"></span>
            </div>
            <div className="visualizer-deco-left__line"></div>
            <div className="visualizer-deco-left__bottom-bracket">
              <span className="visualizer-deco-left__bracket-v"></span>
              <span className="visualizer-deco-left__bracket-h"></span>
              <span className="visualizer-deco-left__text">AUTO</span>
              <div className="visualizer-deco-left__bars-bottom">
                <span className="visualizer-deco-left__bar-bottom"></span>
                <span className="visualizer-deco-left__bar-bottom"></span>
                <span className="visualizer-deco-left__bar-bottom"></span>
                <span className="visualizer-deco-left__bar-bottom"></span>
                <span className="visualizer-deco-left__bar-bottom"></span>
                <span className="visualizer-deco-left__bar-bottom"></span>
              </div>
            </div>
          </div>

          {/* Right Decorators */}
          <div className="visualizer-deco-right">
            <div className="visualizer-deco-right__line"></div>
            <div className="visualizer-deco-right__top-line"></div>
            <div className="visualizer-deco-right__host">
              <span>H</span>
              <span>O</span>
              <span>S</span>
              <span>T</span>
            </div>
          </div>

          {/* Left Sidebar */}
          <div className="visualizer-sidebar">
            <div className="visualizer-sidebar__tabs">
              <div 
                className={`visualizer-sidebar__tab ${activeTab === 'agent' ? 'visualizer-sidebar__tab--active' : 'visualizer-sidebar__tab--inactive'}`}
                onClick={() => setActiveTab('agent')}
              >
                AI AGENT
              </div>
              <div 
                className={`visualizer-sidebar__tab ${activeTab === 'chat' ? 'visualizer-sidebar__tab--active' : 'visualizer-sidebar__tab--inactive'}`}
                onClick={() => setActiveTab('chat')}
              >
                AI CHAT
                {activeTab === 'chat' && (
                  <div className="visualizer-sidebar__active-bubble">
                    You
                  </div>
                )}
              </div>
            </div>

            <div className="visualizer-sidebar__stack">
              <span className="visualizer-sidebar__stack-title">STACK</span>
              <div className="visualizer-sidebar__stack-grid">
                <div className="visualizer-sidebar__stack-item">{Icons.openai()}</div>
                <div className="visualizer-sidebar__stack-item">{Icons.anthropic()}</div>
                <div className="visualizer-sidebar__stack-item">{Icons.gemini()}</div>
                <div className="visualizer-sidebar__stack-item">{Icons.llama()}</div>
                <div className="visualizer-sidebar__stack-item">{Icons.mistral()}</div>
                <div className="visualizer-sidebar__stack-item">{Icons.plus()}</div>
              </div>
            </div>
          </div>

          {/* Canvas Area */}
          <div className="visualizer-canvas">
            {/* Toolbar */}
            <div className="visualizer-toolbar">
              <div className="visualizer-toolbar__left">
                <button className="visualizer-toolbar__btn" aria-label="Undo">{Icons.undo()}</button>
                <button className="visualizer-toolbar__btn" aria-label="Redo">{Icons.redo()}</button>
              </div>
              <div className="visualizer-toolbar__right">
                <div className="visualizer-toolbar__mode">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '12px', height: '12px' }}>
                    <polygon points="12 2 2 22 22 22 12 2" />
                  </svg>
                  <span>AGENT MODE</span>
                </div>
                <div className="visualizer-toolbar__mode">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '12px', height: '12px' }}>
                    <path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3" />
                  </svg>
                  <span>UNTITLED</span>
                </div>
              </div>
            </div>

            {/* SVG Connection Lines */}
            <svg className="visualizer-canvas__lines-svg">
              {/* Top Row horizontal line triggers */}
              <line x1="15%" y1="28%" x2="31%" y2="28%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="31%" y1="28%" x2="47%" y2="28%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="47%" y1="28%" x2="63%" y2="28%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="63%" y1="28%" x2="79%" y2="28%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />

              {/* Loop from Edit Fields1 output to Telegram input (Dashed) */}
              <line x1="79%" y1="28%" x2="92%" y2="28%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="5,5" />
              <line x1="92%" y1="28%" x2="92%" y2="78%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="5,5" />
              <line x1="92%" y1="78%" x2="40%" y2="78%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="5,5" />
              <line x1="40%" y1="78%" x2="40%" y2="65%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="5,5" />
              <line x1="40%" y1="65%" x2="47%" y2="65%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="5,5" />

              {/* Vertical branch from top row line to Telegram (Dashed) */}
              <line x1="39%" y1="28%" x2="39%" y2="65%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="5,5" />
              <line x1="39%" y1="65%" x2="47%" y2="65%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" strokeDasharray="5,5" />

              {/* Bottom Row line triggers */}
              <line x1="47%" y1="65%" x2="63%" y2="65%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="63%" y1="65%" x2="79%" y2="65%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
              <line x1="79%" y1="65%" x2="88%" y2="65%" stroke="rgba(255,255,255,0.15)" strokeWidth="1.5" />
            </svg>

            {/* Connection item pills on lines */}
            <div className="connection-label" style={{ left: '23%', top: '28%' }}>1 item</div>
            <div className="connection-label" style={{ left: '39%', top: '28%' }}>1 item</div>
            <div className="connection-label" style={{ left: '55%', top: '28%' }}>1 item</div>
            <div className="connection-label" style={{ left: '71%', top: '28%' }}>1 item</div>

            {/* Nodes layer */}
            <div className="visualizer-canvas__nodes">
              {/* TOP ROW */}
              {/* Node 1: Email Trigger */}
              <div className="visualizer-node" style={{ left: '15%', top: '28%' }}>
                <div className="visualizer-node__circle">
                  {Icons.envelope()}
                  <span className="visualizer-node__pin visualizer-node__pin--right"></span>
                </div>
                <div className="visualizer-node__details">
                  <span className="visualizer-node__title">Email Trigger</span>
                  <span className="visualizer-node__subtitle">(IMAP)</span>
                </div>
              </div>

              {/* Node 2: Edit Fields */}
              <div className="visualizer-node" style={{ left: '31%', top: '28%' }}>
                <div className="visualizer-node__circle">
                  {Icons.pencil()}
                  <span className="visualizer-node__pin visualizer-node__pin--left"></span>
                  <span className="visualizer-node__pin visualizer-node__pin--right"></span>
                </div>
                <div className="visualizer-node__details">
                  <span className="visualizer-node__title">Edit Fields</span>
                  <span className="visualizer-node__subtitle">Manual</span>
                </div>
              </div>

              {/* Node 3: AI Agent (Highlighted tools agent block) */}
              <div className="visualizer-node" style={{ left: '47%', top: '28%' }}>
                <div className="visualizer-node__agent-pill">
                  <div className="visualizer-node__agent-icon">
                    {Icons.lightning()}
                  </div>
                  <div className="visualizer-node__agent-text">
                    <span className="visualizer-node__agent-name">AI Agent</span>
                    <span className="visualizer-node__agent-type">Tools Agent</span>
                  </div>
                  <span className="visualizer-node__pin visualizer-node__pin--left"></span>
                  <span className="visualizer-node__pin visualizer-node__pin--right"></span>
                </div>
              </div>

              {/* Node 4: Code */}
              <div className="visualizer-node" style={{ left: '63%', top: '28%' }}>
                <div className="visualizer-node__circle">
                  {Icons.code()}
                  <span className="visualizer-node__pin visualizer-node__pin--left"></span>
                  <span className="visualizer-node__pin visualizer-node__pin--right"></span>
                </div>
                <div className="visualizer-node__details">
                  <span className="visualizer-node__title">Code</span>
                </div>
              </div>

              {/* Node 5: Edit Fields1 */}
              <div className="visualizer-node" style={{ left: '79%', top: '28%' }}>
                <div className="visualizer-node__circle">
                  {Icons.pencil()}
                  <span className="visualizer-node__pin visualizer-node__pin--left"></span>
                  <span className="visualizer-node__pin visualizer-node__pin--right"></span>
                </div>
                <div className="visualizer-node__details">
                  <span className="visualizer-node__title">Edit Fields1</span>
                  <span className="visualizer-node__subtitle">Manual</span>
                </div>
              </div>

              {/* BOTTOM ROW */}
              {/* Node 6: Telegram */}
              <div className="visualizer-node" style={{ left: '47%', top: '65%' }}>
                <div className="visualizer-node__circle">
                  {Icons.telegram()}
                  <span className="visualizer-node__pin visualizer-node__pin--left"></span>
                  <span className="visualizer-node__pin visualizer-node__pin--right"></span>
                </div>
                <div className="visualizer-node__details">
                  <span className="visualizer-node__title">Telegram</span>
                  <span className="visualizer-node__subtitle">sendAndWait message</span>
                </div>
              </div>

              {/* Node 7: If */}
              <div className="visualizer-node" style={{ left: '63%', top: '65%' }}>
                <div className="visualizer-node__circle">
                  {Icons.fork()}
                  <span className="visualizer-node__pin visualizer-node__pin--left"></span>
                  <span className="visualizer-node__pin visualizer-node__pin--right"></span>
                </div>
                <div className="visualizer-node__details">
                  <span className="visualizer-node__title">If</span>
                </div>
              </div>

              {/* Node 8: Send Email */}
              <div className="visualizer-node" style={{ left: '79%', top: '65%' }}>
                <div className="visualizer-node__circle">
                  {Icons.telegram()}
                  <span className="visualizer-node__pin visualizer-node__pin--left"></span>
                  <span className="visualizer-node__pin visualizer-node__pin--right"></span>
                </div>
                <div className="visualizer-node__details">
                  <span className="visualizer-node__title">Send Email</span>
                  <span className="visualizer-node__subtitle">Send</span>
                </div>
              </div>

              {/* Node 9: Plus */}
              <div className="visualizer-node" style={{ left: '88%', top: '65%' }}>
                <div className="visualizer-node__plus">
                  {Icons.plus()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisualizerSection;
