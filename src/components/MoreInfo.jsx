import React, { useEffect, useState } from 'react'
import { Link, Links, useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { addToCart } from "../components/Redux/CartSlice"

const MoreInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) {
    return <p className="text-center text-red-600 py-10">Loading...</p>;
  }
  const { image, title, price, description, rate, rating, category } = product;
  return (
    <div className='mt-5  bg-white p-5'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 items-center p-5 '>
        <div className=''>
          <img className='m-auto h-96 hover:scale-105 duration-300 ' src={image} loading='lazy' alt={title} />
        </div>
        <div className='text-center bg-gray-100 rounded-xl shadow-sm hover:shadow-xl hover:scale-105 duration-300 px-5 py-5 '>
          <div className='flex justify-between items-center gap-5 m-auto md:text-2xl'>
            <h1 className='font-bold'>Name: </h1>
            <h1>{title}</h1>
          </div><hr />

          <div className='flex justify-between items-center gap-5 m-auto md:text-2xl'>
            <h1 className='font-bold'>Price: </h1>
            <h1>{price}$</h1>
          </div><hr />

          <div className='flex justify-between items-center gap-5 m-auto md:text-2xl'>
            <h1 className='font-bold'>Rating: </h1>
            <h1>{rate} ⭐</h1>
          </div><hr />

          <div className='flex justify-between items-center gap-5 m-auto md:text-2xl'>
            <h1 className='font-bold'>Rating Count: </h1>
            <h1>{rating.count}</h1>
          </div><hr />

          <div className='flex justify-between items-center gap-5 m-auto md:text-2xl'>
            <h1 className='font-bold'>Category: </h1>
            <h1>{category}</h1>
          </div><hr />

          <div className='flex justify-between items-center gap-5 m-auto md:text-2xl'>
            <h1 className='font-bold'>Colors: </h1>
            <h1>Available</h1>
          </div><hr />

          <div className='flex justify-between items-center gap-5 m-auto md:text-2xl'>
            <h1 className='font-bold'>Size: </h1>
            <h1>Available</h1>
          </div><hr />

          <div className='flex gap-5 justify-center pt-5'>
            <button onClick={() => dispatch(addToCart(product))} className='px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 hover:scale-105 transition duration-300 cursor-pointer'>Add to Cart</button>
            <Link to="/shopnow" className='px-4 py-2 bg-pink-700 rounded text-white hover:bg-pink-900 hover:scale-105 transition duration-300 '>Shop Now</Link>
          </div>

        </div>
      </div>
      <div className='max-w-[700px] m-auto py-10'>
        <b>Description:</b>
        <p>{description}</p>
      </div>
      <div className=" mt-5">
        <Link to="/products" className="bg-pink-600 hover:bg-pink-700 rounded px-5 py-1  underline">
          ← Back
        </Link>
      </div>
    </div>
  )
}

export default MoreInfo
