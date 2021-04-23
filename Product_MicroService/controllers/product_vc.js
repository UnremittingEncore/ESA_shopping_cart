
const  product  =  require('../models/product')

function ProductsList(req,res){
    product.find()
    .then((items)=>{
        return res.json({
            items : items
        })
    })
}

module.exports =   ProductsList;