const dotenv = require("dotenv");

dotenv.config()

module.exports = {
    //TODO -------------- check below
    //PORT: process.env.PORT || 3001,
    MONGO_CONNECTION_URL:
    'mongodb+srv://m1000:m1000@cluster0.cgvq9.mongodb.net/Products?retryWrites=true&w=majority',
   
  };