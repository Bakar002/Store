// // import React, { useEffect, useState } from 'react';
// // import { FaStar, FaRegStar } from 'react-icons/fa'; // Import React Icons
// // import { Link } from 'react-router-dom'; // Import Link for navigation

// // const ProCard = () => {
// //   const [products, setProducts] = useState([]); // State to store fetched products
// //   const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
// //   const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category

// //   useEffect(() => {
// //     // Fetch data from the API 
// //     const fetchProducts = async () => {
// //       try {
// //         const response = await fetch('https://fakestoreapi.com/products');
// //         const data = await response.json();
// //         setProducts(data); // Set the fetched data into state
// //         setFilteredProducts(data); // Initially display all products
// //       } catch (error) {
// //         console.error('Error fetching products:', error);
// //       }
// //     };

// //     fetchProducts(); // Call the function to fetch data
// //   }, []); // Empty dependency array to run only once when the component mounts

// //   const handleCategoryChange = (category) => {
// //     setSelectedCategory(category);
// //     if (category === '') {
// //       setFilteredProducts(products); // Show all products if no category is selected
// //     } else {
// //       const filtered = products.filter((product) => product.category === category);
// //       setFilteredProducts(filtered); // Filter products based on the selected category
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center ">
// //       <div className="w-full px-10">
// //         <h1 className="flex items-center justify-center p-10 mb-0 -mt-20 sm:-mt-28 sm:mb-0 text-3xl  font-bold text-black  sm:text-5xl md:text-6xl">
// //           Our Latest Products   https://www.temu.com/pk-en/channel/lightning-deals.html?same_see=AAAAqQAAAJnxCQoPCID4%252FICn1ogBEOn2%252B5UFCg8IrM2OsREA0Nuqp%252FwDCg8I0JOT1qYiAED1zfCcEQBB0rip7hEAwZyJl9gCCg8I%252F7Oj%252FBEAQKq87bJEAEGkqPa9RADBxLz3iAEKDwiR9LWZEQDB8dm0nwQKDgixtI2jMwCx3NCoFgoPCOnCr9gQAECNh7%252BxVADg1Y7Rt6bWiAEQm5iczAI%253D&_x_channel_src=1&_x_channel_scene=spike&top_goods=601099734039552%2C601099834992300%2C601099644226000%2C601099694922834%2C601099724184063%2C601099861857316%2C601099785304593%2C601099537177137%2C601099648885097%2C601099580229461&refer_page_name=home&refer_page_id=10005_1736271957279_wy74zm445g&refer_page_sn=10005&_x_sessn_id=gyi8rl33lx
// //           use this link and remove our latestt product
// //         </h1>

// //         {/* Filter Section */}
// //         <div className="flex justify-center mb-6 space-x-2 sm:space-x-4">
// //           {['', 'electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'].map((category) => (
// //             <button
// //               key={category}
// //               onClick={() => handleCategoryChange(category)}
// //               className={`px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base ${
// //                 selectedCategory === category
// //                   ? 'bg-green-600 text-white'
// //                   : 'bg-gray-200 text-gray-700'
// //               }`}
// //             >
// //               {category === '' ? 'All' : category.replace(/'/g, '')}
// //             </button>
// //           ))}
// //         </div>

// //         {/* Product Grid */}
// //         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
// //           {filteredProducts.map((product) => (
// //             <section
// //               key={product.id}
// //               className="p-3 py-3 text-center duration-300 transform bg-white border-gray-100 shadow-md cursor-pointer rounded-xl border hover:shadow-lg"
// //             >
// //               <div className="flex flex-col items-center">
// //                 <img
// //                   src={product.image}
// //                   alt={product.title}
// //                   className="mb-2 w-40 h-56"
// //                 />
// //                 <div className="flex justify-center mt-1 space-x-1">
// //                   {/* Star Rating using React Icons */}
// //                   {[...Array(3)].map((_, index) => (
// //                     <FaStar key={index} className="w-3 h-3 text-orange-600" />
// //                   ))}
// //                   {[...Array(2)].map((_, index) => (
// //                     <FaRegStar key={index} className="w-3 h-3 text-gray-300" />
// //                   ))}
// //                 </div>
// //                 <h4 className="mt-2 text-sm font-medium text-gray-700 sm:text-base">
// //                   {product.title}
// //                 </h4>
// //                 <span className="mt-2 text-base font-semibold text-green-700 sm:text-lg">
// //                   ${product.price}
// //                 </span>
// //                 <div className="flex justify-center mt-4 space-x-2">
// //                   <Link to={`/product/${product.id}`}>
// //                     <button
// //                       type="button"
// //                       className="px-3 py-1 text-xs text-white bg-green-600 rounded-md sm:text-sm hover:bg-green-700"
// //                     >
// //                       View Details
// //                     </button>
// //                   </Link>
// //                 </div>
// //               </div>
// //             </section>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ProCard;


