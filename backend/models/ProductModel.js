const { default: mongoose } = require('mongoose');

const ProductSchema = mongoose.Schema({
  productName: { type: String, required: true, unique: true },
  productDesc: { type: String, required: true },
  productPrice: { type: String, required: true },
  onSale: { type: Boolean },
  comments: { type: String },
  featuredProduct: { type: Boolean },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
