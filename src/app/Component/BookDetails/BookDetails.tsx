'use client'
import { books } from "@/app/Constant/TotalBook";
import { addToCartByNumber } from "@/redux/CartSlice";
import React, { useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart, FaHeart, FaShare, FaChevronLeft, FaChevronRight, FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import Link from "next/link";

interface BookDetailsProps {
  id: number;
}

function BookDetails({ id }: BookDetailsProps) {
  const dispatch = useDispatch();
  const bookId = Number(id);
  const book = books.find((b) => b.id === bookId);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!book) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <div className="text-6xl text-red-500 mb-4">❌</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Book Not Found</h2>
          <p className="text-gray-600">Sorry, the book you're looking for doesn't exist.</p>
          <button 
            className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => window.history.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  // Function to render star ratings
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }

    return stars;
  };

  // Handle quantity changes
  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  // Handle add to cart
  const handleAddToCart = () => {
    dispatch(addToCartByNumber({ id: book.id, quantity }));
    setAddedToCart(true);
    
    // Reset the added to cart message after 3 seconds
    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  // Handle wishlist
  const handleAddToWishlist = () => {
    alert(`Added "${book.name}" to your wishlist!`);
  };

  // Handle share
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: book.name,
          text: `Check out "${book.name}" by ${book.author}`,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Sharing failed', error);
      }
    } else {
      alert('Web Share API not supported in your browser');
    }
  };

  // Sample images for gallery (in a real app, this would come from book data)
  const sampleImages = [
    book.image,
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
  ];

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === sampleImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? sampleImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Continue Shopping Button */}
      <div className="mb-6">
        <Link 
          href="/shop"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <FaArrowLeft className="mr-2" />
          Continue Shopping
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Book Image Gallery */}
        <div className="md:w-2/5">
          <div className="relative">
            <img
              src={sampleImages[currentImageIndex]}
              alt={book.name}
              className="w-full h-96 object-contain rounded-lg border"
            />
            {sampleImages.length > 1 && (
              <>
                <button 
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                  <FaChevronLeft />
                </button>
                <button 
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
                >
                  <FaChevronRight />
                </button>
              </>
            )}
            <div className="flex mt-4 gap-2">
              {sampleImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${book.name} view ${index + 1}`}
                  className={`w-16 h-16 object-cover cursor-pointer rounded border-2 ${currentImageIndex === index ? 'border-blue-500' : 'border-gray-200'}`}
                  onClick={() => setCurrentImageIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Book Details */}
        <div className="md:w-3/5">
          <h1 className="text-3xl font-bold text-gray-900">{book.name}</h1>
          <p className="text-gray-600 mt-2 text-lg">by {book.author}</p>
          
          <div className="flex items-center mt-4">
            <div className="flex">
              {renderRating(book.rating || 4.5)}
            </div>
            <span className="ml-2 text-gray-600">({book.reviews || 124} reviews)</span>
          </div>

          <div className="mt-6">
            <p className="text-3xl font-bold text-gray-900">${book.price.toFixed(2)}</p>
            <p className={`mt-1 ${book.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {book.stock > 0 ? `In Stock (${book.stock} available)` : 'Out of Stock'}
            </p>
          </div>

          <div className="mt-6">
            <p className="text-gray-700">{book.description || "No description available."}</p>
          </div>

          <div className="mt-8 flex items-center">
            <span className="mr-4 font-medium">Quantity:</span>
            <div className="flex items-center border rounded-md">
              <button 
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                onClick={() => handleQuantityChange(-1)}
              >
                -
              </button>
              <span className="px-4 py-1">{quantity}</span>
              <button 
                className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Added to Cart Success Message */}
          {addedToCart && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
              ✅ Added {quantity} {quantity > 1 ? 'copies' : 'copy'} of "{book.name}" to your cart!
            </div>
          )}

          <div className="mt-8 flex flex-wrap gap-4">
            <button 
              className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex-1 min-w-[200px]"
              onClick={handleAddToCart}
              disabled={book.stock === 0}
            >
              <FaShoppingCart />
              Add to Cart
            </button>
            
            <button 
              className="flex items-center justify-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex-1 min-w-[200px]"
              onClick={handleAddToWishlist}
            >
              <FaHeart />
              Add to Wishlist
            </button>
            
            <button 
              className="flex items-center justify-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors flex-1 min-w-[200px]"
              onClick={handleShare}
            >
              <FaShare />
              Share
            </button>
          </div>

          {/* Quick Action Buttons */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link 
              href="/cart" 
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm"
            >
              View Cart
            </Link>
            <Link 
              href="/checkout" 
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm"
            >
              Checkout Now
            </Link>
          </div>

          <div className="mt-8 border-t pt-6">
            <div className="flex border-b">
              <button 
                className={`px-4 py-2 font-medium ${activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button 
                className={`px-4 py-2 font-medium ${activeTab === 'details' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('details')}
              >
                Details
              </button>
              <button 
                className={`px-4 py-2 font-medium ${activeTab === 'reviews' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
            </div>

            <div className="mt-4">
              {activeTab === 'description' && (
                <div>
                  <p className="text-gray-700">{book.description || "No description available."}</p>
                  <p className="mt-4 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                </div>
              )}
              
              {activeTab === 'details' && (
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium">ISBN</p>
                    <p className="text-gray-600">978-3-16-148410-0</p>
                  </div>
                  <div>
                    <p className="font-medium">Publisher</p>
                    <p className="text-gray-600">Penguin Random House</p>
                  </div>
                  <div>
                    <p className="font-medium">Publication Date</p>
                    <p className="text-gray-600">January 15, 2023</p>
                  </div>
                  <div>
                    <p className="font-medium">Pages</p>
                    <p className="text-gray-600">352</p>
                  </div>
                  <div>
                    <p className="font-medium">Language</p>
                    <p className="text-gray-600">English</p>
                  </div>
                  <div>
                    <p className="font-medium">Category</p>
                    <p className="text-gray-600">{book.category}</p>
                  </div>
                </div>
              )}
              
              {activeTab === 'reviews' && (
                <div>
                  <div className="border-b pb-4 mb-4">
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {renderRating(4.5)}
                      </div>
                      <span className="text-gray-600">4.5 out of 5</span>
                    </div>
                    <p className="text-gray-600 mt-2">Based on 124 reviews</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between">
                        <p className="font-medium">John Doe</p>
                        <div className="flex">
                          {renderRating(5)}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">Posted on January 15, 2023</p>
                      <p className="mt-2">This book is amazing! I couldn't put it down. The characters are well-developed and the plot is engaging.</p>
                    </div>
                    
                    <div>
                      <div className="flex justify-between">
                        <p className="font-medium">Jane Smith</p>
                        <div className="flex">
                          {renderRating(4)}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">Posted on February 3, 2023</p>
                      <p className="mt-2">Great read overall. The ending felt a bit rushed, but I enjoyed it nonetheless.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Related Books Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">You Might Also Like</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {books.filter(b => b.id !== book.id).slice(0, 4).map(relatedBook => (
            <Link 
              key={relatedBook.id} 
              href={`/shop/book/${relatedBook.id}`}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <img 
                src={relatedBook.image} 
                alt={relatedBook.name}
                className="w-full h-40 object-contain mb-3"
              />
              <h3 className="font-semibold text-gray-900 line-clamp-1">{relatedBook.name}</h3>
              <p className="text-sm text-gray-600">by {relatedBook.author}</p>
              <p className="text-green-600 font-bold mt-2">${relatedBook.price.toFixed(2)}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookDetails;