// import React from 'react';
// import { useCart } from '../../CartContext'; // Importing the hook to manage the cart
// import { FaShoppingCart } from 'react-icons/fa';

// const CartPage = () => {
//   const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); // Get cart and functions from context

//   // Calculate the total price
//   const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

//   if (cart.length === 0) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-100">
//         <div className="p-8 text-center bg-white shadow-lg rounded-xl">
//           <FaShoppingCart className="mb-4 text-6xl text-gray-400 animate-bounce" />
//           <h2 className="mb-4 text-2xl font-bold text-gray-800">Your Cart is Empty</h2>
//           <p className="mb-6 text-gray-600">Looks like you haven’t added anything to your cart yet.</p>
//           <a
//             href="/products"
//             className="text-lg font-semibold text-indigo-600 transition-colors hover:text-indigo-800"
//           >
//             Start Shopping Now
//           </a>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="container ">
//       <div className="sm:flex ">
//         <div className="p-8 m-4  border sm:w-1/2 md:w-2/3 lg:w-[60%] rounded-xl shadow-2xl">
//           <div className="flex justify-between pb-6 border-b">
//             <h1 className="text-xl font-semibold">Shopping Cart</h1>
//             <h2 className="text-xl font-semibold">{cart.length} Items</h2>
//           </div>
//           {cart.map((item) => (
//             <div key={item.id} className="py-8 border-t md:flex md:py-10 lg:py-8 border-gray-50 rounded-xl">
//             <div className="w-20 sm:w-28 2xl:w-24">
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="object-center w-full h-full"
//               />
//             </div>
//             <div className="flex flex-col justify-center md:pl-3 md:w-8/12 2xl:w-3/4">
//               <p className="pt-2 leading-3 text-gray-800 text-sm md:pt-0">{item.id}</p>
//               <div className="flex items-center justify-between w-full">
//                 <p className="text-lg font-black leading-none text-gray-800">{item.title}</p>
//                 <div className="flex items-center">
//                   <button
//                     onClick={() => decreaseQuantity(item.id)}
//                     className="px-2 py-1 text-gray-600 bg-red-300 border border-gray-300 rounded-md"
//                   >
//                     -
//                   </button>
//                   <span className="mx-2 text-base font-semibold">{item.quantity}</span>
//                   <button
//                     onClick={() => increaseQuantity(item.id)}
//                     className="px-2 py-1 text-gray-600 bg-red-300 border border-gray-300 rounded-md"
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//               <p className="pt-2 text-gray-600 text-sm">Height: 10 inches</p>
//               <p className="py-2 text-gray-600 text-sm">Color: Black</p>
//               <p className="text-gray-600 text-sm">Composition: 100% calf leather</p>
//               <div className="flex items-center justify-between pt-5">
//                 <div className="flex items-center gap-3">
//                   <button className="p-2 text-sm text-red-500 bg-red-200 border cursor-pointer rounded-xl">
//                     Add to favorites
//                   </button>
//                   <button
//                     onClick={() => removeFromCart(item.id)}
//                     className="p-2 text-sm text-red-500 bg-red-200 border cursor-pointer rounded-xl"
//                   >
//                     Remove
//                   </button>
//                 </div>
//                 <p className="text-sm font-black text-gray-800">
//                   ${(item.price * item.quantity).toFixed(2)}
//                 </p>
//               </div>
//             </div>
//           </div>
          
//           ))}
//           <a href="/products" className="flex mt-8 text-sm font-semibold text-indigo-600">
//             <svg
//               className="w-4 mr-2 text-indigo-600 fill-current"
//               viewBox="0 0 448 512"
//             >
//               <path
//                 d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"
//               />
//             </svg>
//             Continue Shopping
//           </a>
//         </div>

//         <div id="summary" className="mt-4 ml-4 mr-4 sm:mr-0 sm:ml-0  sm:w-full md:w-1/4 lg:w-1/3 border rounded-xl shadow-2xl  p-5">
//           <h1 className="pb-6 text-xl font-semibold border-b">Order Summary</h1>

//           {/* Items and Total Price Section */}
//           <div className="flex flex-col justify-between mt-8 mb-4 text-sm sm:flex-row sm:block">
//             <span className="font-semibold uppercase">Items {cart.length}</span>
//             <span className="font-semibold">${totalPrice.toFixed(2)}</span>
//           </div>

//           {/* Shipping Section */}
//           <div>
//             <label className="inline-block mb-3 text-sm font-medium uppercase">Shipping</label>
//             <select className="block w-full p-2 text-sm text-gray-600 border rounded-md">
//               <option>Standard shipping - $10.00</option>
//             </select>
//           </div>

//           {/* Promo Code Section */}
//           <div className="py-8">
//             <label htmlFor="promo" className="inline-block mb-3 text-sm font-semibold uppercase">
//               Promo Code
//             </label>
//             <input
//               type="text"
//               id="promo"
//               placeholder="Enter your code"
//               className="w-full p-2 text-sm border rounded-md"
//             />
//           </div>

