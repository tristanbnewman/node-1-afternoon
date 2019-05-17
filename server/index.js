const express = require("express")
const app = express()
const getProducts = require("./getProducts")
const getProduct = require("./getProduct")

app.get("/api/products", getProducts)
app.get("/api/product/:id",getProduct)

app.listen(1337,()=>{
    console.log("listening on local: 1337")
    // console.log(products)
});
//Got all of this on the first go with instructions


