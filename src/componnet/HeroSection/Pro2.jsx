import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const products = [
  { id: 1, title: 'Jordan Spizike Low', description: "Men's shoes", price: 160, rating: 4, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f014625e-1a1d-4944-8395-46a07841a794/JORDAN+SPIZIKE+LOW.png' },
  { id: 2, title: 'Air Jordan 6 Retro', description: "Men's shoes", price: 200, rating: 5, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/362cced6-125a-4354-a6e0-f56e747ce4d6/AIR+JORDAN+6+RETRO.png' },
  { id: 3, title: 'Jumpman MVP', description: "Men's shoes", price: 165, rating: 3, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/77c98012-1e1a-4d57-8a69-162af8874e58/JORDAN+MVP.png' },
  { id: 1, title: 'Jordan Spizike Low', description: "Men's shoes", price: 160, rating: 4, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f014625e-1a1d-4944-8395-46a07841a794/JORDAN+SPIZIKE+LOW.png' },

];

const ProCard = () => {
  const [filterPrice, setFilterPrice] = useState('all');
  const [filterCategory, setFilterCategory] = useState('all');

  const handlePriceChange = (event) => setFilterPrice(event.target.value);
  const handleCategoryChange = (event) => setFilterCategory(event.target.value);

  const filteredProducts = products.filter((product) => {
    const priceCondition =
      filterPrice === 'all' ||
      (filterPrice === 'under200' && product.price <= 200) ||
      (filterPrice === 'above200' && product.price > 200);

    const categoryCondition = filterCategory === 'all' || product.description.includes(filterCategory);

    return priceCondition && categoryCondition;
  });

  return (
    <div className="w-screen p-8 sm:p-16 dark:bg-gray-900 ">
      <div className="flex justify-between items-center mb-8">
        <div className="text-lg text-center leading-tight font-medium dark:text-gray-100">
          <h1 className="text-4xl font-semibold tracking-wide sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
           New Arrivals
          </h1>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap sm:flex-col md:flex-row lg:flex-row space-y-4 sm:space-y-4 md:space-y-0 lg:space-x-4 items-center justify-center">
          <select
            className="bg-gray-800 text-white rounded-lg p-2 w-80% sm:w-full md:w-auto lg:w-auto"
            onChange={handlePriceChange}
            value={filterPrice}
          >
            <option value="all">All Prices</option>
            <option value="under200">Under $200</option>
            <option value="above200">Above $200</option>
          </select>

          <select
            className="bg-gray-800 text-white rounded-lg p-2 w-80% sm:w-full md:w-auto lg:w-auto"
            onChange={handleCategoryChange}
            value={filterCategory}
          >
            <option value="all">All Categories</option>
            <option value="Men's shoes">Men's shoes</option>
          </select>
        </div>
      </div>

      <NavLink to={'/detail'}>
        <div className="mx-auto w-fit grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative group bg-gray-200 dark:bg-gray-800 h-[440px] shadow-xl rounded-3xl overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                className="w-full h-full rounded-3xl transition-all duration-300 ease-in-out"
                src={product.imageUrl}
                alt={product.title}
              />
              <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent rounded-b-3xl p-6 flex flex-col justify-end opacity-100">
                <h2 className="text-white text-2xl font-semibold mt-6">{product.title}</h2>
                <p className="text-gray-300 text-sm">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-2xl text-white font-bold">${product.price}</p>
                  <button className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-2 px-6 rounded-lg text-sm font-medium transform transition-all duration-300 hover:scale-110 hover:from-red-700 hover:to-orange-600">
                    View Detail
                  </button>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black rounded-3xl opacity-50"></div>
            </div>
          ))}
        </div>
      </NavLink>
    </div>
  );
};

export default ProCard;