//           {/* Apply Button */}
//           <button className="w-full px-5 py-2 mt-3 text-sm text-white uppercase bg-red-500 rounded-md hover:bg-red-600">
//             Apply
//           </button>

//           {/* Total Cost Section */}
//           <div className="mt-8 border-t">
//             <div className="flex flex-col justify-between py-6 text-sm font-semibold uppercase sm:flex-row">
//               <span>Total cost</span>
//               <span>${(totalPrice + 10).toFixed(2)}</span> {/* Adding shipping cost */}
//             </div>
//             <button className="w-full py-3 mt-3 text-sm font-semibold text-white uppercase bg-indigo-500 rounded-md hover:bg-indigo-600">
//               Checkout
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;

import React from 'react';

const CartPage = () => {
  return (
    <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
      <div className="flex justify-start item-start space-y-2 flex-col">
        <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Order #13432</h1>
        <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">21st March 2021 at 10:34 PM</p>
      </div>
      <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
        <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
          <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
            <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p>
            <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
              <div className="pb-4 md:pb-8 w-full md:w-40">
                <img className="w-full hidden md:block" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/362cced6-125a-4354-a6e0-f56e747ce4d6/AIR+JORDAN+6+RETRO.png" alt="dress" />
                <img className="w-full md:hidden" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/362cced6-125a-4354-a6e0-f56e747ce4d6/AIR+JORDAN+6+RETRO.png" alt="dress" />
              </div>
              <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">Premium Quality Shoes</h3>
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Style: </span> Italic Minimal Shoes</p>
                    <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Size: </span> Small</p>
                    <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Color: </span> Light Blue</p>
                  </div>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  <p className="text-base dark:text-white xl:text-lg leading-6">$36.00 <span className="text-red-300 line-through"> $45.00</span></p>
                  <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">01</p>
                  <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-0 flex justify-start flex-col md:flex-row items-start md:items-center space-y-4 md:space-x-6 xl:space-x-8 w-full">
              <div className="w-full md:w-40">
                <img className="w-full hidden md:block" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/362cced6-125a-4354-a6e0-f56e747ce4d6/AIR+JORDAN+6+RETRO.png" alt="dress" />
                <img className="w-full md:hidden" src="https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/362cced6-125a-4354-a6e0-f56e747ce4d6/AIR+JORDAN+6+RETRO.png" alt="dress" />
              </div>
              <div className="flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0">
                <div className="w-full flex flex-col justify-start items-start space-y-8">
                  <h3 className="text-xl dark:text-white xl:text-2xl font-semibold leading-6 text-gray-800">High Quality Italic Shoes</h3>
                  <div className="flex justify-start items-start flex-col space-y-2">
                    <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Style: </span> Italic Minimal Shoes</p>
                    <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Size: </span> Small</p>
                    <p className="text-sm dark:text-white leading-none text-gray-800"><span className="dark:text-gray-400 text-gray-300">Color: </span> Light Blue</p>
                  </div>
                </div>
                <div className="flex justify-between space-x-8 items-start w-full">
                  <p className="text-base dark:text-white xl:text-lg leading-6">$20.00 <span className="text-red-300 line-through"> $30.00</span></p>
                  <p className="text-base dark:text-white xl:text-lg leading-6 text-gray-800">01</p>
                  <p className="text-base dark:text-white xl:text-lg font-semibold leading-6 text-gray-800">$20.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary and Shipping Section */}
          <div className="flex justify-center flex-col md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
            <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
              <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Summary</h3>
              <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                <div className="flex justify-between w-full">
                  <p className="text-base dark:text-white leading-4 text-gray-800">Subtotal</p>
                  <p className="text-base dark:text-gray-300 leading-4 text-gray-600">$56.00</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base dark:text-white leading-4 text-gray-800">Discount <span className="bg-gray-200 p-1 text-xs font-medium dark:bg-white dark:text-gray-800 leading-3 text-gray-800">STUDENT</span></p>
                  <p className="text-base dark:text-gray-300 leading-4 text-gray-600">-$28.00 (50%)</p>
                </div>
                <div className="flex justify-between items-center w-full">
                  <p className="text-base dark:text-white leading-4 text-gray-800">Shipping</p>
                  <p className="text-base dark:text-gray-300 leading-4 text-gray-600">$8.00</p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total</p>
                <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">$36.00</p>
              </div>
            </div>

            <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
              <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Shipping</h3>
              <div className="flex justify-between items-start w-full">
                <div className="flex justify-center items-center space-x-4">
                  <div className="w-8 h-8">
                    <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                  </div>
                  <div className="flex flex-col justify-start items-center">
                    <p className="text-lg leading-6 dark:text-white font-semibold text-gray-800">DPD Delivery<br /><span className="font-normal">Delivery within 24 Hours</span></p>
                  </div>
                </div>
                <p className="text-base dark:text-white leading-4 text-gray-600">Free</p>
              </div>
            </div>
          </div>

          {/* Payment Now Button */}
          <div className="mt-6 flex justify-center items-center">
            <button className="bg-blue-600 text-white text-lg px-8 py-3 rounded-md hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Payment Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
