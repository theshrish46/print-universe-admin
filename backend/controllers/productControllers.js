require("dotenv").config();

const Product = require("./../models/Product");

const createProduct = async (req, res) => {
  console.log(req.body);
  console.log(req.file);
  return res.json({ message: "ok" });
};

const productDetails = (req, res) => {
  res.send("ok get");
};

module.exports = { createProduct, productDetails };