// import React, { useEffect, useState } from 'react';
// import { FaStar, FaRegStar } from 'react-icons/fa'; // Import React Icons
// import { Link } from 'react-router-dom'; // Import Link for navigation

// const ProCard = () => {
//   const [products, setProducts] = useState([]); // State to store fetched products
//   const [filteredProducts, setFilteredProducts] = useState([]); // State for filtered products
//   const [selectedCategory, setSelectedCategory] = useState(''); // State for selected category

//   useEffect(() => {
//     // Fetch data from the API 
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         const data = await response.json();
//         setProducts(data); // Set the fetched data into state
//         setFilteredProducts(data); // Initially display all products
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
//     };

//     fetchProducts(); // Call the function to fetch data
//   }, []); // Empty dependency array to run only once when the component mounts

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//     if (category === '') {
//       setFilteredProducts(products); // Show all products if no category is selected
//     } else {
//       const filtered = products.filter((product) => product.category === category);
//       setFilteredProducts(filtered); // Filter products based on the selected category
//     }
//   };

//   return (
//     <div className="flex items-center justify-center ">
//       <div className="w-full px-10">
//         <h1 className="flex items-center justify-center p-10 mb-0 -mt-20 sm:-mt-28 sm:mb-0 text-3xl font-bold text-black sm:text-5xl md:text-6xl">
//           <a href="https://www.temu.com/pk-en/channel/lightning-deals.html?same_see=AAAAqQAAAJnxCQoPCID4%252FICn1ogBEOn2%252B5UFCg8IrM2OsREA0Nuqp%252FwDCg8I0JOT1qYiAED1zfCcEQBB0rip7hEAwZyJl9gCCg8I%252F7Oj%252FBEAQKq87bJEAEGkqPa9RADBxLz3iAEKDwiR9LWZEQDB8dm0nwQKDgixtI2jMwCx3NCoFgoPCOnCr9gQAECNh7%252BxVADg1Y7Rt6bWiAEQm5iczAI%253D&_x_channel_src=1&_x_channel_scene=spike&top_goods=601099734039552%2C601099834992300%2C601099644226000%2C601099694922834%2C601099724184063%2C601099861857316%2C601099785304593%2C601099537177137%2C601099648885097%2C601099580229461&refer_page_name=home&refer_page_id=10005_1736271957279_wy74zm445g&refer_page_sn=10005&_x_sessn_id=gyi8rl33lx" target="_blank" rel="noopener noreferrer">
//             View Lightning Deals
//           </a>
//         </h1>

