const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const Product = require("./../models/Product");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_ID,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const createProduct = async (req, res) => {
  if (!req.file) {
    return res.status(401).json({ msg: "Please upload an image file." });
  }
  cloudinary.uploader.upload(
    req.file.path,
    { folder: "/test-folder/images-test-one/" },
    (error, result) => {
      if (error) {
        console.log("-------------", error);
      }
      console.log(result);
      return res.json({ url: result.url });
    }
  );
};

const productDetails = (req, res) => {
  res.send("ok get");
};

module.exports = { createProduct, productDetails };
