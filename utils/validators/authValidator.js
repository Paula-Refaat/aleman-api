const { check } = require("express-validator");
const validatorMiddleware = require("../../middlewares/validatorMiddleware");


exports.contactUSValidator = [
  check("name").notEmpty().withMessage("Please enter your name"),
  check("email")
    .notEmpty()
    .withMessage("Email Reauired")
    .isEmail()
    .withMessage("Please enter a valid email address"),
  check("message").notEmpty().withMessage("Please enter your message"),
  validatorMiddleware,
];
