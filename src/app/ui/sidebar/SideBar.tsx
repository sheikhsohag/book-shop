import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'

function SideBar() {
  return (
    <div>
        <Link href={'/'}>Logo</Link>
        <div>

          <div>
            <Navbar/>
          </div>
            
            
            <form>
                <button>Sign Out</button>
            </form>
        </div>
    </div>
  )
}

export default SideBar