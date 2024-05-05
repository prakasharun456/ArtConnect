import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify'; // Assuming you are using react-toastify for notifications
import Modal from './Modal';
const ManageArtisans = () => {
  const [sellers, setSellers] = useState([]);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    password: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedSellerId, setSelectedSellerId] = useState('');

  const fetchSellers = async () => {
    try {
      const response = await axios.get('http://localhost:3001/sellers');
      setSellers(response.data);
    } catch (error) {
      console.error('Error fetching sellers:', error);
      toast.error('Failed to fetch sellers.');
    }
  };

  useEffect(() => {
    fetchSellers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateSeller = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    try {
      await axios.put(`http://localhost:3001/sellers/${selectedSellerId}`, formData);
      // Update the Seller list after successful update
      const updatedSellers = sellers.map(seller => {
        if (seller._id === selectedSellerId) {
          return { ...seller, ...formData };
        }
        return seller;
      });
      setSellers(updatedSellers);
      setShowModal(false);
      toast.success('Seller updated successfully.');
    } catch (error) {
      console.error('Error updating seller:', error);
      toast.error('Failed to update seller.');
    }
  };

  const openUpdateModal = (sellerId) => {
    const selectedSeller = sellers.find(seller => seller._id === sellerId);
    if (selectedSeller) {
      setFormData(selectedSeller);
      setSelectedSellerId(sellerId);
      setShowModal(true);
    }
  };

  const handleDeleteSeller = async (sellerId) => {
    try {
      await axios.delete(`http://localhost:3001/sellers/${sellerId}`);
      // Remove the deleted user from the user list
      setSellers(sellers.filter(seller => seller._id !== sellerId));
      toast.success('Seller deleted successfully.');
    } catch (error) {
      console.error('Error deleting seller:', error);
      toast.error('Failed to delete seller.');
    }
  };

  return (
    <section id="user-list" className="my-3 mx-5">
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className='bg-yellow-500 text-white border-b border-gray-300'>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Shop Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone number</th>
            <th className="px-4 py-2">City</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {sellers.map((seller,index) => (
            <tr key={index} className="border">
              <td className="px-4 py-2">{seller.Name}</td>
              <td className="px-4 py-2">{seller.shopName}</td>
              <td className="px-4 py-2">{seller.email}</td>
              <td className="px-4 py-2">{seller.phone}</td>
              <td className="px-4 py-2">{seller.city}</td>
              <td className="px-4 py-2">

              <button onClick={() => openUpdateModal(seller._id)} className="bg-blue-500 hover:bg-blue-600 text-white  py-1 px-3 rounded-md mr-2">
                  Update
                </button>
                 <button onClick={() => handleDeleteSeller(seller._id)} className="bg-red-500 hover:bg-red-600 text-white py-1  mt-2 px-3 rounded-md">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2 className="text-xl font-semibold mb-4">Update Artisan</h2>
          <form onSubmit={handleUpdateSeller}>
            <div className="mb-4">
              <label htmlFor="Name" className="block text-gray-700">Name:</label>
              <input type="text" id="Name" name="Name" value={formData.Name} onChange={handleChange} className="border-gray-300 border rounded-md px-3 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="shopName" className="block text-gray-700">Shop Name:</label>
              <input type="text" id="shopName" name="shopName" value={formData.shopName} onChange={handleChange} className="border-gray-300 border rounded-md px-3 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input type="text" id="email" name="email" value={formData.email} onChange={handleChange} className="border-gray-300 border rounded-md px-3 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-gray-700">Phone number:</label>
              <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="border-gray-300 border rounded-md px-3 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="city" className="block text-gray-700">City:</label>
              <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className="border-gray-300 border rounded-md px-3 py-2 w-full" />
            </div>
            {/* Add other form fields for updating user */}
            <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
              Update
            </button>
          </form>
        </Modal>
      )}

    </section>
  );
};

export default ManageArtisans;
