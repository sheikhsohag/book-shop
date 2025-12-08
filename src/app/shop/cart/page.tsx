"use client";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store"; // Updated import
import {
  clearCart,
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "@/redux/CartSlice";

import { ShoppingCart, Trash2, Plus, Minus, ArrowLeft, CreditCard } from "lucide-react";
import { books } from "@/app/Constant/TotalBook";
import Link from "next/link";
import Image from "next/image";

interface CartItem {
  id: number;
  quantity: number;
}

function Page() {
  const cart: CartItem[] = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => {
    const book = books.find((b) => b.id === item.id);
    return sum + (book ? book.price * item.quantity : 0);
  }, 0);

  // Calculate total items
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Handle checkout
  const handleCheckout = () => {
    setIsCheckoutLoading(true);
    // Simulate API call
    setTimeout(() => {
      alert("Order placed successfully!");
      dispatch(clearCart());
      setIsCheckoutLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Link href={"/shop"} className="flex items-center text-blue-600 hover:text-blue-800 mr-4">
            <ArrowLeft size={20} className="mr-1" />
            Continue Shopping
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 flex items-center">
            <ShoppingCart className="mr-3" />
            Your Shopping Cart
          </h1>
          {cart.length > 0 && (
            <span className="ml-auto bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
              {totalItems} {totalItems === 1 ? 'item' : 'items'}
            </span>
          )}
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <ShoppingCart size={64} className="mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Looks like you haven&apos;t added any books to your cart yet.</p>
            <Link 
              href="/shop"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Browse Books
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-semibold">Cart Items</h2>
              <button
                onClick={() => dispatch(clearCart())}
                className="flex items-center text-red-600 hover:text-red-800 transition duration-150"
              >
                <Trash2 size={18} className="mr-1" />
                Clear Cart
              </button>
            </div>
            
            <div className="divide-y divide-gray-100">
              {cart.map((item: CartItem) => {
                const book = books.find((b) => b.id === item.id);
                if (!book) return null;

                return (
                  <div key={item.id} className="p-6 flex flex-col sm:flex-row items-start sm:items-center">
                    <div className="w-20 h-24 relative mb-4 sm:mb-0 sm:mr-6">
                      <Image
                        src={book.image}
                        alt={book.name}
                        fill
                        sizes="80px"
                        className="object-contain rounded-lg"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0 mr-4">
                      <h3 className="text-lg font-semibold text-gray-900 truncate">{book.name}</h3>
                      <p className="text-lg font-bold text-blue-700 mt-1">${book.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3 mt-4 sm:mt-0">
                      <div className="flex items-center border border-gray-300 rounded-lg">
                        <button
                          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-l-lg"
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-3 py-1 bg-white">{item.quantity}</span>
                        <button
                          className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-r-lg"
                          onClick={() => dispatch(increaseQuantity(item.id))}
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg"
                        aria-label="Remove item"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                    
                    <div className="ml-auto text-right mt-4 sm:mt-0">
                      <p className="text-lg font-semibold">${(book.price * item.quantity).toFixed(2)}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Subtotal</span>
                <span className="font-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-700">Shipping</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold pt-4 border-t border-gray-300">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              
              <button
                onClick={handleCheckout}
                disabled={isCheckoutLoading}
                className="mt-6 w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200 flex items-center justify-center disabled:opacity-75"
              >
                {isCheckoutLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard size={20} className="mr-2" />
                    Proceed to Checkout
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;