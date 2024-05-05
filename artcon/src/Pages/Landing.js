import React from 'react';
// import Navbar from '../components/Nav';
import Footer from '../components/Footer';
import Imgcar from '../components/Imgcar';
import Navbar from '../components/Navbar';
import Services from '../components/OurServices';
import Story from '../components/ProductStory';
import Newproducts from '../components/Newproducts';
const Landing = () => {
  return (
    <>
      <header>
      {/* <Navbar/> */}
      <Navbar />
      </header>
      <main>
        <Imgcar/>
        <Services />
        <Newproducts />
        <Story />
      </main>
      <Footer />
    </>
  );
};

export default Landing;
