import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className=''>
      <nav className='fixed z-10 top-0 left-0 right-0 flex justify-center gap-3 md:gap-5 py-3 bg-gray-300/90 text-black shadow'>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/products'}>Products</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/login'} className='bg-teal-600 hover:bg-teal-800 hover:scale-95 duration-300 px-4 py-1 rounded text-teal-50'>Login</Link>

      </nav>
    </div>
  )
}

export default Navbar
