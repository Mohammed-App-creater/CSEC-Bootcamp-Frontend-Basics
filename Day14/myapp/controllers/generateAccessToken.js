const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
    return jwt.sign(
        {
        email: user.email,
        id: user._id,
        },
        process.env.ACCESS_TOKEN_SECRET,
        { expiresIn: "10s" }
    );
};

module.exports = { generateAccessToken };