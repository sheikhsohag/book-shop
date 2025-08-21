import React, { useState } from 'react'
import {categories} from '../../Constant/Category'
import { div } from 'framer-motion/client'
import Category from './Category'
import HomeProducts from './HomeProducts'



function CategoryWithProducts() {

  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);

  const onHandleCategorySelect = (id: number) => {
    setSelectedCategory(id);
  }

  return (
    <div className="flex flex-col h-auto font-sans pt-20 w-[90%] mx-auto">
      <h1 className='text-3xl font-bold mb-4'>Categories & Books</h1>
       <div className='flex flex-row overflow-x-scroll gap-4'>
           {
            categories.map((cat) => (
              <div onClick={() => onHandleCategorySelect(cat.id)} key={cat.id} className={`bg-gray-100 w-40 p-4 mb-4 rounded border-b-2 border-gray-100 ${selectedCategory == cat.id ? 'border-red-400' : ''}`}> 
                <Category cat={cat} />
              </div>
            ))
           }
       </div>
       <div className='w-full mx-auto py-6'>
            {
              <HomeProducts cat_id={selectedCategory} />
            }
       </div>
    </div>
  )
}

export default CategoryWithProducts