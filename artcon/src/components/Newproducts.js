import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function NewProducts() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/products")
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    // const product_images= [
    //   {image: "./products/product1.jpg"},
    //   {image: "./products/product2.jpg"},
    //   {image: "./products/product3.jpg"},
    //   {image: "./products/product4.jpg"},
    //   {image: "./products/product5.jpg"},
    //   {image: "./products/product6.jpg"},
    //   {image: "./products/product8.jpg"},
    //   {image: "./products/product10.jpg"}
    // ]
    

    return (
     <>
     
<section id="productstory" className="bg-gray-100 py-20">
        <div className="container mx-auto md:mx-3">
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-400">Newly Added Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
            {products.map((product, index) => (
              <Link to="/shop">
              <div key={index} className="products-card py-5 bg-white rounded-lg p-8 shadow-lg transition-transform transform hover:scale-105 duration-300 hover:bg-gray-200 relative" style={{height:'30vh'}} onClick={()=>{

                
              }}>
              <img
                  src={`/server/${product.image}`}
                  alt={product.name}
                   className="mx-auto mb-4 products-image"
                  onError={(e) => console.error('Error loading image:', e)}
              />
                
                         <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <h3 className="text-xl font-semibold mb-2">Rs.{product.price}</h3>
                <div className="products-description">

                  <h3 className="text-xl font-semibold text-center text-yellow-500 mb-2">{product.name}</h3>
                  <p className="text-gray-800 mt-4">{product.description}</p>
                </div>
              </div>
              </Link>
            ))}
          </div>
        </div>
       
      </section>
     </>
    );
}

export default NewProducts;
