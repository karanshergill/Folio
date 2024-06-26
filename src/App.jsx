import React, { useRef } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Tech } from './components/Tech';
import { Footer } from './components/Footer';
import eventsData from './data/eventsData';
import './App.css'
import './index.css'

function App() {

  const timelineRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <>
      <Navigation refs={{timelineRef, servicesRef, portfolioRef, footerRef}} />
      <Hero />
      <div ref={timelineRef}><Timeline events={eventsData} /></div>
      <div ref={servicesRef}><Services /></div>
      <div ref={portfolioRef}><Portfolio /></div>
      <Tech />
      <div ref={footerRef}><Footer /></div>
    </>
  )
}

export default App
