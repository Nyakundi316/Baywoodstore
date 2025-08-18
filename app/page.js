import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Trendy from './components/Trendy'
import Newarrivals from './components/Newarrivals'
export default function page() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Trendy />
      <Newarrivals />
    </div>
  )
}
