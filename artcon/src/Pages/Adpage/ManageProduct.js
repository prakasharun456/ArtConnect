import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Modal from './Modal';
const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    shopName:'',
    shopLocation:'',
    image: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productResponse = await axios.get('http://localhost:3001/products');
        setProducts(productResponse.data);
      } catch (error) {
        console.error('Error fetching products:', error);
        toast.error('Failed to fetch products.');
      }
    };

    fetchProducts();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateProduct = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    try {
      await axios.put(`http://localhost:3001/products/${selectedProductId}`, formData);
      // Update the user list after successful update
      const updatedProducts = products.map(product => {
        if (product._id === selectedProductId) {
          return { ...product, ...formData };
        }
        return product;
      });
      setProducts(updatedProducts);
      setShowModal(false);
      toast.success('Product updated successfully.');
    } catch (error) {
      console.error('Error updating Product:', error);
      toast.error('Failed to update product.');
    }
  };
  const openUpdateModal = (productId) => {
    const selectedProduct = products.find(product => product._id === productId);
    if (selectedProduct) {
      setFormData(selectedProduct);
      setSelectedProductId(productId);
      setShowModal(true);
    }
  };
  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:3001/products/${productId}`);
      // Refresh products after deletion
      const updatedProducts = products.filter(product => product._id !== productId);
      setProducts(updatedProducts);
      toast.success('Product deleted successfully.'
      );
    } catch (error) {
      console.error('Error deleting product:', error);
      toast.error('Failed to delete product.');
    }
  };

  return (
    <section id="product-list" className="my-3 mx-5">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-yellow-500 text-white border-b border-gray-300">
            <th className="px-4 py-2">Name</th>
            {/* <th className="px-2 py-2" style={{width:'100px',height:'20px'}}>Product Image</th> */}
            <th className="px-4 py-2" style={{width:'300px',height:'20px'}}>Description</th>
            <th className="px-4 py-2" style={{width:'100px'}}>Price</th>
            <th className="px-4 py-2" style={{width:'100px'}}>Shop name</th>
            <th className="px-4 py-2">Shop Location</th>
            <th className="px-4 py-2">Actions</th> {/* New column for actions */}
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index} className= 'bg-gray-100' >
              <td className="px-4 py-2">{product.name}</td>
              {/* <td className="px-2 py-2"><img src={product.imageUrl} alt={product.name} style={{width: '100px', height: 'auto'}} /></td> */}
              <td className="px-4 py-2">{product.description}</td>
              <td className="px-4 py-2">{product.price}</td>
              <td className="px-4 py-2">{product.shopName}</td>
              <td className="px-4 py-2">{product.shopLocation}</td>
              <td className="px-4 py-2">
              <button onClick={() => openUpdateModal(product._id)} className="bg-blue-500 hover:bg-blue-600 text-white  py-1 px-3 rounded-md mr-2">
                  Update
                </button>
                 <button onClick={() => handleDelete(product._id)} className="bg-red-500 hover:bg-red-600 text-white py-1  mt-2 px-3 rounded-md">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
{/* Modal for Update Form */}
{showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2 className="text-xl font-semibold mb-4">Update Product</h2>
          <form onSubmit={handleUpdateProduct}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Product Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border-gray-300 border rounded-md px-3 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="price" className="block text-gray-700">Product price:</label>
              <input type="text" id="price" name="price" value={formData.price} onChange={handleChange} className="border-gray-300 border rounded-md px-3 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="description" className="block text-gray-700">Description:</label>
              <input type="text" id="description" name="description" value={formData.description} onChange={handleChange} className="border-gray-300 border rounded-md px-3 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="shopName" className="block text-gray-700">Shop name:</label>
              <input type="text" id="shopName" name="shopName" value={formData.shopName} onChange={handleChange} className="border-gray-300 border rounded-md px-3 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="shopLocation" className="block text-gray-700">Shop Location:</label>
              <input type="text" id="shopLocation" name="shopLocation" value={formData.shopLocation} onChange={handleChange} className="border-gray-300 border rounded-md px-3 py-2 w-full" />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
              Update
            </button>
          </form>
        </Modal>
      )}

    </section>
  );
};

export default ProductManagement;
