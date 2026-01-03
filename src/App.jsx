import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="section-divider"></div>
        <Features />
        <div className="section-divider"></div>
        <HowItWorks />
        <div className="section-divider"></div>
        <Testimonials />
        <div className="section-divider"></div>
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;