import { motion } from 'framer-motion'
import React from 'react'
import {categories} from '../../Constant/Category'
import Category from './Category'

function Categories() {
  return (
    <div>
      <section id="categories" className="w-full py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-12">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8 w-[90%] mx-auto px-6">
          {categories.map((cat) => (
            <motion.div
              key={cat.id}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col h-[400px]" // Fixed height here
              initial={{ opacity: 0, scale: 0, y: 100 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: cat.id * 0.05 }}
            >
              <Category cat={cat} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Categories