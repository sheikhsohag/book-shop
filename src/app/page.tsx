'use client'
import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion'
import About from './Component/BookStore/About'
import Category from './Component/BookStore/Category'
import Hero from './Component/Hero/Hero'

function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navbar */}
    
      {/* Hero Section */}
      <Hero/>
      {/* Categories Section */}

      <Category/>


      {/* About Section */}
      <About/>
       
      {/* Footer */}
      
    </div>
  )
}

export default Page