import React, { useEffect, useState } from "react";
import Product from "../components/Product";

function Products() {
  
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false)


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch(() => setError(true));
  }, []);
  if (error == true) {
    return (
      <div className='text-center mt-10 py-10 min-h-screen'>
        <h2 className='text-xl font-bold text-red-500'>Error!</h2>
        <p>Something went wrong!!!</p>
      </div>
    )
  }

  return (
    <div>
      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-x-5 gap-y-8 mx-5 md:mx-10 my-10 min-h-screen">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Products;
