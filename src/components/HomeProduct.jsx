import React from 'react'
import { Link } from 'react-router-dom'

function HomeProduct({ products = {} }) {
  const { title, thumbnail, id, } = products;

  if (!title || !thumbnail) return null;

  return (
    <div >
      <div className=' rounded-xl shadow-lg bg-blue-100 hover:bg-blue-200 hover:shadow-blue-600 duration-300'>
        <img
          className='w-full h-40 object-cover rounded-md hover:scale-105 duration-300'
          src={thumbnail} loading='lazy'
          alt={title}
        />

        <div className='p-4'>
          <h1 className='text-center py-3 text-md font-semibold text-gray-800'>
            {title}
          </h1>

          <Link to={`/home/${id}`}>
            <button className='bg-blue-700 w-full py-2 rounded-md text-white font-medium hover:bg-blue-900 hover:scale-95 duration-300 cursor-pointer'>
              More Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeProduct;
