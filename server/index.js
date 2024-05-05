const express = require('express');
const mongoose=require("mongoose");
const cors=require("cors");
const multer  =require('multer');
const path=require('path');
const UsersModel=require('./models/users');
const ProductsModel=require('./models/products')
const SellersModel = require('./models/sellers');
const OrdersModel = require('./models/orders');
const bcrypt = require('bcrypt');

const app=express()
app.use(express.json())
app.use(cors())
require('dotenv').config();
const PORT=process.env.PORT 
const DB_URL=process.env.Mongo_URL
mongoose.connect(DB_URL);

/* encrypted passwords using bcrypt*/
// app.post("/login",(req,res)=>{
//     const {email,password}=req.body;
//     UsersModel.findOne({email:email})
//         .then(user=>{
//               if(user){
//                   bcrypt.compare(password,user.password,(err,response)=>{
//                     if(response){
//                         res.json("Success");
//                     }
//                     else{
//                         res.json("Invalid");
//                     }
//                 })
//               }
//               else{
//                 res.json("User not found");
//               }
//         }  )
//         .catch((error)=>console.log(error));
//     })

// app.post( "/register", (req,res)=>{
//     const {firstName,lastName,email,phone,password}=req.body;
//     bcrypt.hash(password,10)
//     .then((hash)=>{
//         UsersModel.create({firstName,lastName,email,phone,password:hash})
//         .then((users) =>  res.json(users) )
//         .catch((err) =>  res.json(err)
//         );
//     }).catch((error)=>console.log(error));
// })

/* image uploading */


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/product_images'); 
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); 
    }
  });
  const upload = multer({ storage});
  
  
  
// Adding product
  app.post('/products/add', upload.single('image'), (req, res) => {
    try {
      const { name, price, description,shopName, shopLocation } = req.body;
      const imageUrl = req.file.path.replace(/\\/g, '/'); 
      ProductsModel.create({ name, price, description, shopName, shopLocation, imageUrl })
        .then(() => {
          console.log(`Added ${name} to the database`);
          res.send('Product added!')
        })
        .catch(e => {
          console.log(e);
          res.status(500).send('Error adding product');
        });
    } catch (error) {
      console.error('Error adding product:', error);
      res.status(500).send('Failed to add product.');
    }
  });
  
  // updating product
app.put('/products/:productId', async (req, res) => {
  const { productId } = req.params;
  const updatedProduct = req.body; 

  try {

    const product = await ProductsModel.findByIdAndUpdate(productId, updatedProduct, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ message: 'Failed to update product' });
  }
});


// deleting product
// Delete a product by ID
app.delete('/products/:productId', async (req, res) => {
  const { productId } = req.params;

  try {
    // Delete the product from the database
    const deletedProduct = await ProductsModel.findByIdAndDelete(productId);

    // Check if the product exists
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Return the deleted product
    res.json(deletedProduct);
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ message: 'Failed to delete product' });
  }
});


/* no  encryption */
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    UsersModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (password === user.password) {
                    res.json("Success");
                } else {
                    res.json("Invalid");
                }
            } else {
                res.json("User not found");
            }
        })
        .catch(error => console.log(error));
});

app.post("/register", (req, res) => {
    const { firstName, lastName, email, phone, address,city,password } = req.body;
    UsersModel.create({ firstName, lastName, email, phone, address,city,password })
        .then(users => res.json(users))
        .catch(err => res.json(err));
});

app.put('/users/:id', async (req, res) => {
  const userId = req.params.id;
  const { firstName, lastName, email, phone, address, city, password } = req.body;

  try {
    const user = await UsersModel.findByIdAndUpdate(userId, 
      { firstName, lastName, email, phone, address, city, password },
      { new: true } // To return the updated document
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({ message: 'User updated successfully', user });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.delete('/users/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await UsersModel.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/seller", (req, res) => {
    const { email, password } = req.body;
    SellersModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (password === user.password) {
                    res.json("Success");
                } else {
                    res.json("Invalid");
                }
            } else {
                res.json("User not found");
            }
        })
        .catch(error => console.log(error));
});

