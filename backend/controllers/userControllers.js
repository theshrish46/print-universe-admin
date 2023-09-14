const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const register = async (req, res) => {
  console.log(req.body);
  const { username, useremail, password } = req.body;
  console.log(username, useremail, password);
  if (!(username && useremail && password)) {
    return res.json({ messege: "Both the fields are necessary" });
  }
  try {
    const existingUser = await User.findOne({ email: useremail });
    if (existingUser) {
      return res.send("user already exist");
    }

    const hashedPassword = await bcrypt.hashSync(password, 10);
    console.log(hashedPassword);

    const userDoc = await User.create({
      name: username,
      email: useremail,
      password: hashedPassword,
    });

    const response = await userDoc.save();

    const token = await jwt.sign({ userId: userDoc._id }, process.env.JWT_KEY, {
      expiresIn: "1h",
    });

    return res.status(201).json({ token: token });
  } catch (error) {
    console.log(error);
    return res.status(401).send("client error");
  }
};

const login = async (req, res) => {
  const { useremail, password } = req.body;
  console.log(useremail, password);

  if (!(useremail, password)) {
    return res.status(401).send("all the fields are important");
  }

  try {
    const user = await User.findOne({ email: useremail });
    console.log(user);
    if (!user) {
      return res.status(402).send("user doesn't exist");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send("authentication failed");
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_KEY, {
      expiresIn: "1h",
    });
    user.password = null;

    return res.status(200).json({ token: token, user: user });
  } catch (error) {
    console.log(error);
    return res.status(400).send("error occured");
  }
};

const profile = async (req, res) => {
  const { username, useremail, password } = req.body;
  try {
    const user = await User.findOne({ email: useremail });
    if (!user) return res.send("No user found");
  } catch (error) {
    console.log(error);
  }
  res.send("ok");
};

module.exports = { register, login, profile };
