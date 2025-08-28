import React from 'react'

function Footer() {
    return (
        <div className='w-full'>
            <footer className="w-full bg-gray-900 text-white py-6 text-center">
                <p>© {new Date().getFullYear()} MySite. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default Footer