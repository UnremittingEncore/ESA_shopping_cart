const express = require('express');
const  mongoose = require('mongoose');
const config = require('./config/index')
const routes = require('./config/routes');

const HOSTNAME = process.env.HOSTNAME || "localhost";
const PORT = process.env.PORT || 3001;

var bodyParser = require('body-parser')
require('dotenv').config()

const cart = require('./models/cart')
const {updateCart , getListItems }  = require('./controllers/cart_vc');
const { BSONRegExp } = require('bson');

const app = express()
app.use(bodyParser.json())

const { MONGO_CONNECTION_URL } = config;


mongoose.connect(MONGO_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }) // Adding new mongo url parser
  .then(() => console.log("Connected to database  cluster"))
  .catch((err) => console.log(err));

routes(app);

/* #### without explicitly creating routes ####
app.get('/rest/v1/users/:uuid/cart', getListItems)
app.put('/rest/v1/users/:uuid/cart', updateCart )
*/


/* #### More data hardcoded into mongoDB collection ####
cart.create({
  userId : "100",
  productId : "12",
  quantity : 2
})
*/

app.listen(PORT, ()=>{
    console.log(`Cart connected to port ${PORT}`);
    console.log(`PUT request @ http://${HOSTNAME}:${PORT}/rest/v1/users/100/cart`);
    console.log(`GET request @ http://${HOSTNAME}:${PORT}/rest/v1/users/qa-test-user/cart`);
})