const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const Product = require("./../models/Product");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_ID,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const createProduct = async (req, res) => {
  const { productName, productDesc, price, productCategory, productSlug } =
    req.body;

  const parsePrice = (priceStr) => {
    const numericPrice = parseFloat(priceStr);
    return isNaN(numericPrice) ? null : numericPrice;
  };

  const numericPrice = parsePrice(price);
  if (!(productName, productDesc, price, productCategory, productSlug)) {
    return res.send("invalid request");
  }
  if (!req.file) {
    return res.status(401).json({ msg: "Please upload an image file." });
  }
  cloudinary.uploader.upload(
    req.file.path,
    { folder: "/test-folder/images-test-one/" },
    async (error, result) => {
      if (error) {
        console.log("-------------", error);
      }
      console.log(result);
      const productDoc = await Product.create({
        productName,
        productDescription: productDesc,
        price: numericPrice,
        productCategory,
        productSlug,
        images: result.secure_url,
      });
      await productDoc.save();
      return res.json({ product: productDoc });
    }
  );
};

const productDetails = (req, res) => {
  res.send("ok get");
};

module.exports = { createProduct, productDetails };
