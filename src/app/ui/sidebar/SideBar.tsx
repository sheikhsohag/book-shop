import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'
import BrandLogo from '@/app/Constant/BrandLogo'

function SideBar() {
  return (
    <div className='w-full p-0 t-0 md:max-h-screen min-h-[calc(100vh-136px)]'>
     
      <div>
        <div className='flex items-center py-4 pl-30 sm:pl-8 md:pl-12'> 
          <Link href={'/'}>
            <BrandLogo />
          </Link>
        </div>

        <div className='min-h-[calc(100vh-250px)] w-full'>
          <Navbar />
        </div>


        <form className='pl-6 sm:pl-6 md:pl-6'>
          <button>Sign Out</button>
        </form>
      </div>
    </div>
  )
}

export default SideBar