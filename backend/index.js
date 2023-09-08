const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cors = require('cors');
require('dotenv').config();
const userRoute = require('./routes/userRoute.js');

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors());

try {
  mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('successfull');
} catch (error) {
  console.log(error);
}

app.use('/user', userRoute);

app.listen(PORT, () => {
  console.log(process.env.PORT);
});
