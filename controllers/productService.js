const productDao = require("../models/productsDAO")

const insertProduct = (req, res) => {
    const product ={
        name: req.body.name,
        price: req.body.price,
        type: req.body.type
    }

    productDao.insetProduct(product, (data) => {
        res.send({
            status: true,
            message: "The Product is added correctly"
        })
    }, err => {
        res.send({
            status: false,
            message: "The product was not added"
        })
    })
}

const consultProduct = (req, res) => {
    productDao.consultProduct((data) =>{
        if (data != null){
            res.send({
                status: true,
                data: data
            })
        }else {
            res.send({
                status: false,
                message: "Data Base is empty"
            })
        }
    })
}

const deleteProduct = (req, res) => {
    productDao.deleteProduct(req.params.id, (data) => {
        res.send({
            status: true,
            message: "Was deleted correctly" + req.params.id
        })
    }, err => {
        res.send({
            status: false,
            message: "Was deleted incorrect" + err
        })
    })
}

const updateProduct = (req, res) => {
    let product = {
        id: req.params.id,
        name: req.body.name,
        price: req.body.price,
        type: req.body.type
    }

    productDao.updateProduct(product, (data) => {
        res.send({
            status: true,
            message: "Was updated correctly"
        })
    }, err => {
        res.send({
            status: false,
            message: "Was updated incorrect"
        })
    })
}

module.exports = {
    insertProduct,
    consultProduct,
    deleteProduct,
    updateProduct
}