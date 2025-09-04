'use client'
import Image from 'next/image'
import React from 'react'

import { motion } from 'framer-motion'
import About from './Component/BookShop/About'
import Category from './Component/BookShop/Categories'
import Hero from './Component/Hero/Hero'
import Categories from './Component/BookShop/Categories'
import CategoryWithProducts from './Component/BookShop/CategoryWithProducts'

function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navbar */}
    
      {/* Hero Section */}
      <Hero/>
      {/* Categories Section */}

      <Categories/>

      {/* category with products */}

      <CategoryWithProducts/>


      {/* About Section */}
      <About/>
       
      {/* Footer */}
      
    </div>
  )
}

export default Page