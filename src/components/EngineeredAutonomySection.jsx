import React, { useState } from 'react';
import './EngineeredAutonomySection.css';

// SVG Icons for Tabs
const BinocularsIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="autonomy-tab__icon">
    <path d="M10 10h4M12 4v6M8 4h8" />
    <path d="M4 14V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5" />
    <circle cx="6.5" cy="15.5" r="2.5" />
    <circle cx="17.5" cy="15.5" r="2.5" />
    <path d="M9 15.5c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5" />
  </svg>
);

const AnalysisIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="autonomy-tab__icon">
    <path d="M3 3v18h18" />
    <path d="M18 9l-5 5-3-3-4 4" />
    <circle cx="18" cy="9" r="1.5" fill="currentColor" />
    <circle cx="13" cy="14" r="1.5" fill="currentColor" />
    <circle cx="10" cy="11" r="1.5" fill="currentColor" />
    <circle cx="6" cy="15" r="1.5" fill="currentColor" />
  </svg>
);

const TrainingIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="autonomy-tab__icon">
    <circle cx="12" cy="7" r="2.5" />
    <path d="M5 20c0-3.5 3-5 7-5s7 1.5 7 5" />
    <path d="M12 9.5v5M9.5 12h5" />
  </svg>
);

const DeployIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="autonomy-tab__icon">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10Z" />
    <path d="M8 8h8M8 12h5" />
  </svg>
);

// Check Icon for Status Indicator
const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="autonomy-info__check-svg">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

