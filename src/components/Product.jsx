import React from 'react'
import { Link } from 'react-router-dom';


function Product({ product }) {
  const { title, price, image, rating } = product

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
      <Link to={`/products/${product.id}`}>
        <button className="bg-blue-600 w-full py-2 rounded-md hover:font-bold hover:bg-blue-800 hover:text-white hover:scale-95 duration-300">
          More Info
        </button>
      </Link>
    </div>

  )
}

export default Product
