import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../../components/style/artlogo.png';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import ProductList from './ProductList';
const ShoppingPage = () => {
  const [showCart, setShowCart] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  const updateCartItemCount = (count) => {
    setCartItemCount(count);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
       <div className="flex items-center justify-center py-3" style={{ background: 'linear-gradient(to right, aqua,white,aqua)' ,position:'sticky',top:0}}>
      <img src={logo} alt='logo' className="h-10 mr-2" />
      <h2 className="text-xl font-bold">Artconnect</h2>
    </div>
      
      <CartProvider updateCartItemCount={updateCartItemCount}>
        <div className="container mx-auto p-4 ">
          <div className="flex items-center justify-between mb-4"  style={{position:'sticky',top:70}}>
            <div className="flex items-center flex-grow"> {/* Adjusted container */}
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="border border-gray-300 rounded px-4 py-2 mb-4 mr-4 w-full" // Added width and removed margin-right
                style={{ maxWidth: '300px' }} // Adjust width as needed
              />
              <div className="flex items-center ml-auto"> {/* Flex items to the end */}
                <FaShoppingCart className="cursor-pointer" onClick={toggleCart} />
                {cartItemCount > 0 && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded-full ml-2">{cartItemCount}</span>
                )}
              </div>
            </div>
          </div>
          <ProductList searchQuery={searchQuery} />                                     
        </div>
        {showCart && (
          <div className="fixed right-0 top-0 h-full bg-white shadow-lg p-4">
            <Cart onClose={toggleCart} />
          </div>
        )}    
      </CartProvider>
    </>
  );
};

export default ShoppingPage;
