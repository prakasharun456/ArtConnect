import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AddNewProduct = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // State to hold the selected image file

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create FormData object to send image and other data
      const formData = new FormData();
      formData.append('name', name);
      formData.append('price', price);
      formData.append('description', description);
      formData.append('image', image); // Append the image file

      await axios.post('http://localhost:3001/products/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data' // Set content type as multipart/form-data
        }
      });
      
      toast.success('Product added successfully!', { position: 'top-right', autoClose: 1500 });
     
    } catch (error) {
      console.error('Error adding product:', error);
      toast.error('Failed to add product.');
    }
  };

  const handleImageChange = (e) => {
    // Update the image state with the selected file
    setImage(e.target.files[0]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Add New Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-1">Name:</label>
            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="w-full border border-gray-300 rounded p-2" required />
          </div>
          <div>
            <label htmlFor="price" className="block mb-1">Price:</label>
            <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} className="w-full border border-gray-300 rounded p-2" required />
          </div>
          <div>
            <label htmlFor="description" className="block mb-1">Description:</label>
            <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} className="w-full border border-gray-300 rounded p-2" required />
          </div>
          <div>
            <label htmlFor="image" className="block mb-1">Image:</label>
            <input type="file" id="image" onChange={handleImageChange} className="border border-gray-300 rounded p-2" accept="image/*" required />
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddNewProduct;
