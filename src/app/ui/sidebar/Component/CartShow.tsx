import React from 'react'

interface CartShowProps {
    cart: { id: number; quantity: number }[];
}
function CartShow(cart: CartShowProps) {
    console.log(cart);
    const totalQuantity = cart.cart.reduce((total, item) => total + item.quantity, 0);
    return (
        <div>
            <span className="w-6 h-6 rounded-full bg-gray-600 text-white text-xs flex justify-center items-center p-2 ml-1">
                {totalQuantity}
            </span>
        </div>
    )
}

export default CartShow