const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const mongoose = require("mongoose");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const Product = require("./../models/Product");
const { Router } = require("express");
require("dotenv").config();

const createProduct = async (req, res) => {
  try {
    const { productName, productDesc, productCat, price, productSlug } =
      req.body;

    if (!req.fileValidationError) {
      return res.send("error file validation");
    }
    if (!req.file) {
      return res.send("file second error");
    }

    const imageBuffer = req.file.buffer;
    console.log(req.file.buffer);

    cloudinary.v2.uploader.upload(
      imageBuffer,
      { public_id: "olympic_flag" },
      (error, result) => {
        console.log(result);
      }
    );

    // const result = await cloudinary.uploader.upload(req.file.buffer);

    const product = Product.create({
      productName,
      productDesc,
      price,
      productCat,
      productSlug,
      image: result.secure_url,
    });

    await product.save();
    res.status(201).json({ message: "Product created " });
  } catch (error) {
    console.log("Error : ----> ", error);
  }
};

const productDetails = (req, res) => {
  res.send("ok get");
};

module.exports = { createProduct, productDetails };
