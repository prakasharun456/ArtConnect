import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  {
    name: "Mud Pots",
    description: "Mud pots can be utilized for therapeutic purposes due to their mineral-rich mud, offering benefits such as natural skin exfoliation, improved circulation, and relief from certain skin conditions",
    image: "./products/product1.jpg" ,
    price:"299"
  },
  {
    name: "Basket",
    description: "A wooden basket, handcrafted with intricate detail, perfect for adding rustic charm to any home decor or organizing essentials with natural elegance.",
    image: "./products/product2.jpg" ,
    price:"499"
  },
  {
    name: "Thanjavur toys",
    description: "Originating from the town of Thanjavur in Tamil Nadu, These Toys are known for their vibrant colors and craftsmanship, cherished for their artistic value and historical significance.",
    image: "./products/product3.jpg" ,
    price:"199"
  },
  {
    name: "Handmade toys",
    description: "Meticulously crafted handmade wooden toys, designed to inspire creativity and foster developmental skills in children while supporting artisan craftsmanship.",
    image: "./products/product4.jpg" ,
    price:"250"
  },
  {
    name: "Wooden basket",
    description: "A wooden basket, crafted with intricately woven strips of wood, provides both rustic charm and practical functionality for storage and decor", 
     image: "./products/product5.jpg" ,
     price:"320"
  },
  {
    name: "Bamboo cups",
    description: "Bamboo cups, eco-friendly alternatives to traditional plastic or glassware, offer a sustainable and biodegradable option for enjoying beverages while also promoting environmental conservation.",
   image: "./products/product6.jpg" ,
   price:"150"
  },
  {
    name: "Hanging chairs",
    description: "Hanging chairs are like swings for sitting. They're comfy and fun seats that hang from ropes or chains, giving you a cozy spot to relax indoors or outdoors.",
      image: "./products/product8.jpg" ,
      price:"2299"
  },
  {
    name: "Toys",
    description: "Wooden traditional statues are carved sculptures made from wood that depict figures from culture or religion. They are crafted by hand and are important symbols of tradition and artistry.",
     image: "./products/product10.jpg" ,
     price:"180"
  }
];

const Story = () => {
  return (
<>

<section id="products" className="bg-gray-100 pt-20">
        <div className="container mx-auto md:mx-3">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="products-card bg-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 duration-300 hover:bg-gray-200 relative">
                <img src={product.image} alt={`Product ${index + 1}`} className="mx-auto mb-4 products-image" />
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="products-description">
                  <h3 className='text-xl pt-3 text-center text-yellow-500 font-bold'>{product.name}  </h3>
                  <p className="text-gray-800 py-5">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center my-3">
          <button className="bg-red-500 hover:bg-red-600 m-4 p-3 rounded-full py-2 font-bold text-white">
           <Link to="/shop">
            Explore more
            </Link> 
          </button>
        </div>
      </section>
</>
  )
}

export default  Story;
