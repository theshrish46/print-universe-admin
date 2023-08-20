const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const register = async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    if (!(userName && email && password)) {
      res.status(401).send('All the fields are compulsory');
    }
    const userExist = await User.findOne({ email });
    if (userExist) {
      res.status(402).send('User already Exists');
    }
    const user = await User.create({
      name: userName,
      email: email,
      password: bcrypt.hashSync(password, 5),
    });
    const token = jwt.sign({ userName, id: user._id }, process.env.JWT_SECRET);
    res.status(201).send(userName, email, token);
  } catch (error) {
    console.log('New Error Register Controller ' + error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      res.status(404).send('User doesnot exist');
    }
    if (user && bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email, id: user._id }, process.env.JWT_SECRET);
      user.password = undefined;
      res.status(201).json({ user: user.name, token: token });
    } else {
      console.log('Wrong password');
    }
  } catch (error) {
    console.log('Login Error User Controller ' + error);
  }
};

module.exports = { register, login };
