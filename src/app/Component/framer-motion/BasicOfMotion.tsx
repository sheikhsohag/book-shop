'use client';
import React from 'react'
import { motion } from 'framer-motion'

function BasicOfMotion() {
  return (
    <motion.div 
    initial={{scale: 0}}
    animate={{scale: 1}}
    transition={{duration: 0.5}}
    className="w-screen h-screen  flex justify-center items-center">
        
      <div className='w-120 h-80 bg-green-900 rounded flex justify-center items-center'>
           <motion.div 
           initial={{scale: 0}}
           animate={{scale: 1}}
           transition={{duration: 0.5}}
           className='w-40 h-40 bg-red-900 rounded-full'>

           </motion.div>
      </div>
    </motion.div>
  )
}

export default BasicOfMotion