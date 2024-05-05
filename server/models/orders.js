const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    customerName: String,
  phoneNumber: Number,
  deliveryAddress: String,
  landmark: String ,
  city:String,
  pincode:String,
  paymentMode:String,

});

const OrdersModel = mongoose.model('Order', ordersSchema);

module.exports = OrdersModel;