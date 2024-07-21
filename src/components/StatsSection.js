import React from 'react';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-card">
        <h2>No. of Node Operators</h2>
        <p>2000</p>
        <button className="add-button">+</button>
      </div>
      <div className="stats-card">
        <h2>Data Transferred in TB <span className="subtitle">(last 30 days)</span></h2>
        <p>12,000</p>
        <button className="add-button">+</button>
      </div>
    </section>
  );
};

export default StatsSection;