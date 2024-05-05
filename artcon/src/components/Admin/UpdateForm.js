import React, { useState } from 'react';

const UpdateProduct = () => {
  const [productId, setProductId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleUpdate = async () => {
    // Perform your update logic here, you can use fetch or any other method to send the data to your backend
    try {
      const response = await fetch(`/products/update/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price, description }),
      });
      const data = await response.json();
      console.log(data); // Log the response from the server
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Update Product</h2>
      <input
        type="text"
        placeholder="Product ID"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
        className="w-full bg-gray-200 mb-2 p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full bg-gray-200 mb-2 p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full bg-gray-200 mb-2 p-2 rounded-md"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full bg-gray-200 mb-2 p-2 rounded-md"
      />
      <button onClick={handleUpdate} className="w-full bg-red-400 text-white py-2 rounded-md">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
