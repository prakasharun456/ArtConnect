import React from 'react';
import { useCart } from './CartContext';
const ProductList = () => {
    const products = [
        {
          name: "Mud Pots",
          image: "./products/product1.jpg",
          price: "Rs.299"
        },
        {
          name: "Basket",
          image: "./products/product2.jpg",
          price: "Rs.499"
        },
        {
          name: "Thanjavur toys",
          image: "./products/product3.jpg",
          price: "Rs.199"
        },
        {
          name: "Handmade toys",
          image: "./products/product4.jpg",
          price: "Rs.250"
        },
        {
          name: "Wooden basket",
          image: "./products/product5.jpg",
          price: "Rs.320"
        },
        {
          name: "Bamboo cups",
          image: "./products/product6.jpg",
          price: "Rs.150"
        },
        {
          name: "Handmade bags",
          image: "./products/product7.jpg",
          price: "Rs.300"
        },
        {
          name: "Hanging chairs",
          image: "./products/product8.jpg",
          price: "Rs.2299"
        },
        {
          name: "Stands",
          image: "./products/product9.jpg",
          price: "Rs.299"
        },
        {
          name: "Toys",
          image: "./products/product10.jpg",
          price: "Rs.180"
        }
      ];
      
  const { addToCart } = useCart();

  return (
    <div className="container mx-auto md:mx-3">
      <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={index} className="prod-card bg-white rounded-lg shadow-lg">
            <img
              src={product.image}
              alt={`Product ${index + 1}`}
              className="w-full h-64 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
