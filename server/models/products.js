const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  shopName:String,
  shopLocation:String,
  imageUrl: String 
});

const ProductsModel = mongoose.model('Product', productsSchema);

module.exports = ProductsModel;
