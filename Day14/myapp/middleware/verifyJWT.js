const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).send("Access denied. No token provided.");
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).send("Invalid token");
    }
    req.user = user;
    next();
  });
};

module.exports = verifyJWT;
