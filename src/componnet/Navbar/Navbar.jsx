import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiShoppingCart,
  FiMenu,
  FiX,
  FiSearch,
  FiStar,
  FiTag,
  FiSun,
} from "react-icons/fi";
import { useCart } from "../../CartContext";
import logo from "../../assets/bokata.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cart } = useCart();

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Query:", searchQuery);
  };

  return (
    <nav className="shadow-lg bg-purple-700">
      <div className="container mx-auto flex space-x-6 items-center justify-between px-4 py-6">
        {/* Logo */}
        <div>
          <NavLink to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-10 h-10 sm:w-16 sm:h-16 rounded-full"
            />
          </NavLink>
        </div>

        {/* Categories (Hidden on small screens) */}
        <div className="hidden md:flex items-center space-x-6 text-white font-medium">
          <div className="flex items-center space-x-1">
            <FiTag className="text-lg" />
            <span>New Arrival</span>
          </div>
          <div className="flex items-center space-x-1">
            <FiStar className="text-lg" />
            <span>5-Star</span>
          </div>
          <div className="flex items-center space-x-1">
            <FiTag className="text-lg" />
            <span>Best</span>
          </div>
          <div className="flex items-center space-x-1">
            <FiSun className="text-lg" />
            <span>Winter Offer</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow mx-4">
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center bg-white rounded-full overflow-hidden shadow-md"
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-500 text-white hover:bg-indigo-600 transition"
            >
              <FiSearch className="text-xl" />
            </button>
          </form>
        </div>

        {/* Cart and Account */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <div className="relative">
            <NavLink to="/cart" className="relative">
              <FiShoppingCart className="text-2xl text-white" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-5 h-5 text-xs text-white bg-red-500 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </NavLink>
          </div>

          {/* Create Account Button */}
          <div className="hidden md:block">
            <button
              onClick={toggleDropdown}
              className="px-4 py-2 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition"
            >
              Create Account
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-md z-[100]">
                <NavLink
                  to="/user-account"
                  className="block px-4 py-2 text-gray-800 hover:bg-purple-700 hover:text-white"
                >
                  User
                </NavLink>
                <NavLink
                  to="/create-account"
                  className="block px-4 py-2 text-gray-800 hover:bg-purple-700 hover:text-white"
                >
                  Seller
                </NavLink>
                <NavLink
                  to="/admin-account"
                  className="block px-4 py-2 text-gray-800 hover:bg-purple-700 hover:text-white"
                >
                  Admin
                </NavLink>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isMenuOpen ? (
                <FiX className="text-2xl text-white" />
              ) : (
                <FiMenu className="text-2xl text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-purple-700 text-white space-y-2 px-4 py-3">
          <NavLink to="/user-account" className="block py-2">
            User
          </NavLink>
          <NavLink to="/create-account" className="block py-2">
            Seller
          </NavLink>
          <NavLink to="/admin-account" className="block py-2">
            Admin
          </NavLink>
          <div className="space-y-2 mt-4">
            <div className="flex items-center space-x-1">
              <FiTag className="text-lg" />
              <span>New Arrival</span>
            </div>
            <div className="flex items-center space-x-1">
              <FiStar className="text-lg" />
              <span>5-Star</span>
            </div>
            <div className="flex items-center space-x-1">
              <FiTag className="text-lg" />
              <span>Best</span>
            </div>
            <div className="flex items-center space-x-1">
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
