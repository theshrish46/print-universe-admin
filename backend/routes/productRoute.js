const express = require("express");
const {
  createProduct,
  productDetails,
} = require("../controllers/productControllers");
const router = express.Router();

router.post("/create-product", createProduct);
router.get("/details", productDetails);

module.exports = router;
