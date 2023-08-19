const express = require('express');
const router = express.Router();
const User = require('./../models/UserModel.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { register, login } = require('./../controllers/UserController.js');

router.post('/register', register);

router.post('/login', login);

module.exports = router;