function EngineeredAutonomySection() {
  const [activeTab, setActiveTab] = useState('discovery');

  const tabs = [
    { id: 'discovery', label: 'Discovery', icon: <BinocularsIcon /> },
    { id: 'analysis', label: 'Analysis', icon: <AnalysisIcon /> },
    { id: 'training', label: 'Training', icon: <TrainingIcon /> },
    { id: 'deploy', label: 'Deploy', icon: <DeployIcon /> },
  ];

  // Visual component for active tab (Left Panel)
  const renderVisual = () => {
    switch (activeTab) {
      case 'discovery':
        return (
          <div className="autonomy-visual__wrapper discovery-visual">
            <div className="mock-window">
              <div className="mock-window__header">
                <div className="mock-window__dots">
                  <span className="mock-window__dot"></span>
                  <span className="mock-window__dot"></span>
                  <span className="mock-window__dot"></span>
                </div>
                <div className="mock-window__search">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mock-window__search-icon">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
              </div>
              <div className="mock-window__body mock-window__body--radar">
                <svg viewBox="0 0 300 200" className="radar-svg">
                  {/* Concentric rings */}
                  <circle cx="150" cy="180" r="140" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                  <circle cx="150" cy="180" r="100" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
                  <circle cx="150" cy="180" r="60" fill="none" stroke="rgba(255, 255, 255, 0.15)" strokeWidth="1" />
                  
                  {/* Axis lines */}
                  <line x1="150" y1="30" x2="150" y2="180" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
                  <line x1="10" y1="180" x2="290" y2="180" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" />
                  <line x1="51" y1="81" x2="150" y2="180" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
                  <line x1="249" y1="81" x2="150" y2="180" stroke="rgba(255, 255, 255, 0.04)" strokeWidth="1" />
                  
                  {/* Targets (Diamonds) */}
                  <g className="radar-target radar-target--1">
                    <rect x="75" y="100" width="6" height="6" fill="#ffffff" transform="rotate(45 78 103)" className="radar-diamond" />
                  </g>
                  <g className="radar-target radar-target--2">
                    <rect x="210" y="70" width="6" height="6" fill="#ffffff" transform="rotate(45 213 73)" className="radar-diamond" />
                  </g>
                  <g className="radar-target radar-target--3">
                    <rect x="165" y="125" width="5" height="5" fill="#ffffff" transform="rotate(45 167.5 127.5)" className="radar-diamond" />
                  </g>
                  
                  {/* Radar sweep cone and line */}
                  <g className="radar-sweep">
                    <path d="M150,180 L115,45 A140,140 0 0,1 185,45 Z" fill="url(#radar-grad)" />
                    <line x1="150" y1="180" x2="185" y2="45" stroke="#ffffff" strokeWidth="1.5" />
                  </g>

                  <defs>
                    <linearGradient id="radar-grad" x1="0" y1="1" x2="1" y2="0">
                      <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
                      <stop offset="100%" stopColor="rgba(255, 255, 255, 0.15)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        );
      case 'analysis':
        return (
          <div className="autonomy-visual__wrapper analysis-visual">
            <div className="mock-window">
              <div className="mock-window__header">
                <div className="mock-window__dots">
                  <span className="mock-window__dot"></span>
                  <span className="mock-window__dot"></span>
                  <span className="mock-window__dot"></span>
                </div>
                <div className="mock-window__search">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mock-window__search-icon">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
              </div>
              <div className="mock-window__body">
                <svg viewBox="0 0 300 160" className="autonomy-visual__svg">
                  <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
                    <line x1="30" y1="0" x2="30" y2="140" />
                    <line x1="100" y1="0" x2="100" y2="140" />
                    <line x1="170" y1="0" x2="170" y2="140" />
                    <line x1="240" y1="0" x2="240" y2="140" />
                    <line x1="30" y1="40" x2="300" y2="40" />
                    <line x1="30" y1="80" x2="300" y2="80" />
                    <line x1="30" y1="120" x2="300" y2="120" />
                  </g>
                  <text x="30" y="152" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="var(--font-mono)">0ms</text>
                  <text x="100" y="152" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="var(--font-mono)">100ms</text>
                  <text x="170" y="152" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="var(--font-mono)">200ms</text>
                  <text x="240" y="152" fill="rgba(255,255,255,0.3)" fontSize="7" fontFamily="var(--font-mono)">300ms</text>

                  <text x="35" y="25" fill="rgba(255,255,255,0.8)" fontSize="8" fontFamily="var(--font-mono)">SEMANTIC_ROUTING</text>
                  <rect x="35" y="30" width="50" height="6" rx="1.5" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
                  
                  <text x="35" y="65" fill="rgba(255,255,255,0.8)" fontSize="8" fontFamily="var(--font-mono)">CONTEXT_RETRIEVAL</text>
                  <rect x="85" y="70" width="90" height="6" rx="1.5" fill="rgba(255,255,255,0.3)" stroke="#FFFFFF" strokeWidth="0.5" />
                  
                  <text x="35" y="105" fill="rgba(255,255,255,0.8)" fontSize="8" fontFamily="var(--font-mono)">LLM_GEN_STREAM</text>
                  <rect x="175" y="110" width="100" height="6" rx="1.5" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
                  
                  <line x1="160" y1="10" x2="160" y2="135" stroke="rgba(255,255,255,0.2)" strokeDasharray="2 2" />
                  <circle cx="160" cy="73" r="3.5" fill="#FFFFFF" />
                </svg>
              </div>
            </div>
          </div>
        );
      case 'training':
        return (
          <div className="autonomy-visual__wrapper training-visual">
            <div className="mock-window">
              <div className="mock-window__header">
                <div className="mock-window__dots">
                  <span className="mock-window__dot"></span>
                  <span className="mock-window__dot"></span>
                  <span className="mock-window__dot"></span>
                </div>
                <div className="mock-window__search">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mock-window__search-icon">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
              </div>
              <div className="mock-window__body">
                <svg viewBox="0 0 300 160" className="autonomy-visual__svg">
                  <defs>
                    <linearGradient id="chart-grad-panel" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="rgba(255,255,255,0.12)" />
                      <stop offset="100%" stopColor="rgba(255,255,255,0)" />
                    </linearGradient>
                  </defs>
                  <g stroke="rgba(255,255,255,0.03)" strokeWidth="1">
                    <line x1="40" y1="20" x2="40" y2="130" />
                    <line x1="100" y1="20" x2="100" y2="130" />
                    <line x1="160" y1="20" x2="160" y2="130" />
                    <line x1="220" y1="20" x2="220" y2="130" />
                    <line x1="280" y1="20" x2="280" y2="130" />
                    <line x1="40" y1="130" x2="280" y2="130" />
                    <line x1="40" y1="102" x2="280" y2="102" />
                    <line x1="40" y1="75" x2="280" y2="75" />
                    <line x1="40" y1="47" x2="280" y2="47" />
                    <line x1="40" y1="20" x2="280" y2="20" />
                  </g>
                  
                  <path d="M 40 35 Q 90 115 160 123 T 280 127" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" />
                  <path d="M 40 115 Q 90 60 160 30 T 280 22" fill="none" stroke="#FFFFFF" strokeWidth="2" />
                  <path d="M 40 115 Q 90 60 160 30 T 280 22 L 280 130 L 40 130 Z" fill="url(#chart-grad-panel)" />

                  <circle cx="160" cy="30" r="3.5" fill="#FFFFFF" />
                  <text x="160" y="22" fill="#FFFFFF" fontSize="8" fontFamily="var(--font-mono)" textAnchor="middle">ACC: 98.4%</text>
                </svg>
              </div>
            </div>
          </div>
        );
      case 'deploy':
      default:
        return (
          <div className="autonomy-visual__wrapper deploy-visual">
            <div className="mock-window">
              <div className="mock-window__header">
                <div className="mock-window__dots">
                  <span className="mock-window__dot"></span>
                  <span className="mock-window__dot"></span>
                  <span className="mock-window__dot"></span>
                </div>
                <div className="mock-window__search">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mock-window__search-icon">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
              </div>
              <div className="mock-window__body">
                <div className="terminal-line"><span className="terminal-prompt">$</span> agy deploy --prod</div>
                <div className="terminal-line terminal-line--dim">[info] packaging agent container...</div>
                <div className="terminal-line terminal-line--dim">[info] pushing core architecture to 24 edge regions...</div>
                <div className="terminal-line terminal-line--success">✔ deployment successful! (4.2s)</div>
                <div className="terminal-line terminal-line--link">url: https://armory.sh/api/v1/agents/active</div>
              </div>
            </div>
          </div>
        );
    }
  };

  // Content for the right info panel based on active tab
  const getTabInfo = () => {
    switch (activeTab) {
      case 'discovery':
        return {
          desc: 'Identify latent patterns in unstructured data. Our discovery engine crawls through your silos to map internal knowledge graphs.',
          subdesc: 'Locate missing documentation and sync silos.',
          badge: 'Knowledge Map'
        };
      case 'analysis':
        return {
          desc: 'Analyze execution paths, bottlenecks, and costs. Simulated workloads help you dry-run your agents under realistic constraints.',
          subdesc: 'Optimize token count and latency budgets.',
          badge: 'Performance Metrics'
        };
      case 'training':
        return {
          desc: 'Align agent behavior with fine-tuned parameters. Validate policies against historical test sets to avoid performance regressions.',
          subdesc: 'Ensure alignment with core business guardrails.',
          badge: 'Evaluation Runs'
        };
      case 'deploy':
      default:
        return {
          desc: 'Push your agents to production with a single click. Our secure edge infrastructure ensures sub-50ms latency globally.',
          subdesc: 'Scale to global regions with SOC-2 grade isolation.',
          badge: 'Live Edge Instance'
        };
    }
  };

  const currentInfo = getTabInfo();

  return (
    <section className="autonomy-section">
      {/* Background Grid Lines (matching the 4-column layout of the site) */}
      <div className="autonomy-section__grid">
        <div className="autonomy-section__grid-line autonomy-section__grid-line--1"></div>
        <div className="autonomy-section__grid-line autonomy-section__grid-line--2"></div>
        <div className="autonomy-section__grid-line autonomy-section__grid-line--3"></div>
      </div>

      <div className="autonomy-section__container">
        {/* Section Header */}
        <div className="autonomy-header">
          <div className="autonomy-header__content">
            <div className="autonomy-badge">
              <span className="autonomy-badge__slashes">///</span>
              <span className="autonomy-badge__text">PRODUCT FEATURES</span>
            </div>
            <h2 className="autonomy-title">Engineered for autonomy</h2>
            <p className="autonomy-desc">
              Go beyond simple chat interfaces. Armory provides the underlying architecture to build, test, and scale enterprise-grade agents.
            </p>
          </div>
        </div>

        {/* Dynamic Tabs row spanning across columns */}
        <div className="autonomy-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`autonomy-tab ${activeTab === tab.id ? 'autonomy-tab--active' : ''}`}
            >
              <div className="autonomy-tab__content">
                {tab.icon}
                <span className="autonomy-tab__label">{tab.label}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Tab Panel */}
        <div className="autonomy-panel">
          {/* Left panel: Visual representation of active tab (grayscaled landscape behind browser mock) */}
          <div className="autonomy-panel__visual">
            <div className="autonomy-panel__visual-overlay"></div>
            {renderVisual()}
          </div>

          {/* Right panel: Information description & connected capsule status badge */}
          <div className="autonomy-panel__info">
            <div className="autonomy-info__container">
              <p className="autonomy-info__desc">
                {currentInfo.desc}
              </p>
              <p className="autonomy-info__subdesc">
                {currentInfo.subdesc}
              </p>
              
              {/* Connected Circle-Line-Capsule row aligned to the 2-column layout */}
              <div className="autonomy-info__status-row">
                <div className="autonomy-info__status-left">
                  <div className="autonomy-info__check-circle">
                    <CheckIcon />
                  </div>
                  <div className="autonomy-info__status-line"></div>
                </div>
                <div className="autonomy-info__status-right">
                  <div className="autonomy-info__status-badge">
                    {currentInfo.badge}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EngineeredAutonomySection;
