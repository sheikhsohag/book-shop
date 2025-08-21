import React from 'react'
import { motion } from 'framer-motion'

interface BookProps {
    book: {
        id: number,
        name: string,
        image: string,
        author: string,
        price: number
    }
}

function Book({ book }: BookProps) {
    return (
        <div className='w-full bg-gray-100 rounded shadow-xl hover:shadow-xl transition duration-300'>
            <motion.div
                className="py-4 p-4 rounded"
                initial={{ opacity: 0, scale: 0, y: 100 }}
                animate = {{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.1}}
                whileHover={{ scale: 1.05 }}
            >
                <div className='w-full h-[70%]'>
                    <img className='w-full h-55 object-cover rounded' src={book.image} alt={book.name} />
                </div>

                <div className='w-full h-[30%] flex flex-col' >
                    <h1 className='font-bold pt-1'>{book.name}</h1>
                    <h1 className='text-gray-500 text-sm'>{book.author}</h1> 
                    <h1 className='text-gray-500 text-sm'>{book.price}</h1>
                </div>
            </motion.div>

        </div>
    )
}

export default Book