var express = require("express")
const productService = require("../controllers/productService")
var router = express.Router();

router.post("/registerProduct", productService.insertProduct);

router.post("/updateProduct/:id", productService.updateProduct);

router.post("/deleteProduct/:id", productService.deleteProduct);

router.get("/consultProduct", productService.consultProduct);

module.exports = router;