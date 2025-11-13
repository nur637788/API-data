import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Link, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'

function App() {
  const cart = useSelector((state) => state.cart.items);


  return (
    <div>
      <Navbar></Navbar>
      <div className='min-h-screen'>
        <Link to="/cartpage" className="fixed z-1 top-12 right-0 ">
          <button className="bg-amber-200 hover:text-red-700 px-4 py-2 rounded-full cursor-pointer">🛒<span className='text-red-500 text-sm fixed z-50 top-13 right-2 font-semibold'>{cart.length}</span></button>
        </Link>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default App
