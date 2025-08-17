import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Background from '../../../../public/home/backgound.jpg'

function Hero() {
  return (
    <div>
         <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute inset-0"
            initial={{ x: '0%' }}
            animate={{ x: '-50%' }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          >
            <div className="relative w-[150vw] h-full">
              <Image
                src={Background}
                alt="background"
                fill
                sizes="150vw"
                style={{ objectFit: 'cover' }}
                priority
              />
            </div>
          </motion.div>
        </div>

        {/* Animated Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-5xl font-bold z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse' }}
          >
            Welcome to My Website
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Hero