const express = require("express");
const cors = require("cors");
const router = express.Router();
router.use(cors());

const {
  createProduct,
  productDetails,
} = require("../controllers/productControllers");

const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const memoryUpload = require({ storage: multer.memoryStorage() });
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "duyfnsket",
  api_key: "359358777548613",
  api_secret: "vETM8Qa2dZ1N9FCnZ6PjeGNGLzU",
});

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_ID,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "custom-ecommerce/products",
    format: async (req, file) => "jpg",
    public_id: (req, file) => `product-${Date.now()}`,
  },
});

const upload = multer({ storage: storage });

router.post("/create-product", memoryUpload.single("image"), createProduct);
router.get("/details", productDetails);

module.exports = router;
