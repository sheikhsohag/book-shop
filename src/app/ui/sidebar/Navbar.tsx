import React from 'react'
import {SideBarConstant} from './SideBarConstant'
import SideBarCart from './SideBarCart';


function Navbar() {
  return (
    <div className='w-full text-center'>
       <div className=''>
          {
         SideBarConstant.map((item, index)=>{
           return (
             <div key={index}>
               <SideBarCart item={item}/>
             </div>
           );
         })
       }
       </div>
    </div>
  )
}

export default Navbar