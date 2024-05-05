import React, { useState } from 'react';
import ManageOrders from './ManageOrders';
import AddProducts from './Addproducts'; // Corrected import name
import Snav from './Snav';

function SellerPage() {
  const [selectedSection, setSelectedSection] = useState('addProducts');

  return (
    <>
      <Snav />
      <div className="flex "> {/* Set flex and h-screen on parent div */}
        <div className="sidebar bg-blue-300 py-3 px-5 " style={{height:'91vh',position:'sticky',top:70, background: '#F0D725'}}> {/* Added h-screen, overflow-y-auto, and flex flex-col */}
          <h2 className='text-xl font-bold'>Seller Dashboard</h2>
          <ul className='text-white pt-2'>
            <li className={`p-2 rounded-md ${selectedSection === 'addProducts' ? 'bg-yellow-500' : 'hover:bg-purple-600'}`} onClick={() => setSelectedSection('addProducts')}>
              <button className="w-full h-full focus:outline-none">Add Products</button>
            </li>
            <li className={`p-2 rounded-md ${selectedSection === 'manageOrders' ? 'bg-yellow-500' : 'hover:bg-purple-600'}`} onClick={() => setSelectedSection('manageOrders')}>
              <button className="w-full h-full focus:outline-none">Manage Orders</button>
            </li>
          </ul>
        </div>
        <div className="main-content flex-grow m-2 overflow-y-auto"> {/* Added flex-grow and overflow-y-auto */}
          {selectedSection === 'addProducts' && (
            <div className="flex flex-col h-full">
              <AddProducts />
            </div>
          )}
          {selectedSection === 'manageOrders' && <ManageOrders />}
        </div>
      </div>
    </>
  );
}

export default SellerPage;
