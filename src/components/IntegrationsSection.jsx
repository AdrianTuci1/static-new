import React from 'react';

function IntegrationsSection() {
  return (
    <section className="integrations">
      <div className="integrations__container">
        <div className="integrations__content">
          <div className="integrations__icons">
            <div className="integrations__icon-circle"></div>
            <div className="integrations__icon-circle"></div>
            <div className="integrations__icon-circle"></div>
            <div className="integrations__icon-circle"></div>
          </div>
          <h2 className="integrations__title">
            Integrate with the world's most powerful neural engines. Seamlessly connect your custom data to GPT-4, Claude 3, and Perplexity for unmatched precision.
          </h2>
          <p className="integrations__desc">
            Unlock the full potential of LLM-native workflows. Our infrastructure ensures low latency and high-fidelity output for every request.
          </p>
        </div>
      </div>
    </section>
  );
}

export default IntegrationsSection;
