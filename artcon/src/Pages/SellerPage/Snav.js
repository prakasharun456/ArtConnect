import React from 'react';
import logo from '../../components/style/artlogo.png';

const Snav = () => {
  return (
    <div className="flex items-center justify-center py-3" style={{ background: 'linear-gradient(to right, #F0E44F,white,#F0E44F)' ,position:'sticky',top:0}}>
      <img src={logo} alt='logo' className="h-10 mr-2" />
      <h2 className="text-xl font-bold">Artconnect </h2>
      <p className='pl-3 pt-1'>for Artisians</p>
    </div>
  );
}

export default Snav;
