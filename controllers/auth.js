const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: "./config/.env" });

exports.signup = async (req, res) => {
  const { password, name, email } = req.body;
  let user;
  try {
    user = await User.findOne({ email });
    if (user) {
      return res.status(400).send({ msg: "User already exist!" });
    }
    user = new User({ name, email, password });
    const hashPassword = await bcrypt.hash(password, 10);
    user.password = hashPassword;
    const payload = { _id: user.id };

    const token = await jwt.sign(payload, process.env.SECRET_TOKEN, {
      expiresIn: "30d",
    });
    await user.save();
    return res.status(201).send({ user, token, msg: "signup success" });
  } catch (error) {
    return res.status(500).send({ error });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) return res.status(500).send({ msg: "bad credentials" });
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(500).send({ msg: "bad credentials" });
    }
    const payload = { _id: user.id };
    const token = await jwt.sign(payload, process.env.SECRET_TOKEN, {
      expiresIn: "30d",
    });
    return res.status(200).send({ user, token, msg: "login success" });
  } catch (error) {
    return res.status(500).send({ msg: "bad credentials" });
  }
};

exports.getAuthMe = (req, res) => {
  return res.status(200).send({
    user: req.user,
  });
};
