import React, { useEffect, useState } from 'react'


const AllProducts = () => {
      const [products, setProducts] = useState([]);
    
      useEffect(() => {
        fetch("db.json")
          .then((res) => res.json())
          .then((data) => setProducts(data)) // ✅ এখানে ডেটা state এ রাখো
          .catch((err) => console.error("Error fetching products:", err));
      }, []);
    const { title, thumbnail} = products
 
  return (
     <div className=' p-5 rounded-md  shadow-blue-900 shadow-2xl hover:shadow-red-950 hover:animate- bg-blue-200'>
              <img className='w-full h-40 m-auto hover:animate-pulse' src={thumbnail} alt="" />
              <h1 className='text-center py-3 text-md'>{title}</h1>
              <div className='flex justify-between pb-3'>
              </div>
              <Link to={`/home/${products.id}`}>
              <button className='bg-blue-700 w-full py-2 rounded-md hover:font-bold hover:bg-blue-900'>More Info</button>
              </Link>
        </div>
  )
}

export default AllProducts;
