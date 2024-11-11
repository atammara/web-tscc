"use client"
import React, { useState } from 'react';
import { FaSearch, FaUser, FaShoppingCart, FaHeart, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="p-2 shadow-sm shadow-black">
        <div className="max-w-7xl py-1 mx-auto flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">MOODY STUDIO</div>

          <nav className="hidden md:flex gap-12 justify-center font-semibold text-lg text-gray-600">
            <a href="/" className="hover:text-orange-600">Home</a>
            <a href="/Store" className="hover:text-orange-600">Store</a>
            <a href="/Top" className="hover:text-orange-600">Top Rated</a>
            <a href="/Bed" className="hover:text-orange-600">Bedroom Items</a>
          </nav>

          <div className="hidden md:flex gap-6 items-center">
            <FaSearch className="text-gray-600 hover:text-orange-600 cursor-pointer" size={25} />
            <FaUser className="text-gray-600 hover:text-orange-600 cursor-pointer" size={25} />
            <FaShoppingCart className="text-gray-600 hover:text-orange-600 cursor-pointer" size={25} />
            <FaHeart className="text-gray-600 hover:text-orange-600 cursor-pointer" size={25} />
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-orange-600"
            >
              {isMobileMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-md">
            <nav className="flex flex-col items-center gap-4 py-4">
              <a href="/" className="hover:text-orange-600 text-gray-800 font-medium text-lg">Home</a>
              <a href="/Store" className="hover:text-orange-600 text-gray-800 font-medium text-lg">Store</a>
              <a href="/Top" className="hover:text-orange-600 text-gray-800 font-medium text-lg">Top Rated</a>
              <a href="/Bed" className="hover:text-orange-600 text-gray-800 font-medium text-lg">Bedroom Items</a>
            </nav>
            <div className="flex justify-center gap-6 py-4">
              <FaSearch className="text-gray-600 hover:text-orange-600 cursor-pointer" size={25} />
              <FaUser className="text-gray-600 hover:text-orange-600 cursor-pointer" size={25} />
              <FaShoppingCart className="text-gray-600 hover:text-orange-600 cursor-pointer" size={25} />
              <FaHeart className="text-gray-600 hover:text-orange-600 cursor-pointer" size={25} />
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
