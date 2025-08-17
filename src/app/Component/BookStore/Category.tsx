import { motion } from 'framer-motion'
import React from 'react'

function Category() {
  return (
    <div>
              <section id="categories" className="w-full py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-12">Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
          {['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'].map(
            (cat, i) => (
              <motion.div
                key={i}
                className="bg-white shadow-md rounded-lg p-8 text-xl font-semibold"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {cat}
              </motion.div>
            )
          )}
        </div>
      </section>
    </div>
  )
}

export default Category