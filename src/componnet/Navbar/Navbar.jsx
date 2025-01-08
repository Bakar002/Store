// import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { FiShoppingCart, FiMenu, FiX, FiUser, FiSearch } from 'react-icons/fi'; // Import FiSearch icon
// import { useCart } from '../../CartContext'; // Import the useCart hook

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false); // State to handle modal visibility
//   const { cart } = useCart(); // Get the cart from context
//   const [searchQuery, setSearchQuery] = useState(""); // State to handle search input

//   // Calculate the total items in the cart by summing the quantities
//   const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   const handleSearchChange = (e) => {
//     setSearchQuery(e.target.value); // Update search query
//   };

//   const handleSearchSubmit = (e) => {
//     e.preventDefault();
//     console.log("Search Query:", searchQuery); // Handle search logic here
//   };

//   return (
//     <nav className="text-white shadow-lg bg-gradient-to-r from-teal-400 to-teal-600">
//       <div className="container flex items-center justify-between p-4">
//         {/* Logo Section */}
//         <div>
//           <NavLink to="/">
//             <img
//               src="https://www.belikegroup.org/static/media/logo.3a3cb8d082342adf9151.png"
//               alt="Logo"
//               className="w-12 h-16 sm:w-32 rounded-full sm:ml-4 ml-4"
//             />
//           </NavLink>
//         </div>

//         {/* Search Bar */}
//         <div className="flex items-center w-1/2 md:w-1/3">
//           <form onSubmit={handleSearchSubmit} className="w-full flex items-center bg-white rounded-lg shadow-md">
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={searchQuery}
//               onChange={handleSearchChange}
//               className="w-full px-4 py-2 rounded-l-lg text-gray-700 focus:outline-none"
//             />
//             <button type="submit" className="px-4 py-2 text-white bg-teal-600 rounded-r-lg hover:bg-teal-500">
//               <FiSearch className="text-xl" />
//             </button>
//           </form>
//         </div>

//         {/* Cart, Profile, and Account Buttons */}
//         <div className="flex items-center space-x-4">
//           {/* Add to Cart */}
//           <div className="relative">
//             <NavLink to="/cart" className="flex items-center transition hover:text-teal-300">
//               <FiShoppingCart
//                 className={`text-xl ${cartCount > 0 ? 'animate-bounce' : ''}`}
//               />
//               {cartCount > 0 && (
//                 <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-2">
//                   {cartCount}
//                 </span>
//               )}
//             </NavLink>
//           </div>

//           {/* Profile Icon */}
//           <NavLink to="#" className="transition hover:text-teal-300" onClick={toggleModal}>
//             <FiUser className="text-xl" />
//           </NavLink>

//           {/* Buttons with Gradient Styling */}
//           <NavLink
//             to="/user-account"
//             className="hidden px-6 py-2 font-semibold text-white bg-gradient-to-r from-teal-400 to-green-500 rounded-lg md:block hover:from-purple-600 hover:to-green-600 focus:ring-4 focus:ring-purple-300 transition"
//           >
//             User
//           </NavLink>
//           <NavLink
//             to="/create-account"
//             className="hidden px-6 py-2 font-semibold text-white bg-gradient-to-r from-teal-400 to-green-500 rounded-lg md:block hover:from-purple-600 hover:to-green-600 focus:ring-4 focus:ring-purple-300 transition"
//           >
//             Seller
//           </NavLink>
//           <NavLink
//             to="/create-account"
//             className="hidden px-6 py-2 font-semibold text-white bg-gradient-to-r from-teal-400 to-green-500 rounded-lg md:block hover:from-purple-600 hover:to-green-600 focus:ring-4 focus:ring-purple-300 transition"
//           >
//             Admin
//           </NavLink>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu}>
//             {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="p-4 space-y-2 text-white bg-teal-500 md:hidden">
//           <NavLink to="/user-account" className="block px-4 py-2 mt-2 transition bg-teal-700 rounded-lg hover:bg-teal-600">
//             User
//           </NavLink>
//           <NavLink to="/create-account" className="block px-4 py-2 mt-2 transition bg-teal-700 rounded-lg hover:bg-teal-600">
//             Seller
//           </NavLink>
//           <NavLink to="/admin-account" className="block px-4 py-2 mt-2 transition bg-teal-700 rounded-lg hover:bg-teal-600">
//             Admin
//           </NavLink>
//         </div>
//       )}

