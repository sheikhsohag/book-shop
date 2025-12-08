'use client'
import React from 'react'
import About from './Component/BookShop/About'
import Hero from './Component/Hero/Hero'
import Categories from './Component/BookShop/Categories'
import CategoryWithProducts from './Component/BookShop/CategoryWithProducts'

function Page() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Hero Section */}
      <Hero/>
      
      {/* Categories Section */}
      <Categories/>

      {/* Category with products */}
      <CategoryWithProducts/>

      {/* About Section */}
      <About/>
    </div>
  )
}

export default Page