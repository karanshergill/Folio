import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Services } from './components/Services';
import { Tech } from './components/Tech';
import { Portfolio } from './components/Portfolio';
import eventsData from './data/eventsData';
import './App.css'
import './index.css'

function App() {
  return (
    <>
      {/* <Navigation /> */}
      {/* <Hero /> */}
      {/* <Timeline events={eventsData} /> */}
      {/* <Services /> */}
      <Portfolio />
      {/* <Tech /> */}
    </>
  )
}

export default App
