import React from 'react'
import {categories} from '../../Constant/Category'
import { div } from 'framer-motion/client'
import Category from './Category'


function CategoryWithProducts() {
  return (
    <div className="flex flex-col h-auto font-sans pt-20 w-[90%] mx-auto">
      <h1 className='text-3xl font-bold mb-4'>Categories & Books</h1>
       <div className='flex flex-row justify-center overflow-x-scroll gap-4'>
           {
            categories.map((cat) => (
              <div key={cat.id} className='bg-gray-100 w-40 p-4 mb-4 rounded'> 
                <Category cat={cat} />
              </div>
            ))
           }
       </div>
    </div>
  )
}

export default CategoryWithProducts