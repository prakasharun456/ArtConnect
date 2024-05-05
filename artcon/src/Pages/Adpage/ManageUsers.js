import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import Modal from './Modal'; // Import your modal component

const UsersComponent = () => {
  const [users, setUsers] = useState([]);
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
  const [selectedUserId, setSelectedUserId] = useState('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        toast.error('Failed to fetch users.');
      }
    };

    fetchUsers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  
    try {
      await axios.put(`http://localhost:3001/users/${selectedUserId}`, formData);
      // Update the user list after successful update
      const updatedUsers = users.map(user => {
        if (user._id === selectedUserId) {
          return { ...user, ...formData };
        }
        return user;
      });
      setUsers(updatedUsers);
      setShowModal(false);
      toast.success('User updated successfully.');
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Failed to update user.');
    }
  };
  

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`http://localhost:3001/users/${userId}`);
      // Remove the deleted user from the user list
      setUsers(users.filter(user => user._id !== userId));
      toast.success('User deleted successfully.');
    } catch (error) {
      console.error('Error deleting user:', error);
      toast.error('Failed to delete user.');
    }
  };

  const openUpdateModal = (userId) => {
    const selectedUser = users.find(user => user._id === userId);
    if (selectedUser) {
      setFormData(selectedUser);
      setSelectedUserId(userId);
      setShowModal(true);
    }
  };

  return (
    <section id="user-list" className="my-3 ml-5">
      <table className=" border-collapse border border-gray-300">
        <thead>
          <tr className='bg-yellow-500 text-white border-b border-gray-300'>
            {/* <th className="px-4 py-2">User ID</th> */}
            <th className="px-4 py-2" style={{width:'200px',height:'20px'}}>Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone number</th>
            <th className="px-4 py-2" style={{ minWidth: '7vw' }}>Address</th>
            <th className="px-4 py-2">City</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id} className="border">
              {/* <td className="px-4 py-2">{user._id}</td> */}
              <td className="px-2 py-2">{user.firstName}{user.lastName}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.phone}</td>
              <td className="px-4 py-2">{user.address}</td>
              <td className="px-4 py-2">{user.city}</td>
              <td className="px-4 py-2">
                <button onClick={() => openUpdateModal(user._id)} className="bg-blue-500 hover:bg-blue-600 text-white  py-1 px-3 rounded-md mr-2">
                  Update
                </button>
                <button onClick={() => handleDeleteUser(user._id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1  mt-2 rounded-md mr-2">
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
          <h2 className="text-xl font-semibold mb-4">Update User</h2>
          <form onSubmit={handleUpdateUser}>
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700">First Name:</label>
              <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} className="border-gray-300 border rounded-md px-3 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700">Last Name:</label>
              <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="border-gray-300 border rounded-md px-3 py-2 w-full" />
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
              <label htmlFor="lastName" className="block text-gray-700">Address:</label>
              <input type="text" id="lastName" name="lastName" value={formData.address} onChange={handleChange} className="border-gray-300 border rounded-md px-3 py-2 w-full" />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700">City:</label>
              <input type="text" id="lastName" name="lastName" value={formData.city} onChange={handleChange} className="border-gray-300 border rounded-md px-3 py-2 w-full" />
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

export default UsersComponent;
