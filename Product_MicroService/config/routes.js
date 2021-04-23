'use strict';

const ProductsList = require('../controllers/product_vc');

module.exports = function(app) {
   app.route('/rest/v1/products')
       .get(ProductsList);
};