//         {/* Filter Section */}
//         <div className="flex justify-center mb-6 space-x-2 sm:space-x-4">
//           {['', 'electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'].map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryChange(category)}
//               className={`px-2 sm:px-3 py-2 rounded-md text-sm sm:text-base ${
//                 selectedCategory === category
//                   ? 'bg-green-600 text-white'
//                   : 'bg-gray-200 text-gray-700'
//               }`}
//             >
//               {category === '' ? 'All' : category.replace(/'/g, '')}
//             </button>
//           ))}
//         </div>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {filteredProducts.map((product) => (
//             <section
//               key={product.id}
//               className="p-3 py-3 text-center duration-300 transform bg-white border-gray-100 shadow-md cursor-pointer rounded-xl border hover:shadow-lg"
//             >
//               <div className="flex flex-col items-center">
//                 <img
//                   src={product.image}
//                   alt={product.title}
//                   className="mb-2 w-40 h-56"
//                 />
//                 <div className="flex justify-center mt-1 space-x-1">
//                   {/* Star Rating using React Icons */}
//                   {[...Array(3)].map((_, index) => (
//                     <FaStar key={index} className="w-3 h-3 text-orange-600" />
//                   ))}
//                   {[...Array(2)].map((_, index) => (
//                     <FaRegStar key={index} className="w-3 h-3 text-gray-300" />
//                   ))}
//                 </div>
//                 <h4 className="mt-2 text-sm font-medium text-gray-700 sm:text-base">
//                   {product.title}
//                 </h4>
//                 <span className="mt-2 text-base font-semibold text-green-700 sm:text-lg">
//                   ${product.price}
//                 </span>
//                 <div className="flex justify-center mt-4 space-x-2">
//                   <Link to={`/product/${product.id}`}>
//                     <button
//                       type="button"
//                       className="px-3 py-1 text-xs text-white bg-green-600 rounded-md sm:text-sm hover:bg-green-700"
//                     >
//                       View Details
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </section>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProCard;



import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const products = [
  { id: 1, title: 'Jordan Spizike Low', description: "Men's shoes", price: 160, rating: 4, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f014625e-1a1d-4944-8395-46a07841a794/JORDAN+SPIZIKE+LOW.png' },
  { id: 2, title: 'Air Jordan 6 Retro', description: "Men's shoes", price: 200, rating: 5, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/362cced6-125a-4354-a6e0-f56e747ce4d6/AIR+JORDAN+6+RETRO.png' },
  { id: 3, title: 'Jumpman MVP', description: "Men's shoes", price: 165, rating: 3, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/77c98012-1e1a-4d57-8a69-162af8874e58/JORDAN+MVP.png' },
  { id: 1, title: 'Jordan Spizike Low', description: "Men's shoes", price: 160, rating: 4, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f014625e-1a1d-4944-8395-46a07841a794/JORDAN+SPIZIKE+LOW.png' },
  { id: 2, title: 'Air Jordan 6 Retro', description: "Men's shoes", price: 200, rating: 5, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/362cced6-125a-4354-a6e0-f56e747ce4d6/AIR+JORDAN+6+RETRO.png' },
  { id: 3, title: 'Jumpman MVP', description: "Men's shoes", price: 165, rating: 3, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/77c98012-1e1a-4d57-8a69-162af8874e58/JORDAN+MVP.png' },

  { id: 1, title: 'Jordan Spizike Low', description: "Men's shoes", price: 160, rating: 4, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f014625e-1a1d-4944-8395-46a07841a794/JORDAN+SPIZIKE+LOW.png' },
  { id: 2, title: 'Air Jordan 6 Retro', description: "Men's shoes", price: 200, rating: 5, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/362cced6-125a-4354-a6e0-f56e747ce4d6/AIR+JORDAN+6+RETRO.png' },
  { id: 3, title: 'Jumpman MVP', description: "Men's shoes", price: 165, rating: 3, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/77c98012-1e1a-4d57-8a69-162af8874e58/JORDAN+MVP.png' },

  { id: 1, title: 'Jordan Spizike Low', description: "Men's shoes", price: 160, rating: 4, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f014625e-1a1d-4944-8395-46a07841a794/JORDAN+SPIZIKE+LOW.png' },
  { id: 2, title: 'Air Jordan 6 Retro', description: "Men's shoes", price: 200, rating: 5, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/362cced6-125a-4354-a6e0-f56e747ce4d6/AIR+JORDAN+6+RETRO.png' },
  { id: 3, title: 'Jumpman MVP', description: "Men's shoes", price: 165, rating: 3, imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/77c98012-1e1a-4d57-8a69-162af8874e58/JORDAN+MVP.png' },

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
    <div className="w-screen p-8 sm:p-16 dark:bg-gray-900 -mt-20">
      <div className="flex justify-between items-center mb-8">
        <div className="text-lg text-center leading-tight font-medium dark:text-gray-100">
          <h1 className="text-4xl font-semibold tracking-wide sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl">
            Explore Our Bestsellers
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

