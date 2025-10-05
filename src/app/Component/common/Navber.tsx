'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className=''>
      <nav className="fixed top-0 left-0 w-full bg-black/50 text-white z-20 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* Desktop Navbar */}
          <div className="hidden sm:flex justify-between items-center">
            <h1 className="text-2xl font-bold">MySite</h1>
            <ul className="flex gap-6 text-lg">
              <li className="hover:text-gray-300 cursor-pointer">Home</li>
              <Link href={'/shop'} className="hover:text-gray-300 cursor-pointer">Shop</Link>
              <li className="hover:text-gray-300 cursor-pointer">About</li>
              <li className="hover:text-gray-300 cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Mobile Navbar */}
          <div className="sm:hidden flex justify-between items-center">
            <h1 className="text-2xl font-bold">MySite</h1>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-2xl focus:outline-none"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="sm:hidden mt-4 pb-4">
              <ul className="flex flex-col gap-4 text-lg">
                <li className="hover:text-gray-300 cursor-pointer py-2">Home</li>
                <Link href={'/shop'} className="hover:text-gray-300 cursor-pointer py-2">Shop</Link>
                <li className="hover:text-gray-300 cursor-pointer py-2">About</li>
                <li className="hover:text-gray-300 cursor-pointer py-2">Contact</li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Navbar