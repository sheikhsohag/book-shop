import React from 'react'
import {SideBarConstant} from './SideBarConstant'
import SideBarCart from './SideBarCart';


function Navbar() {
  return (
    <div>
       {
         SideBarConstant.map((item, index)=>{
           return (
             <div key={index}>
               <SideBarCart/>
             </div>
           );
         })
       }
    </div>
  )
}

export default Navbar