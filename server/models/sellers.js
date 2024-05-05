const mongoose = require('mongoose')
const SellersSchema = new mongoose.Schema({
    Name:String,
    shopName:String,
    email:String,
    phone:String,
    city:String,
    password:String
})

const SellersModel = mongoose.model("Sellers",SellersSchema);
module.exports = SellersModel