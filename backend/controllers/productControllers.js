const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const Product = require("./../models/Product");
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_ID,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "custom-ecommerce/products",
    format: async (req, file) => "jpg",
    public_id: (req, file) => `product-${Date.now()}`,
  },
});

const multerUpload = multer({ storage: storage }).single("productImage");

const createProduct = async (req, res) => {
  try {
    multerUpload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: "image upload failed" });
      }

      const { productName, productDesc, productCat, price, productSlug } =
        req.body;

      const product = Product.create({
        productName,
        productDesc,
        price,
        productCat,
        productSlug,
        image: req.file
      });

      await product.save();
      res.status(201).json({ message: "Product created " });
    });
  } catch (error) {
    console.log("Error : ----> ", error);
  }
};

const productDetails = (req, res) => {
  res.send("ok get");
};

module.exports = { createProduct, productDetails };
