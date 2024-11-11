import React from 'react';
import Image from 'next/image';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const ProductPage = () => {
  const relatedProducts = [
    {
      name: "Flannel Duvet Cover Set",
      price: "30$",
      image: "/flannel.png",
    },
    {
      name: "Ribbed Wool-Blend Throw",
      price: "30$",
      image: "/Ribbed.png",
    },
    {
      name: "Fitted Cotton Sheet",
      price: "30$",
      image: "/fittled.png",
    },
    {
      name: "Washed Linen Pillowcase",
      price: "30$",
      image: "/washed.png",
    },
    {
      name: "Cover Set single",
      price: "30$",
      image: "/g1.png",
    },
    {
      name: "Wool-Blend set",
      price: "30$",
      image: "/g2.png",
    },
    {
      name: "Cotton Sheet",
      price: "30$",
      image: "/g3.png",
    },
    {
      name: "Cover Set double",
      price: "30$",
      image: "/g3o.png",
    },
  ];

  const renderRating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="py-6 px-4 bg-gray-100">
      <div
        className="relative w-full h-[400px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/bg1.png')` }}
      >
        <div className="bg-white bg-opacity-75 p-8 rounded-lg">
          <h1 className="text-3xl font-bold text-gray-800">BEDSHEET SETS</h1>
          <p className="mt-2 text-lg font-bold text-gray-800">
            $50.00 <span className="line-through text-gray-500">$200.00</span>
          </p>
          <p className="mt-4 text-gray-600">
          Experience the perfect blend of comfort and elegance with our premium bedsheet sets,<br /> crafted to transform your bedroom into a serene sanctuary.
          </p>
          <button className="mt-6 py-2 px-6 bg-lime-600 text-white rounded-lg hover:bg-lime-500 transition-all duration-300">
            VIEW DETAILS
          </button>
        </div>
      </div>

      {/* Also You May Like Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Also You May Like
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <div className="relative w-full h-[200px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="mt-2 text-lg font-bold text-gray-800">
                  {product.price}
                </p>
                <div className="flex items-center mt-2">
                  {renderRating(4)} {/* Example: 4-star rating */}
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

export default ProductPage;
