const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name:String,
    brand:String,
    price:Number
});

// Creating Model
module.exports = mongoose.model('products',productSchema);