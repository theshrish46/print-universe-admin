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

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).send('all fields are compulsory');
    }
    const userExist = await User.findOne({ email });
    if (!userExist) {
      res.status(401).send('User doesnot exist');
    }
    if (userExist && bcrypt.compare(password, userExist.password)) {
      const token = jwt.sign({ id: userExist._id }, 'shhh', {});
      userExist.token = token;
      res.status(201).cookie('token', token).json({
        msg: 'success',
      });
    }
  } catch (error) {
    res.status(400).json(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log('Server running at 8000');
});
