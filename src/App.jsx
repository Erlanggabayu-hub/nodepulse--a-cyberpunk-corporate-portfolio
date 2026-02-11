import React from 'react'
import Aurora from './components/Aurora'
import Hero from './components/Hero'
import BentoGrid from './components/BentoGrid'
import Marquee from './components/Marquee'
import Timeline from './components/Timeline'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen bg-void">
      <Aurora />
      <div className="relative z-10">
        <Hero />
        <BentoGrid />
        <Marquee />
        <Timeline />
        <Footer />
      </div>
    </div>
  )
}