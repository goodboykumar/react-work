import React from 'react';

const MainSection = () => {
  const handleButtonClick = () => {
    window.location.href = 'https://github.com/goodboykumar';
  };
  return (
    <section className="main-section">
      <h1>EMPOWERING THE DIGITAL ERA:</h1>
      <h1>DECENTRALIZING ENTERTAINMENT</h1>
      <h2>Join the world's first DePIN: Revolutionizing Content Streaming with faster, Safer</h2>
      <h2>and Cheaper Access</h2>
      <button className="coming-soon-btn" onClick={handleButtonClick}>
          Coming Soon <i className="fas fa-arrow-right"></i>
          <span className="tooltip">Visit my GitHub link</span>
        </button>
      <div className="images">
        <img src="https://picsum.photos/200/300" alt="Random" />
        <img src="https://picsum.photos/200/300" alt="Random" />
        <img src="https://picsum.photos/200/300" alt="Random" />
        <img src="https://picsum.photos/200/300" alt="Random" />
        <img src="https://picsum.photos/200/300" alt="Random" />
        <img src="https://picsum.photos/200/300" alt="Random" />
      </div>
    </section>
  );
};

export default MainSection;
