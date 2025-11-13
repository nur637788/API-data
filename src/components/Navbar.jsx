import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='fixed z-10 top-0 left-0 right-0 py-3 bg-gray-300/90 text-black shadow'>
      <div className='flex gap-5 justify-between px-5 md:px-10'>
        <h2 className='font-black text-green-500 cursor-pointer'><span className='text-pink-700'>API</span> DATA</h2>
        <nav className='hidden md:block space-x-3 '>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/products'}>Products</Link>
          <Link to={'/contact'}>Contact</Link>
          <Link to={'/login'} className='bg-teal-500 hover:bg-teal-600 hover:scale-95 duration-300 px-5 py-2 rounded text-teal-50'>Login</Link>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-12 left-0 w-full bg-gray-400 flex flex-col items-start px-5 py-2 md:hidden space-y-2">
            <Link to={'/'} onClick={toggleMenu}>Home</Link>
            <Link to={'/about'} onClick={toggleMenu}>About</Link>
            <Link to={'/products'} onClick={toggleMenu}>Products</Link>
            <Link to={'/contact'} onClick={toggleMenu}>Contact</Link>
            <Link to={'/login'} onClick={toggleMenu} className='bg-teal-600 hover:bg-teal-800 hover:scale-95 duration-300 px-4 py-1 rounded text-teal-50'>Login</Link>
          </ul>
        )}

      </div>
    </div>
  )
}

export default Navbar
