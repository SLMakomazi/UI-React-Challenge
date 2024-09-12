// src/App.js
import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/Hero';
import CardCarousel from './components/CardCarousel';
import Footer from './components/footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <CardCarousel />
      <Footer />
    </div>
  );
};

export default App;
