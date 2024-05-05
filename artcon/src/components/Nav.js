import { useState } from "react";
import Logo from './style/artlogo.png';
import { BsCart2 } from "react-icons/bs";
import { HiAnnotation } from "react-icons/hi"; // Removed unused import
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";



const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Services",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Products",
      icon: <PhoneRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <ShoppingCartRoundedIcon />,
    },
  ];

  return (
    <nav className="nav flex justify-between items-center py-4 px-8 bg-white shadow-md">
      <div className="flex items-center">
        <img src={Logo} alt="Logo" className="w-10 h-10 mr-2" />
        <span className="text-lg font-bold">ArtConnect</span>
      </div>
      <div className="hidden md:flex items-center space-x-4 navbar-links-container">
        {menuOptions.map((item, index) => (
          <a key={index} href="#" className="text-gray-600 hover:text-gray-900">
            {item.text}
          </a>
        ))}
        <div>
        <button className="primary-button w-40">Shop Now </button>
        </div>
        <BsCart2 className="w-6 h-6 navbar-cart-icon" />
      </div>
      <div className="md:hidden">
        <HiAnnotation onClick={() => setOpenMenu(true)} className="w-6 h-6" />
      </div>
      {openMenu && (
        <div className="md:hidden navbar-menu-container">
          <div className="absolute top-0 right-0 h-full w-3/4 bg-white shadow">
            <div className="flex justify-end">
              <button onClick={() => setOpenMenu(false)} className="p-4">
                Close
              </button>
            </div>
            <div className="flex flex-col items-center mt-8">
              {menuOptions.map((item, index) => (
                <a key={index} href="#" className="text-gray-600 hover:text-gray-900 py-2">
                  {item.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