// updating product
app.put('/sellers/:id', async (req, res) => {
  const  sellerId  = req.params.id;
  const { name, shopName, email, phone, city} = req.body;

  try {

    const seller = await SellersModel.findByIdAndUpdate(sellerId,
      { name, shopName, email, phone,city},
       { new: true });
    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }
    res.json(seller);
  } catch (error) {
    console.error('Error updating seller:', error);
    res.status(500).json({ message: 'Failed to update seller' });
  }
});


app.delete('/sellers/:id', async (req, res) => {
  const sellerId = req.params.id;

  try {
    const seller = await SellersModel.findByIdAndDelete(sellerId);
    if (!seller) {
      return res.status(404).json({ error: 'Seller not found' });
    }
    res.json({ message: 'Seller deleted successfully' });
  } catch (error) {
    console.error('Error deleting seller:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post("/registerseller", (req, res) => {
    const { Name, shopName, email, phone,city,password } = req.body;
    SellersModel.create({ Name, shopName, email, phone,city,password })
        .then(users => res.json(users))
        .catch(err => res.json(err));
});


// Edit seller

// Update a seller by ID
app.put('/sellers/:sellerId', async (req, res) => {
  const { sellerId } = req.params;
  const updatedSeller = req.body; // New seller data

  try {
    // Update the seller in the database
    const seller = await SellersModel.findByIdAndUpdate(sellerId, updatedSeller, { new: true });

    // Check if the seller exists
    if (!seller) {
      return res.status(404).json({ message: 'Seller not found' });
    }

    // Return the updated seller
    res.json(seller);
  } catch (error) {
    console.error('Error updating seller:', error);
    res.status(500).json({ message: 'Failed to update seller' });
  }
});


// delete seller
// Delete a seller by ID
app.delete('/sellers/:sellerId', async (req, res) => {
  const { sellerId } = req.params;

  try {
    // Delete the seller from the database
    const deletedSeller = await SellersModel.findByIdAndDelete(sellerId);

    // Check if the seller exists
    if (!deletedSeller) {
      return res.status(404).json({ message: 'Seller not found' });
    }

    // Return the deleted seller
    res.json(deletedSeller);
  } catch (error) {
    console.error('Error deleting seller:', error);
    res.status(500).json({ message: 'Failed to delete seller' });
  }
});


app.get('/users', async (req, res) => {
    try {
      const users = await UsersModel.find(); 
      res.json(users); 
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Failed to fetch users.' }); 
    }
  });


app.get('/sellers', async (req, res) => {
    try {
      const sellers = await SellersModel.find(); 
      res.json(sellers); 
    } catch (error) {
      console.error('Error fetching sellers:', error);
      res.status(500).json({ message: 'Failed to fetch sellers.' }); 
    }
  });




// orders //
app.post("/orders", (req, res) => {
  const {customerName,phoneNumber,deliveryAddress,landmark , city,pincode,paymentMode } = req.body;
  OrdersModel.create({ customerName,phoneNumber,deliveryAddress,landmark,city, pincode, paymentMode  })
      .then(orders => res.json(orders))
      .catch(err => res.json(err));
});

// adding the product

// app.post("/products/add", (req, res) => {
//     const {name, price, description} = req.body;
//    ProductsModel.create({ name, price, description })
//       .then(() => {
//           console.log(`Added ${name} to the database`);
//           res.send('Product added!')
//       })
//       .catch(e => {
//           console.log(e);
//           res.status(500).send('Error adding product');
//       });
// });

app.delete("/products/delete/:name", (req, res) => {
    const productName = req.params.name;
    ProductsModel.findOneAndDelete({ name: productName })
        .then((deletedProduct) => {
            if (!deletedProduct) {
                return res.status(404).send('Product not found');
            }
            console.log(`Deleted product with name: ${productName}`);
            res.send('Product deleted successfully');
        })
        .catch(error => {
            console.error('Error deleting product:', error);
            res.status(500).send('Error deleting product');
        });
});



  app.get("/products", (req, res) => {                                                      
    ProductsModel.find()
    .then(users=>res.json(users))
    .catch(err=>res.json(err))
  });       

let p = path.join(__dirname,'uploads','product_images');
console.log(p);
app.use(express.static(p));

app.listen(PORT,()=>{
    console.log("server running");
})



