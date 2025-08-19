'use client'
import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion'
import About from './Component/BookStore/About'
import Category from './Component/BookStore/Categories'
import Hero from './Component/Hero/Hero'
import Categories from './Component/BookStore/Categories'

function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navbar */}
    
      {/* Hero Section */}
      <Hero/>
      {/* Categories Section */}

      <Categories/>


      {/* About Section */}
      <About/>
       
      {/* Footer */}
      
    </div>
  )
}

export default Page