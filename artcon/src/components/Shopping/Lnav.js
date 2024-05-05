import React from 'react';
import logo from '../style/artlogo.png';

const Lnav = () => {
  return (
    <div className="flex items-center justify-center py-3" style={{ background: 'linear-gradient(to right, aqua,white,aqua)' ,position:'sticky',top:0}}>
      <img src={logo} alt='logo' className="h-10 mr-2" />
      <h2 className="text-xl font-bold">Artconnect</h2>
    </div>
  );
}

export default Lnav;
