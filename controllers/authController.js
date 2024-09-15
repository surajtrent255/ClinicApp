const ErrorHandler = require("../middlewares/errorMiddleware");
const User = require('../models/userModel');
const sendToken = require("../utility/jwtToken");
const asyncHandler = require('express-async-handler');

exports.loginUser = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    // Checks if email and password is entered by user
    if (!email || !password) {
        throw new Error("Please enter email & password")
        // return next(new ErrorHandler('Please enter email & password', 400))
    }

    // Finding user in database
    const user = await User.findOne({ email }).select('+password')

    if (!user) {
        throw new Error("Invalid Email or Password")
        // return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    // Checks if password is correct or not
    const isPasswordMatched = await user.comparePassword(password);

    if (!isPasswordMatched) {
        throw new Error("Invalid Email or Password")
        // return next(new ErrorHandler('Invalid Email or Password', 401));
    }

    sendToken(user, 200, res)
})