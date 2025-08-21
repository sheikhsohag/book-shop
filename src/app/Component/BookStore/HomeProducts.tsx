import React from 'react'
import { CategoryWiseBooks } from '@/app/Constant/Books'
import Book from './Book';

interface CategoryId {
  cat_id: number
}

function HomeProducts({cat_id}: CategoryId) {

  const books = CategoryWiseBooks[cat_id].products;

  

  return (
    <div>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8'>
            {
              books.map((book) => (
                <div key={book.id}>
                  <Book book={book}/>
                </div>
              ))
            } 
        </div>
    </div>
  )
}

export default HomeProducts