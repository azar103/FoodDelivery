const express = require("express");
const router = express.Router();
const authCtrl = require("../controllers/auth");

const {
  loginValidator,
  registerValidator,
  errorValidators,
} = require("../middlewares/errorValidators");

const istAuth = require("../middlewares/isAuth");
router.post("/signup", registerValidator(), errorValidators, authCtrl.signup);
router.post("/signin", loginValidator(), errorValidators, authCtrl.login);
router.get("/me", istAuth, authCtrl.getAuthMe);

module.exports = router;
