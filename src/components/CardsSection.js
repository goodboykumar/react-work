import React from 'react';

const CardsSection = () => {
  return (
    <section className="cards-section">
      <div className="card content-nodes dotted-bottom">
        <h3>Content Nodes</h3>
        <p>Content Nodes, Earn rewards for supplying their GPU, Storage and bandwidth for dCDN</p>
        <button className="deploy-btn">Deploy <i className="fas fa-arrow-right arrow-white-circle"></i></button>
      </div>
      <div className="card orchestrators dotted-bottom">
        <h3>Orchestrators</h3>
        <p>Orchestrators will be responsible for connecting the client with the content node for seamless streaming. Traffic distribution will be based on multiple factors like job type, performance</p>
        <span className="coming-soon">Coming soon</span>
      </div>
      <div className="card validators dotted-bottom">
        <h3>Validators</h3>
        <p>Validators will be responsible for validating the execution of dCDN Network. Validators will earn rewards from Staking and earn a cut on the executions validated.</p>
        <span className="coming-soon">Coming soon</span>
      </div>
    </section>
  );
};

export default CardsSection;