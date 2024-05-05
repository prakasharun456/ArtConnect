import React, { useState, useEffect } from 'react';

const DeleteProduct = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductName, setSelectedProductName] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch('http://localhost:3001/products/get');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await fetch(`/products/delete`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setProducts(products.filter(product => product.name !== selectedProductName));
        console.log('Product deleted successfully');
      } else {
        console.error('Failed to delete product');
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Delete Product</h2>
      <select
        value={selectedProductName}
        onChange={(e) => setSelectedProductName(e.target.value)}
        className="w-full bg-gray-200 mb-2 p-2 rounded-md"
      >
        <option value="">Select a product to delete</option>
        {products.map(product => (
          <option key={product.name} value={product.name}>{product.name}</option>
        ))}
      </select>
      {selectedProductName && (
        <button onClick={handleDelete} className="w-full bg-red-400 text-white py-2 rounded-md">
          Delete Product
        </button>
      )}
    </div>
  );
};

export default DeleteProduct;
