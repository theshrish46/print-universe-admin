const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const conn = mongoose.connect(process.env.mongo_url);

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log(email, password);
  
  res.status(200).json({ name: email, password: password });
});

app.post('/register', (req, res) => {
  const { userName, email, password } = req.body;
  console.log(userName, password, email);
  res.status(201).json({ userName, password, email });
});

app.listen(process.env.PORT, () => {
  console.log('Server running at 8000');
});
