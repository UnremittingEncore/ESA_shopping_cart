'use strict';

const controller = require('../controllers/cart_vc');

module.exports = function(app) {
    app.route('/rest/v1/users/:uuid/cart')
       .get(controller.getListItems);
    app.route('/rest/v1/users/:uuid/cart')
       .put(controller.updateCart);
};