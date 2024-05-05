import React, { useState } from 'react';
import Lnav from '../../components/Shopping/Lnav';
import ManageArtisans from './ManageArtisans'; // Import appropriate component for managing artisans
import ManageProducts from './ManageProduct'; // Import appropriate component for managing products
import ManageUsers from './ManageUsers'; // Import appropriate component for managing users

function AdminPage() {
  const [selectedSection, setSelectedSection] = useState('manageUsers');

  return (
    <>
      <Lnav/>
      <div className="flex "> {/* Set flex and h-screen on parent div */}
        <div className="sidebar  py-3 px-5 " style={{height:'91vh',width:'20vw',position:'sticky',top:70, background: '#844ec8'}}> {/* Added h-screen, overflow-y-auto, and flex flex-col */}
          <h2 className='text-xl text-white font-bold'>Admin Dashboard</h2>
          <ul className='text-white pt-2'>
          <li className={`p-2 rounded-md ${selectedSection === 'manageUsers' ? 'bg-purple-500' : 'hover:bg-purple-600'}`} onClick={() => setSelectedSection('manageUsers')}>
    <button className="w-full h-full text-white focus:outline-none">Manage Users</button>
</li>

            <li className={`p-2 rounded-md ${selectedSection === 'manageProducts' ? 'bg-purple-500' : 'hover:bg-purple-600'}`} onClick={() => setSelectedSection('manageProducts')}>
              <button className="w-full h-full  text-white  focus:outline-none">Manage Products</button>
            </li>
            <li className={`p-2 rounded-md ${selectedSection === 'manageArtisans' ? 'bg-purple-500' : 'hover:bg-purple-600'}`} onClick={() => setSelectedSection('manageArtisans')}>
              <button className="w-full h-full text-white focus:outline-none">Manage Artisans</button>
            </li>
          </ul>
        </div>
        <div className="main-content flex-grow m-2 overflow-y-auto"> {/* Added flex-grow and overflow-y-auto */}
          {selectedSection === 'manageUsers' && (
            <div className="flex flex-col h-full" style={{width:'20vw'}}>
              <ManageUsers />
            </div>
          )}
          {selectedSection === 'manageProducts' && <ManageProducts />}
          {selectedSection === 'manageArtisans' && <ManageArtisans />}
        </div>
      </div>
    </>
  );
}

export default AdminPage;
