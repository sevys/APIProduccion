var express = require("express")
const productService = require("../../webserver/controllers/productService")
var router = express.Router();

router.post("/", productService.insertProduct);

router.post("/:id", productService.updateProduct);

router.post("/:id", productService.deleteProduct);

router.get("/", productService.consultProduct);

module.exports = router;