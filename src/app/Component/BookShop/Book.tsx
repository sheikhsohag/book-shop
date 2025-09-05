'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux'
import { addToCart } from '@/redux/CartSlice'
import Link from 'next/link'

interface BookProps {
    book: {
        id: number,
        name: string,
        image: string,
        author: string,
        price: number,
        category: string
    }
}

function Book({ book }: BookProps) {

    const dispatch = useDispatch();

    const onhadleCart = (id:number)=>{
        dispatch(addToCart({id}));
    }

    return (
        <div className='w-full bg-gray-100 rounded shadow-xl hover:shadow-xl transition duration-300'>
            <motion.div
                className="py-4 p-4 rounded"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate = {{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.2}}
                whileHover={{ scale: 1.02 }}
            >
                <div className='w-full h-48 mb-3'>
                    <img className='w-full h-full object-cover rounded' src={book.image} alt={book.name} />
                </div>

                <div className='flex w-full' >
                    <div className='w-3/5'>
                        <h1 className='font-bold text-sm mb-1 line-clamp-1 hover:text-gray-600'>{book.name}</h1>
                        <h1 className='text-gray-500 hover:text-gray-400 text-xs mb-1'>{book.author}</h1> 
                        <h1 className='text-gray-600 hover:text-gray-500 font-semibold'>${book.price.toFixed(2)}</h1>
                    </div>

                    <div className='w-2/5 flex justify-end items-center gap-2 md:gap-3 lg:gap-2'>
                        <button className='p-2 rounded' onClick={()=>onhadleCart(book.id)}>
                            <FontAwesomeIcon icon={faCartShopping} className='text-2xl hover:scale-120 duration-300 cursor-pointer' />
                        </button>
                        <Link href={`/shop/book/${book.id}`} className='flex items-center bg-black h-8 sm:h-9 md:h-10 lg:h-8 xl:h-9 2xl:h-10 3xl:h-8 4xl:h-9 text-white py-1 px-2 rounded text-xs hover:bg-gray-600 cursor-pointer hover:scale-110 duration-300'>
                            Details
                        </Link>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Book