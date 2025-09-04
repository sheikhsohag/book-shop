'use client';
import React, { useState } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import SideBar from '../ui/sidebar/SideBar'

function Layout({ children }: any) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="pt-16 relative flex">
      {/* Sidebar for Desktop ONLY */}
      <div className="hidden md:flex min-h-[calc(100vh-136px)] w-1/5 fixed left-0 top-16">
        <SideBar />
      </div>

      {/* Mobile Sidebar Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black/50 z-30 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar ONLY */}
      <div
        className={`fixed top-0 left-0 h-full w-full sm:w-2/5 z-40 transform transition-transform duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="pt-16">
          <SideBar />
        </div>
      </div>

      {/* Toggle Button (Mobile Only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-1/2 left-0 z-50 -translate-y-1/2 bg-gray-400 text-white px-1 py-2 rounded-r-lg shadow-lg"
      >
        {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
      </button>

      {/* Main Content */}
      <div className="flex-1 md:ml-[20%]">{children}</div>
    </div>
  )
}

export default Layout
