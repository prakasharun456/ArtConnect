import React from 'react';
const servicelist=[
  {
    name:"Online Shopping",
    description:"Browse through our vast collection of handcrafted products and shop conveniently online."
  },
  {
    name:"No Intermediate charges",
    description:"Ensuring the economic sustainablity of artisans through direct selling of products"
  },
  {
    name:"Customer Support",
    description:"Get instant assistance with our customer support team. We are always here to help you out."
  },
  {
    name:"Customizable Products",
    description:"Personalize your purchases with our customizable options, tailored to your preferences and style."
  }
]

const Services = () => {
  return (
    <>
    <section id="services" className="bg-gray-100 py-20">
      {/* <img src={bg2} */}
      <div className="container mx-auto">
      <div className="bg-green-100 py-2 mb-5 overflow-hidden">
            <div className="marquee">
              <span className="font-semibold text-blue-900 block inline-block animate-marquee">
                Handcrafted products promote traditional craftsmanship and support local artisans.
              </span>
            </div>
          </div>
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-400">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {servicelist.map((service, serviceno) => (
              <div key={serviceno} className="service-card bg-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 duration-300 hover:bg-gray-200 relative">
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <div className="service-description">
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
            </div>
      </div>
    </section>
    <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          display: inline-block;
          animation: marquee 14s linear infinite;
        }
      `}</style>
   
     </>
  );
};

export default Services;

/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 duration-300 hover:bg-gray-200">
            <div className="text-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
  <circle cx="10" cy="10" r="8" />
</svg>
{/* <img src='../Assets/images/onlineshop.jpg' ></img> */

//               <h3 className="text-xl font-semibold mb-2">Online Shopping</h3>
//               <p className="text-gray-600">Browse through our vast collection of handcrafted products and shop conveniently online.</p>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 duration-300 hover:bg-gray-200">
//             <div className="text-center mb-6">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
//   <path fillRule="evenodd" d="M2 2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V2zm7 0a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V2zm0 7a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1h-2a1 1 0 01-1-1V9zM2 9a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 01-1 1H3a1 1 0 01-1-1V9z" clipRule="evenodd" />
// </svg>

//               <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
//               <p className="text-gray-600">Our dedicated customer support team is available 24/7 to assist you with any inquiries or issues.</p>
//             </div>
//           </div>
//           <div className="bg-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 duration-300 hover:bg-gray-200">
//             <div className="text-center mb-6">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
//   <path fillRule="evenodd" clipRule="evenodd" d="M5.5 16.25c0 .414.336.75.75.75h7c.414 0 .75-.336.75-.75v-7c0-.414-.336-.75-.75-.75h-7a.75.75 0 0 0-.75.75v7zm-1-7c0-1.655 1.345-3 3-3h7c1.655 0 3 1.345 3 3v7c0 1.655-1.345 3-3 3h-7c-1.655 0-3-1.345-3-3v-7z"/>
//   <path d="M11.5 5.75a.75.75 0 1 0-1.5 0v4.5a.75.75 0 0 0 1.5 0v-4.5z"/>
// </svg>
        //       <h3 className="text-xl font-semibold mb-2">Customizable Products</h3>
        //       <p className="text-gray-600">Personalize your purchases with our customizable options, tailored to your preferences and style.</p>
        //     </div>
        //   </div>
        // </div> */}
