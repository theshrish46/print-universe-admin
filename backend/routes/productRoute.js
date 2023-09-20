const express = require("express");
const router = express.Router();
const multer = require("multer");

const {
  createProduct,
  productDetails,
} = require("../controllers/productControllers");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

router.post("/create-product", upload.single("image"), createProduct);
router.get("/details", productDetails);

module.exports = router;
