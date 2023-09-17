const express = require("express");
const router = express.Router();
const multer = require("multer");
router.use(express.urlencoded({ extended: false }));
const upload = multer({ dest: "uploads/" });

const {
  createProduct,
  productDetails,
} = require("../controllers/productControllers");

router.post("/create-product", upload.single("image"), createProduct);
router.get("/details", productDetails);

module.exports = router;
