import React from 'react';
import Hero from '../components/Hero';
import Benefits from '../components/Benefits';
import DemoCards from '../components/DemoCards';
import Process from '../components/Process';
import Pricing from '../components/Pricing';
import ContactCTA from '../components/ContactCTA';

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Benefits />
      <DemoCards />
      <Process />
      <Pricing />
      <ContactCTA />
    </div>
  );
}

export default Home;
