const products = require("../products.json")
const getProduct = (req, res) =>{
    const product = products.find((product)=>{
        return product.id === +req.params.id
    })
    if(!product){
        res.status(500).json("item not in list") 
    }
    
    res.json(product)
}

module.exports = getProduct