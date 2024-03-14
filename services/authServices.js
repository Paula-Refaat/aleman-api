const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/ApiError");
const sendEmail = require("../utils/sendEmail");

// @desc    Forgot password
// @route   POST /api/v1/auth/forgotpassword
// @access  Public
exports.contactUS = asyncHandler(async (req, res, next) => {
  // 3-Send reset code via email
  try {
    await sendEmail({
      name: req.body.name,
      email: req.body.email,
      subject: "Contact-Us",
      message: req.body.message,
    });
  } catch (err) {
    return next(new ApiError("There is an error in sending email", 500));
  }
  res
    .status(200)
    .json({ status: "Success", message: "email send Success" });
});
