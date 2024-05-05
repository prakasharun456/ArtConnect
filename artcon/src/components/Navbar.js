import React, { useState } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import logo from '../components/style/artlogo.png';
import '../components/style/bg.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <>
      <div>
        <nav className="dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600" style={{ background: "linear-gradient(to right, white,grey,white)" }}>
          <div className="max-w-screen-xl mx-1 px-4 ">
            <div className="flex items-center justify-between py-3 md:py-4">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <img
                  src={logo}
                  className="h-8"
                  alt="ArtConnect Logo"
                />
                <span className="self-center text-lg md:text-2xl font-semibold whitespace-nowrap dark:text-white">
                  ArtConnect
                </span>
                <ul className="flex space-x-4 mx-5 pt-1">
                  <li>
                    <button
                      onClick={() => handleScrollToSection('home')}
                      className="text-gray-900 hover:text-gray-600"
                    >
                      Home
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleScrollToSection('products')}
                      className="text-gray-900 hover:text-gray-600"
                    >
                      Products
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleScrollToSection('services')}
                      className="text-gray-900 hover:text-gray-600"
                    >
                      Services
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleScrollToSection('contact')}
                      className="text-gray-900 hover:text-gray-600"
                    >
                      Contact
                    </button>
                  </li>
                </ul>
              </div>
              <div className="md:hidden">
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {showMenu ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    )}
                  </svg>
                </button>
              </div>
              <div
                className={`${
                  showMenu ? 'block' : 'hidden'
                } w-full md:flex md:w-auto md:order-1 justify-center md:mt-0 mt-2`}
              >
               
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
