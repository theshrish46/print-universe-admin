const { default: mongoose } = require('mongoose');
const Product = require('../models/ProductModel');

const getTheProducts = (req, res) => {
  res.status(200).send('ok products');
};

const addNewProduct = async (req, res) => {
  const { title, desc, price } = req.body;
  try {
    if (!(title, desc, price)) {
      res.status(401).send('All the fields are compulsory');
    }
    const productdoc = await Product.findOne({ productName: title });
    if (productdoc) {
      res.send('NOt working');
    }
    const product = await Product.create({
      productName: title,
      productPrice: price,
      productDesc: desc,
    });
    res.send(product);
  } catch (error) {
    console.log(error);
  }

  res.status(201).send('ok products recieved');
};

module.exports = { getTheProducts, addNewProduct };
