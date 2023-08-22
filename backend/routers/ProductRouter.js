const {
  getTheProducts,
  addNewProduct,
} = require('./../controllers/ProductController.js');
const express = require('express');

const router = express.Router();

router.get('/get-products', getTheProducts);

router.post('/add-new', addNewProduct);

module.exports = router;
