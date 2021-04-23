const mongoose = require("mongoose"); 
mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
    productId : String,
    category: String,
    productName : String,
    productModel : String,
    price : Number,
    quantity : Number
  }
);

const product = mongoose.model("product", productSchema);
module.exports = product