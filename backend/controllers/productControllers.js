const multer = require("multer");
const cloudinary = require("cloudinary ");
const mongoose = require("mongoose");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const Product = require("./../models/Product");
require("dotenv").config();

const storage = new CloudinaryStorage({
    
})
