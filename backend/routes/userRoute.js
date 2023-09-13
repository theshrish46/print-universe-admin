const express = require("express");
const cors = require("cors");
const { register, login, profile } = require("../controllers/userControllers");

const router = express.Router();

router.use(express.json());
router.use(cors());

router.get("/details", (req, res) => {
  res.send("hi");
});
router.get("/profile", profile);

router.post("/register", register);
router.post("/login", login);

module.exports = router;
