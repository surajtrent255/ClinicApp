const mongoose = require("mongoose");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  if (process.env.NODE_ENV === "DEVELOPMENT") {
    console.log(err);
    return res.json({
      message: err.message,
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
  }

  if (process.env.NODE_ENV === "PRODUCTION") {
    var isValidationError = err instanceof mongoose.Error.ValidationError;
    var validationMessage;
    if (isValidationError) {
      validationMessage = Object.values(err.errors).map(
        (value) => value.message
      );
      return res.json({
        message: validationMessage,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
      });
    }

    return res.json({
      message: err.message,
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
  }
};

module.exports = errorHandler;
