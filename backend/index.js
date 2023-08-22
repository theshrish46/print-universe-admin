const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('./models/UserModel');
const cookieParser = require('cookie-parser');
const User = require('./models/UserModel');

const UserRouter = require('./routers/UserRouter');
const ProductRouter = require('./routers/ProductRouter');

require('dotenv').config();

const app = express();

mongoose.connect(process.env.mongodburl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/auth', UserRouter);

app.use('/products', ProductRouter);

app.listen(process.env.PORT, () => {
  console.log('Server running at 8000');
});