//       {/* Profile Modal */}
//       {isModalOpen && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="p-6 bg-white rounded-lg w-80">
//             <div className="flex justify-end">
//               <button onClick={toggleModal} className="text-xl font-bold text-teal-600">
//                 &times;
//               </button>
//             </div>
//             <div className="flex flex-col items-center">
//               {/* Profile Image */}
//               <img
//                 src="https://via.placeholder.com/100"
//                 alt="Profile"
//                 className="w-24 h-24 mb-4 rounded-full"
//               />
//               <form className="w-full space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Name"
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email"
//                   className="w-full p-2 border border-gray-300 rounded-md"
//                 />
//                 <button
//                   type="submit"
//                   className="w-full p-2 mt-4 text-white bg-teal-600 rounded-md hover:bg-teal-500"
//                 >
//                   Save Changes
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiShoppingCart, FiMenu, FiX, FiSearch, FiStar, FiTag, FiSun } from 'react-icons/fi';  // Added new icons for categories
import { useCart } from '../../CartContext';
import logo from '../../assets/bokata.jpeg'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { cart } = useCart();
  const [searchQuery, setSearchQuery] = useState("");

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Query:', searchQuery);
  };

  return (
    <nav className="shadow-lg" style={{ backgroundColor: '#685189' }}>
      <div className="container flex items-center justify-between p-4">
        {/* Logo Section */}
        <div>
          <NavLink to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-4 h-8 sm:w-16 sm:h-16 rounded-full sm:ml-4 ml-8"
            />
          </NavLink>
        </div>
        
        {/* New Arrivals, 5-Star, Best, Winter Offer Section with Icons (Visible only on large screens) */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-white font-semibold">
          <div className="flex items-center space-x-1">
            <FiTag className="text-lg" style={{ color: 'white' }} />
            <span>New Arrival</span>
          </div>
          <div className="flex items-center space-x-1">
            <FiStar className="text-lg" style={{ color: 'white' }} />
            <span>5-Star</span>
          </div>
          <div className="flex items-center space-x-1">
            <FiTag className="text-lg" style={{ color: 'white' }} />
            <span>Best</span>
          </div>
          <div className="flex items-center space-x-1">
            <FiSun className="text-lg" style={{ color: 'white' }} />
            <span>Winter Offer</span>
          </div>
        </div>
{/* Search Bar */}
<div className="flex items-center justify-center md:w-1/3 w-full">
  <form onSubmit={handleSearchSubmit} className="w-full flex items-center bg-white rounded-xl shadow-lg overflow-hidden">
    <input
      type="text"
      placeholder="Search products..."
      value={searchQuery}
      onChange={handleSearchChange}
      className="w-full px-4 py-2 text-gray-700 rounded-l-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
    />
    <button
      type="submit"
      className="px-4 py-2 text-#451460  hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-r-xl transition-all duration-300"
    >
      <FiSearch className="text-xl" />
    </button>
  </form>
</div>


        {/* Cart and Create Account Button */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <div className="relative sm:left-0 left-6">
            <NavLink to="/cart" className="flex items-center transition hover:opacity-80">
              <FiShoppingCart
                className={`text-xl ${cartCount > 0 ? 'animate-bounce' : ''}`}
                style={{ color: 'white' }}
              />
              {cartCount > 0 && (
                <span className="absolute flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -right-2">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>

          {/* Create Account Button */}
          <div className="relative hidden md:block">
            <button
              onClick={toggleDropdown}
              className="px-6 py-2 font-semibold text-white rounded-lg focus:ring-4 transition"
              style={{ backgroundColor: '#451460' }}
            >
              Create Account
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 z-50 mt-2 w-40 bg-white rounded-lg shadow-lg">
                <NavLink
                  to="/user-account"
                  className="block px-4 py-2 text-gray-800 transition hover:bg-[#451460] hover:text-white rounded-t-lg"
                  style={{ borderBottom: '1px solid #451460' }}
                >
                  User
                </NavLink>
                <NavLink
                  to="/create-account"
                  className="block px-4 py-2 text-gray-800 transition hover:bg-[#451460] hover:text-white"
                  style={{ borderBottom: '1px solid #451460' }}
                >
                  Seller
                </NavLink>
                <NavLink
                  to="/admin-account"
                  className="block px-4 py-2 text-gray-800 transition hover:bg-[#451460] hover:text-white rounded-b-lg"
                >
                  Admin
                </NavLink>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FiX className="text-2xl" style={{ color: 'white' }} />
            ) : (
              <FiMenu className="text-2xl" style={{ color: 'white' }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="p-4 space-y-2" style={{ backgroundColor: '#685189' }}>
          {/* User, Seller, Admin Links */}
          <NavLink
            to="/user-account"
            className="block px-4 py-2 mt-2 rounded-lg"
            style={{ backgroundColor: '#451460', color: '#fff' }}
          >
            User
          </NavLink>
          <NavLink
            to="/create-account"
            className="block px-4 py-2 mt-2 rounded-lg"
            style={{ backgroundColor: '#451460', color: '#fff' }}
          >
            Seller
          </NavLink>
          <NavLink
            to="/admin-account"
            className="block px-4 py-2 mt-2 rounded-lg"
            style={{ backgroundColor: '#451460', color: '#fff' }}
          >
            Admin
          </NavLink>
        
          {/* Mobile Categories */}
          <div className="flex flex-col space-y-2 mt-4 text-sm">
            <div className="flex items-center space-x-1 bg-[white] text-white px-4 py-2 mt-2 rounded-lg">
              <FiTag className="text-lg" />
              <span>New Arrival</span>
            </div>
            <div className="flex items-center space-x-1 bg-[white] text-white px-4 py-2 mt-2 rounded-lg">
              <FiStar className="text-lg" />
              <span>5-Star</span>
            </div>
            <div className="flex items-center space-x-1 bg-[white] text-white px-4 py-2 mt-2 rounded-lg">
              <FiTag className="text-lg" />
              <span>Best</span>
            </div>
            <div className="flex items-center space-x-1 bg-[white] text-white px-4 py-2 mt-2 rounded-lg">
              <FiSun className="text-lg" />
              <span>Winter Offer</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
