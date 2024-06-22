import React from 'react'
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Timeline } from './components/TimeLine';
import './App.css'
import './index.css'

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <Timeline />
    </>
  )
}

export default App
