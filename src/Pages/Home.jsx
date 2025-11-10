import React, { useEffect, useState } from 'react';
import HomeProduct from '../components/HomeProduct';
import Hero from '../components/Hero';

function Home() {
  const [products, setProducts] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [category, setCategory] = useState('All');
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => { setProducts(data); setFilterData(data) })
      .catch((error) => {
        setError(true); console.log(error);
      });
  }, []);

  if (error) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold text-red-500">Error!!!</h2>
        <p>Something Went Wrong!</p>
      </div>
    );
  }

  const handleCategory = (ca) => {
    setCategory(ca);
    if (ca === 'All') {
      setFilterData(products);
    } else {
      const filtered = products.filter((p) => p.category.toLowerCase() === ca.toLowerCase());
      setFilterData(filtered);
    }
  };

  return (
    <div id='up' className='mt-12 bg-white'>
      {/* Hero Section */}
      <Hero />

      {/* Category Buttons */}
      <div className="flex justify-center gap-3 mt-4">
        <select
          value={category}
          onChange={(e) => handleCategory(e.target.value)}
          className="px-3 py-1 rounded-md border border-blue-700 w-full mx-5 md:mx-10">
          <option value="All">All</option>
          <option value="Category 1">Category 1</option>
          <option value="Category 2">Category 2</option>
          <option value="Category 3">Category 3</option>
          <option value="Category 4">Category 4</option>
          <option value="Category 4">Category 5</option>
          <option value="Category 4">Category 6</option>
        </select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-5 md:px-10 py-10 min-h-screen">
        {filterData.map((product) => (
          <HomeProduct key={product.id} products={product} />
        ))}
      </div>

      <a className='bg-amber-500/50 hover:bg-amber-300 px-3 py-1 rounded fixed z-50 bottom-0 right-1 text-2xl' href="#up">↑</a>
    </div>
  );
}

export default Home;
