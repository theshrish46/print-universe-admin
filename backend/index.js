const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('./models/UserModel');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.mongodburl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cors());

const salt = bcrypt.genSaltSync(5);

app.post('/register', async (req, res) => {
  const { userName, email, password } = req.body;
  try {
    const userDoc = await UserModel.create({
      name: userName,
      email: email,
      password: bcrypt.hashSync(password, salt),
    });
    res.status(201).json(userDoc);
  } catch (error) {
    console.log(error);
  }
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  res.status(200).json({ name: email, password: password });
});

app.listen(process.env.PORT, () => {
  console.log('Server running at 8000');
});
