import React from 'react'
import { books } from '../Constant/TotalBook'
import Book from '../Component/BookStore/Book'

function page() {
  console.log(books);
  return (
    <div className='pt-16'>
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
    </div>
  )
}

export default page