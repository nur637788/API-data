import React from 'react'
import { Link } from 'react-router-dom'
import { addToCart } from "../components/Redux/CartSlice"
import { useDispatch } from 'react-redux';

function HomeProduct({ products = {} }) {
  const { title, thumbnail, id, } = products;
  const dispatch = useDispatch();

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
          <div className='flex gap-5 justify-between'>
            <button onClick={() => dispatch(addToCart(products))} className='bg-amber-50 w-10 h-10 rounded-full hover:scale-105 transition duration-300 cursor-pointer'>🛒</button>
            <Link to={`/home/${id}`}>
              <button className='bg-blue-700 px-4 py-2 rounded-md text-white font-medium hover:bg-blue-900 hover:scale-95 duration-300 cursor-pointer'>
                More Info
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeProduct;
