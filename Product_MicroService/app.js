
const express = require('express');
const  mongoose = require('mongoose');
const config = require('./config/index')
require('dotenv').config()

//const product = require('./models/product')
const ProductsList = require('./controllers/product_vc');
const app = express()

const http = require("http");

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3001;

const { MONGO_CONNECTION_URL } = config;


mongoose.connect(MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
   
    useUnifiedTopology: true,
}) // Adding new mongo url parser
.then(() => console.log("Connected to database in cluster"))
.catch((err) => console.log(err));


app.get('/rest/v1/products', ProductsList)


/*   TODO -------------
app.listen(PORT, ()=>{
    console.log(`Connected to port ${PORT}`)
})
*/


app.listen(PORT, HOSTNAME, () => {
    console.log(`Server is running at http://${HOSTNAME}:${PORT}/`);
})