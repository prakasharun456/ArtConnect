import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import logo from '../../components/style/artlogo.png';
import Snav from '../SellerPage/Snav';
import Lnav from '../../components/Shopping/Lnav';

function OrderConfirmationPage() {
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [paymentMode, setPaymentMode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Making API call to register the order
      const response = await axios.post('http://localhost:3001/orders', {
        customerName,
        phoneNumber,
        deliveryAddress,
        landmark,
        city,
        pincode,
        paymentMode,
      });
      
      console.log(response.data);
      toast.success('Order Placed successfully!', { position: 'top-right', autoClose: 1500 });
      // Handle success, navigate, or show a success message
    } catch (error) {
      console.error("Error:", error);
      toast.error('Failed to add product.');
      // Handle error, show an error message, or retry
    }
  };

  return (
    <> 
    <Lnav/> 
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="max-w-md w-full mt-8 p-6 bg-gray-100 rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 font-semibold">Customer Name:</label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Phone Number:</label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-semibold">Delivery Address:</label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="text"
              value={deliveryAddress}
              onChange={(e) => setDeliveryAddress(e.target.value)}
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 font-semibold">Landmark:</label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">City:</label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-2 font-semibold">Pincode:</label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                type="text"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block mb-2 font-semibold">Payment Mode:</label>
              <select
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                value={paymentMode}
                onChange={(e) => setPaymentMode(e.target.value)}
                required
              >
                <option value="">Select Payment Mode</option>
                <option value="credit_card">Credit Card</option>
                <option value="debit_card">Debit Card</option>
                <option value="paypal">PayPal</option>
                <option value="cash_on_delivery">Cash on Delivery</option>
              </select>
            </div>
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Confirm Order
          </button>
        </form>
      </div>
    </div>
    </>
  );
}

export default OrderConfirmationPage;
