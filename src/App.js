import React from 'react';
import StatsSection from './components/StatsSection';
import GlobeSection from './components/GlobeSection';
import CardsSection from './components/CardsSection';
import Footer from './components/Footer';
import MainSection from './components/MainSection'; // Import the new component
import './App.css';

function App() {
  return (
    <div className="App">
      <MainSection /> {/* Add the new MainSection component */}
      <StatsSection />
      <GlobeSection />
      <CardsSection />
      <Footer />
    </div>
  );
}

export default App;
