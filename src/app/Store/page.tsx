import React from 'react';

const ProductGrid = () => {
  const products = [
    {
      name: "Tiny Vintage Chair",
      price: "30$",
      category: "Furniture",
      Image: "/image3.png",
    },
    {
      name: "Large Terracotta Vase",
      price: "30$",
      category: "Vase",
      Image: "/image4.png",
    },
    {
      name: "Linen Beach Towel",
      price: "30$",
      category: "Decor",
      Image: "/R6.png",
    },
    {
      name: "Square Clear Glass Box",
      price: "30$",
      category: "Storage",
      Image: "/R7.png",
    },
    {
      name: "4 pack Small Ceramic Plates",
      price: "30$",
      category: "Plates",
      Image: "/R8.png",
    },
    {
      name: "Large Clear Glass Box",
      price: "30$",
      category: "Storage",
      Image: "/R10.png",
    },
    {
      name: "Round Jute Placemat",
      price: "30$",
      category: "Decor",
      Image: "/R11.png",
    },
    {
      name: "Metal Wire Basket",
      price: "30$",
      category: "Storage",
      Image: "/R12.png",
    },
  ];

  return (
    <div className="py-6 mt-1 px-4 bg-gray-100">
      <div className="max-w-6xl max-h-auto mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:bg-gray-50"
            >
              <img
                src={product.Image}
                alt={product.name}
                className="w-80 h-72 object-cover"
              />
              <div className="p-2 ">
                <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                <p className="text-gray-500 text-sm">{product.category}</p>
                <p className="mt-2 text-lg font-bold text-gray-800">{product.price}</p>
                <button className="mt-2 py-2 px-4 bg-orange-600 text-white rounded-lg hover:bg-orange-500 transition-all duration-300">
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
