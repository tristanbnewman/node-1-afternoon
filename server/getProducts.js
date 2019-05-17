const products = require("../products.json")
const getProducts = (req, res) =>{
    let filteredProducts = []

    if(req.query.price){
        filteredProducts = products.filter((product)=>{
            return product.price >= +req.query.price
        })
        res.json({filteredProducts})
        res.status(200).send(filteredProducts)
    }

    res.json({products})
}

module.exports = getProducts