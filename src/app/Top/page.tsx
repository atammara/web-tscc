import Image from 'next/image';
import React from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ProductGrid = () => {
  const products = [
    {
      name: "Tray with Foot",
      price: "30$",
      rating: 3,
      Image: "/1.png",
    },
    {
      name: "Twill Seat Cushion",
      price: "30$",
      rating: 4,
      Image: "/2.png",
    },
    {
      name: "Fluted Beverage Glass",
      price: "30$",
      rating: 5,
      Image: "/3.png",
    },
    {
      name: "Ceramic Egg Cup",
      price: "30$",
      rating: 2,
      Image: "/4.png",
    },
    {
      name: "Small Bamboo Box",
      price: "30$",
      rating: 3,
      Image: "/5.png",
    },
    {
      name: "Metal Cutlery Basket",
      price: "30$",
      rating: 4,
      Image: "/6.png",
    },
    {
      name: "4-pack Ceramic Cups",
      price: "30$",
      rating: 5,
      Image: "/7.png",
    },
    {
      name: "2-pack Linen Napkins",
      price: "30$",
      rating: 4,
      Image: "/8.png",
    },
  ];

  const renderRating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === rating + 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="py-6 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">TOP RATING</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">

              <Image
                src={product.Image}
                alt={product.name}
                width={300}  // Provide the width (adjust as needed)
                height={250} // Provide the height (adjust as needed)
                className="w-96 h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="mt-2 text-lg font-bold text-gray-800">{product.price}</p>
                <div className="flex items-center mt-2">
                  {renderRating(product.rating)}
                </div>
                <button className="mt-4 py-2 px-4 bg-lime-600 text-white rounded-lg hover:bg-lime-500 transition-all duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
