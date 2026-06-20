import React from 'react';

function StatisticsSection() {
  return (
    <section className="statistics">
      <div className="statistics__container">
        {/* Row 1: label + title */}
        <div className="statistics__row1">
          <div className="section-label">
            <span className="section-label__icon">+</span>
            <span className="section-label__text">Performance</span>
          </div>
          <h2 className="statistics__title">Real results that speak for themselves.</h2>
        </div>

        {/* Row 2: 4 boxes - first empty, then 3 stat cards */}
        <div className="statistics__row2">
          <div className="stat-card stat-card--empty"></div>
          <div className="stat-card">
            <div className="stat-card__corner">
              <span></span>
              <span></span>
            </div>
            <span className="stat-card__number">87%</span>
            <span className="stat-card__desc">Average efficiency increase reported by enterprise teams within the first quarter.</span>
          </div>
          <div className="stat-card">
            <div className="stat-card__corner">
              <span></span>
              <span></span>
            </div>
            <span className="stat-card__number">3x</span>
            <span className="stat-card__desc">Faster deployment cycles achieved through automated workflow orchestration.</span>
          </div>
          <div className="stat-card">
            <div className="stat-card__corner">
              <span></span>
              <span></span>
            </div>
            <span className="stat-card__number">99.9%</span>
            <span className="stat-card__desc">Platform uptime guaranteed with enterprise-grade infrastructure and support.</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatisticsSection;
