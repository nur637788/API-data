import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from "../components/Redux/CartSlice"

function Product({ product }) {
  const { title, price, image, rating } = product
  const dispatch = useDispatch();

  return (
    <div className="p-5 rounded-md shadow-blue-900 shadow-sm hover:shadow-red-950 bg-blue-200 flex flex-col justify-between h-full">
      <img
        className="w-full h-40 object-contain m-auto hover:scale-110 duration-300 hover:animate-pulse"
        src={image} loading='lazy'
        alt={title}
      />
      <h1 className="py-3 text-md  font-semibold">{title}</h1>
      <div className="flex justify-between pb-3">
        <h3><b>Price: </b>{price}</h3>
        <h3><b>Rating: </b>{rating.rate} ⭐</h3>
      </div>

      {/* Button always at bottom */}
      <div className='flex justify-between gap-1'>
        <button onClick={() => dispatch(addToCart(product))} className='bg-gray-900 py-2 px-4 rounded-full hover:scale-105 cursor-pointer transition duration-300'>🛒</button>
        <Link to={`/products/${product.id}`}>
          <button className="bg-blue-600 py-2 px-4 rounded-full hover:bg-blue-800 hover:text-white hover:scale-95 duration-300 cursor-pointer">
            More Info
          </button>
        </Link>
      </div>
    </div>

  )
}

export default Product
