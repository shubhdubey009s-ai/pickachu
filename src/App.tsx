import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Courses from './components/Courses';
import Reviews from './components/Reviews';
import Testimonials from './components/Testimonials';
import AthletePage from './components/AthletePage';
import Footer from './components/Footer';
import BackgroundShapes from './components/BackgroundShapes';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <BackgroundShapes />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Programs />
        <Courses />
        <Reviews />
        <AthletePage />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default App;