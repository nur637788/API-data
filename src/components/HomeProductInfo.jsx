import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const HomeProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === parseInt(id));
        setProduct(found);
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) {
    return <p className="text-center text-red-600 py-10">Loading...</p>;
  }

  const { thumbnail, title, price, description, rating, category, stock, brand } = product;

  return (
    <div className='mt-20  bg-white p-5 min-h-screen'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        {/* image */}
        <div className=''>
          <img className='m-auto bg-gray-100 rounded-xl shadow-2xl h-96 w-full hover:animate-bounce ' src={thumbnail} loading="lazy" alt={title} />
        </div>
        {/* Title */}
        <div className='text-center bg-gray-100 rounded-xl shadow-2xl px-5 py-5'>
          <div className='flex justify-between items-center gap-5 m-auto md:text-2xl'>
            <h1 className='font-bold'>Name: </h1>
            <h1>{title}</h1>
          </div><hr />
          {/* Rating */}
          <div className='flex justify-between items-center gap-5 m-auto md:text-2xl'>
            <h1 className='font-bold'>Rating: </h1>
            <h1>{rating} ⭐</h1>
          </div><hr />
          {/* Rating count */}
          <div className='flex justify-between items-center gap-5 m-auto md:text-2xl'>
            <h1 className='font-bold'>Rating Count: </h1>
            <h1>{rating}</h1>
          </div><hr />
          {/* category */}
          <div className='flex justify-between items-center gap-5 m-auto md:text-2xl'>
            <h1 className='font-bold'>Category: </h1>
            <h1>{category}</h1>
          </div><hr />
          {/* stock */}
          <div className='flex justify-between items-center gap-5 m-auto md:text-2xl'>
            <h1 className='font-bold'>Stock: </h1>
            <h1>{stock}</h1>
          </div><hr />
          {/* brand */}
          <div className='flex justify-between items-center gap-5 m-auto md:text-2xl'>
            <h1 className='font-bold'>Brand: </h1>
            <h1>{brand}</h1>
          </div><hr />
          {/* price */}
          <div className='flex justify-between items-center gap-5 m-auto md:text-2xl'>
            <h1 className='font-bold'>Price: </h1>
            <h1>{price}$</h1>
          </div><hr />
          {/* Shop now button */}
          <div className='py-5'>
            <button className='px-10 py-2 bg-blue-700 rounded-md hover:font-bold hover:bg-blue-900 hover:text-white transition duration-300'>Shop Now</button>
          </div>

        </div>
      </div>
      {/* description */}
      <div className='max-w-[700px] m-auto py-10'>
        <b>Description:</b>
        <p>{description}</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-7'>
        <div className='bg-gray-50 p-4 rounded-md hover:-translate-y-2 hover:scale-95 hover:shadow-sm shadow-blue-300 duration-300'>
          <div className='flex gap-3 justify-between'>
            <div className='flex gap-3 items-center'>
              <img className='w-12 h-12 rounded-full ring-2 ring-cyan-100' src="https://picsum.photos/seed/18/200/200" alt="" />
              <div>
                <h3 className='font-bold'>John deo</h3>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <p className='font-light'>Just now</p>
          </div>
          <p className='mt-2'> Perspiciatis culpa adipisci eum voluptatibus, sed aut. Pariatur, animi ea.</p>
        </div>

        <div className='bg-gray-50 p-4 rounded-md hover:-translate-y-2 hover:scale-95 hover:shadow-sm shadow-blue-300 duration-300'>
          <div className='flex gap-3 justify-between'>
            <div className='flex gap-3 items-center'>
              <img className='w-12 h-12 rounded-full ring-2 ring-cyan-100' src="https://imgv3.fotor.com/images/slider-image/A-clear-image-of-a-woman-wearing-red-sharpened-by-Fotors-image-sharpener.jpg" alt="" />
              <div>
                <h3 className='font-bold'>Natasa </h3>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <p className='font-light'>3d ago</p>
          </div>
          <p className='mt-2'> Perspiciatis culpa adipisci eum voluptatibus, sed aut. Pariatur, animi ea.</p>
        </div>

        <div className='bg-gray-50 p-4 rounded-md hover:-translate-y-2 hover:scale-95 hover:shadow-sm shadow-blue-300 duration-300'>
          <div className='flex gap-3 justify-between'>
            <div className='flex gap-3 items-center'>
              <img className='w-12 h-12 rounded-full ring-2 ring-cyan-100' src="https://cdn.pixabay.com/photo/2023/08/14/08/43/ai-generated-8189352_1280.png" alt="" />
              <div>
                <h3 className='font-bold'>Wilaum Jack</h3>
                <p>⭐⭐⭐⭐</p>
              </div>
            </div>
            <p className='font-light'>06 Nov 2025</p>
          </div>
          <p className='mt-2'>Similique dolores nisi accusantium. Quis, totam.</p>
        </div>

        <div className='bg-gray-50 p-4 rounded-md hover:-translate-y-2 hover:scale-95 hover:shadow-sm shadow-blue-300 duration-300'>
          <div className='flex gap-3 justify-between'>
            <div className='flex gap-3 items-center'>
              <img className='w-12 h-12 rounded-full ring-2 ring-cyan-100' src="https://static01.nyt.com/images/2025/05/05/multimedia/05dc-trump-pope-lzjb/05dc-trump-pope-lzjb-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="" />
              <div>
                <h3 className='font-bold'>Trump</h3>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <p className='font-light'>30 Oct 2025</p>
          </div>
          <p className='mt-2'> Itaque corrupti in excepturi nesciunt consequatur modi harum accusamus.</p>
        </div>

        <div className='bg-gray-50 p-4 rounded-md hover:-translate-y-2 hover:scale-95 hover:shadow-sm shadow-blue-300 duration-300'>
          <div className='flex gap-3 justify-between'>
            <div className='flex gap-3 items-center'>
              <img className='w-12 h-12 rounded-full ring-2 ring-cyan-100' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaq-11LVyA6PrUfO-qP5gJyv8x0B637A13mVgac6XulCroSakJNHQVrVjKZgEk9JG3ayc&usqp=CAU" alt="" />
              <div>
                <h3 className='font-bold'>Will leem</h3>
                <p>⭐⭐⭐</p>
              </div>
            </div>
            <p className='font-light'>27 Oct 2025</p>
          </div>
          <p className='mt-2'>Laborum voluptatum perspiciatis cupiditate! Atque, itaque recusandae!</p>
        </div>

        <div className='bg-gray-50 p-4 rounded-md hover:-translate-y-2 hover:scale-95 hover:shadow-sm shadow-blue-300 duration-300'>
          <div className='flex gap-3 justify-between'>
            <div className='flex gap-3 items-center'>
              <img className='w-12 h-12 rounded-full ring-2 ring-cyan-100' src="https://images.media.io/imgsharpen/home/swiper-img1-after.png" alt="" />
              <div>
                <h3 className='font-bold'>Jhumor Rehman</h3>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <p className='font-light'>20 Oct 2025 </p>
          </div>
          <p className='mt-2'>Tempore incidunt sit natus, perspiciatis dolor atque ut voluptas voluptatibus.</p>
        </div>

      </div>

      <div className=" mt-5">
        <Link to="/" className="bg-pink-600 hover:bg-pink-700 rounded px-5 py-1  underline">
          ← Back
        </Link>
      </div>

    </div>
  )
}

export default HomeProductInfo
