const cart = require('../models/cart')
const axios  = require('axios')


const users = ["100" , "200", "300"];


var controllers = {
    updateCart: function(req, res) {
        var products = new Array()
        console.log(req.body)
        if (users.includes(req.params.uuid)){
                
            axios.get(`http://${HOSTNAME}:${PORT}/rest/v1/products`).then(response => {
            products = response.data.items
            
            let obj = products.find(o => o.productId === req.body.productId);
            if (obj) {
                if (req.body.quantity <= obj.quantity) { 
                    cart.find({ userId : req.params.uuid, productId : req.body.productId})
                    .then( item => {
                        if(item.length === 0 ){
                            var newProduct = {
                                userId : req.params.uuid,
                                productId : req.body.productId,
                                quantity : req.body.quantity
                            }
                            cart.create( newProduct)
                            res.json({
                                msg : "added item to cart",
                                newProduct : newProduct
                            })
                        }
                        else{
                            cart.findOneAndUpdate({productId : req.body.productId, userId : req.params.uuid }, {
                                $inc : { quantity : req.body.quantity}
                            }).then( item => res.json( { 
                                msg : "Cart updated Succesfully",
                                item : item
                            }))
                        }
                    }).catch(err => res.json( {err : err}))
                }
                else{
                    res.json({
                        msg : "No limited Stock Available"
                    })
                }
        
            } else{
                res.json({
                    msg : "This product is not available"
                })
            }
            }).catch( err => console.log(err))
        }
        else{
            return res.json({
                msg : "No user found"
            })
        } 
    },
    getListItems: function(req, res) {
        if (users.includes(req.params.uuid)){
            cart.find({ userId : req.params.uuid})
            .then((items)=> {
                res.json({
                    uuid : req.params.uuid,
                    items : items
                })
            })
        }
        else{
            return res.json({
                msg : "No user found"
            })
        }
    }
}

module.exports = controllers;