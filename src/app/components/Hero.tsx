import Image from 'next/image';
import React from 'react';
import { FaShippingFast, FaMoneyBillAlt, FaHeadset, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='h-72'>
      <div className="bg-white flex justify-between ml-32 sm:justify-center sm:gap-2 mr-32 mt-1 w-auto p-2 text-sm text-gray-600">
        <div className="flex gap-6 items-stretch">
          <FaShippingFast size={20} />
          <span className='font-semibold'>Free Shipping</span>
        </div>
        <div className="flex gap-6 items-center">
          <FaMoneyBillAlt size={20} />
          <span className='font-semibold'>100% Money Back</span>
        </div>
        <div className="flex gap-6 items-center">
          <FaHeadset size={20} />
          <span className='font-semibold'>Support 24/7</span>
        </div>
      </div>
      <section className="relative bg-gray-100 p-6 md:flex md:items-center md:justify-between">
        <div className="md:w-1/2 mt-6 md:mt-0">
          <Image
            src="/image.png"
            alt="Furniture"
            width={500}
            height={400}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="max-w-lg md:w-1/2 space-y-6">
          <h1 className="text-xl font-bold text-orange-600">HOT DEALS THIS WEEK</h1>
          <p className="text-3xl font-bold text-gray-700">SALE UP 50% MODERN FURNITURE</p>
          <button className="bg-orange-600 text-white py-2 px-6 rounded-lg hover:bg-orange-500">
            VIEW NOW
          </button>
        </div>
      </section>
      <section className="bg-white mb-4 p-2 mt-2">
        <div className="max-w-7xl mx-16 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left space-y-3">
            <h2 className="text-2xl font-bold">SIGN UP FOR THE NEWSLETTER</h2>
            <p className="text-sm text-gray-600">Subscribe for the latest stories and promotions</p>
          </div>
          <div className="flex mt-6 md:mt-0">
            <input
              type="email"
              placeholder="Enter your email address"
              className="p-2 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="bg-orange-600 text-white p-2 rounded-r-md flex items-center">
              <FaEnvelope size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
