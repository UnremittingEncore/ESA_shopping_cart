'use strict';

const controller = require('../controllers/cart_vc');

module.exports = function(app) {
    app.route('/rest/v1/users/100/cart')
       .get(controller.getListItems);
    app.route('/rest/v1/users/qa-test-user/cart')
       .put(controller.updateCart);
};