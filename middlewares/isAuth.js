const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config({ path: "./config/.env" });
const istAuth = async (req, res, next) => {
  try {
    const token = req.headers["authorization"];
    if (!token) return res.status(500).send({ msg: "no authorized" });
    const decoded = await jwt.verify(token, process.env.SECRET_TOKEN);
    if (!decoded) return res.status(500).send({ msg: "no authorized" });
    const user = await User.findById(decoded._id).select("-password");
    if (!user) return res.status(404).send({ msg: "No user found" });
    req.user = user;
    next();
  } catch (error) {
    return res.status(500).send({ msg: "no authorized" });
  }
};

module.exports = istAuth;
