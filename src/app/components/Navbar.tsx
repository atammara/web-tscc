"use client";
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="bg-slate-50">
      <header className="p-1 shadow-sm shadow-black">
        <div className="max-w-7xl py-1 mx-auto flex items-center justify-between">
          <div className="text-3xl ml-8 font-bold text-lime-600">MOODY STUDIO</div>
          <nav className="hidden md:flex gap-12 justify-center font-semibold text-lg text-gray-600">
            <a href="/" className="hover:text-lime-600">Home</a>
            <a href="/Store" className="hover:text-lime-600">Store</a>
            <a href="/Top" className="hover:text-lime-600">Top Rated</a>
            <a href="/Bed" className="hover:text-lime-600">Bedroom Items</a>
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-lime-600"
            >
              {isMobileMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-50 shadow-md">
            <nav className="flex flex-col items-center gap-4 py-4">
              <a href="/" className="hover:text-lime-600 text-gray-800 font-medium text-lg">Home</a>
              <a href="/Store" className="hover:text-lime-600 text-gray-800 font-medium text-lg">Store</a>
              <a href="/Top" className="hover:text-lime-600 text-gray-800 font-medium text-lg">Top Rated</a>
              <a href="/Bed" className="hover:text-lime-600 text-gray-800 font-medium text-lg">Bedroom Items</a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
