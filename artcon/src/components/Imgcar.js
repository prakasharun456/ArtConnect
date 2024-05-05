import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import '../components/style/bg.css'; // Import CSS file for additional styling if needed
import bg2 from '../components/style/hero.jpg';
import bg from '../components/style/pic.jpg';

const Imgcar = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <>
   
    <div className="carousel-wrapper" style={{margin: "8vh 2vw",padding:0}}>
      <Slider {...settings} >
        <div className="slide">
          <img src={bg2} className="carousel-image bgi" alt="slide 1"/>
          <div className="slide-content ">
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-8 text-center">Empowering Rural artisans work!</h2>
            <h2 className="text-2xl md:text-xl text-white font-bold mb-12 text-center">Explore the tradition and culture of Tamilnadu's rural places.</h2>
          
          </div>
          <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 rounded-full" 
      style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
      <Link to="/shop">
        Shop Now
      </Link>
    </button>
        </div>
        <div className="slide">
  <img src={bg} className="carousel-image bgi" alt="Background  for slide 2" />
  {/* <div className='slide-content' style={{ position: 'relative' }}> */}
  <div className="slide-content ">
  <h2 className="text-4xl md:text-5xl text-white font-bold mb-8 text-center">Empowering Rural artisans work!</h2>
            <h2 className="text-2xl md:text-xl text-white font-bold mb-12 text-center">Explore the tradition and culture of Tamilnadu's rural places.</h2>
          
   
  </div>
</div>
      </Slider>
    </div>
    </>
  );
};

export default Imgcar;
