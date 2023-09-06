const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
const cors = require('cors');
require('dotenv').config();
const userRoute = require('./routes/userRoute.js');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log(process.env.PORT);
});
