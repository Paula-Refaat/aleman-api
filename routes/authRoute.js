const { contactUS } = require("../services/authServices");

const {
  contactUSValidator,
} = require("../utils/validators/authValidator");

const router = require("express").Router();

router.post("/contactUs", contactUSValidator, contactUS);

module.exports = router;
