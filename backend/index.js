const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const cors = require("cors");
require("dotenv").config();

const userRoute = require("./routes/userRoute.js");
const productRoute = require("./routes/productRoute.js");

const app = express();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

try {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("successfull");
} catch (error) {
  console.log(error);
}

app.use("/user", userRoute);
app.use("/product", productRoute);

app.listen(PORT, () => {
  console.log(`http://localhost:${process.env.PORT}/product/details`);
});
