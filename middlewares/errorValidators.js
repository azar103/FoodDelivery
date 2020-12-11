const { body, validationResult } = require("express-validator");
const loginValidator = () => [
  body("email", "the email is not valid").isEmail(),
  body("password", "password must contain at least 6 characters").isLength({
    min: 5,
    max: 10,
  }),
];

const registerValidator = () => [
  body("email", "the email is not valid").isEmail(),
  body("password", "password must contain at least 6 characters").isLength({
    min: 6,
    max: 10,
  }),
  body("name", "name field is not empty").notEmpty(),
];
const errorValidators = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).send({
      errors: errors.array().map((error) => ({
        msg: error.msg,
      })),
    });
  }
  next();
};

module.exports = {
  errorValidators,
  loginValidator,
  registerValidator,
};
