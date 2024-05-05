import React, { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const Cart = ({ onClose }) => {
  const { cart } = useCart();
  const [productQuantities, setProductQuantities] = useState({});

  useEffect(() => {
    const quantities = cart.reduce((acc, item) => {
      acc[item.name] = (acc[item.name] || 0) + 1;
      return acc;
    }, {});
    setProductQuantities(quantities);
  }, [cart]);

  const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price.replace('Rs.', '')), 0);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Cart</h2>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">Product Name</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Price</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(productQuantities).map((productName, index) => (
            <tr key={index} className="bg-gray-100">
              <td className="px-4 py-2">{productName}</td>
              <td className="px-4 py-2">{productQuantities[productName]}</td>
              <td className="px-4 py-2">{cart.find(item => item.name === productName).price}</td>
            </tr>
          ))}
          <tr className="bg-gray-200">
            <td className="px-4 py-2 font-bold" colSpan={2}>Total:</td>
            <td className="px-4 py-2 font-bold" >{totalPrice.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/shop/confirmorder">
        <button className='bg-green-300 rounded-full mt-4 px-3 py-2'>
          Proceed to Order
        </button>
      </Link>
      <div className="absolute top-10 right-10 cursor-pointer" style={{ border: '2px black solid', borderRadius: 5 }} onClick={onClose}>
        <FiX className="text-gray-500 hover:text-gray-700" />
      </div>
    </div>
  );
};

export default Cart;
