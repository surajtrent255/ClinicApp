const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authenticate = async(req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(401).send('Access Denied');

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    } 
};

module.exports = authenticate;