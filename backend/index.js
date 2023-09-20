const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const multer = require("multer");

const userRoute = require("./routes/userRoute.js");
const productRoute = require("./routes/productRoute.js");

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `./uploads`);
  },
  filename: function (req, file, cb) {
    const customName = `${Date.now()}-${file.originalname}`;
    cb(null, customName);
  },
});

const upload = multer({ storage: storage });

try {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("successfull");
} catch (error) {
  console.log(error);
}
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_ID,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.use("/user", userRoute);
app.post("/product", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(401).json({ msg: "Please upload an image file." });
  }
  cloudinary.uploader.upload(
    req.file.path,
    { folder: "/test-folder/images-test-one/" },
    { public_id: "one_image" },
    (error, result) => {
      if (error) {
        console.log("ERROR : ------>", error);
        return res
          .status(500)
          .json({ msg: "error while uploading the image to cloudinary" });
      }
      console.log(result);
      return res.status(200).json({ msg: "ok", imgurl: result.secure_url });
    }
  );
  console.log(req.body);
  console.log(req.file);

  return res.json({ msg: "ok " });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/product/details`);
});
