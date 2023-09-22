const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
    trim: true,
  },
  productDescription: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
    trim: true,
  },
  productSlug: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  images: {
    type: String,
  },
});

const Product = mongoose.model("product", productSchema);

module.exports = Product;
