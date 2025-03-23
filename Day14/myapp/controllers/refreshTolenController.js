const JobSeeker = require("../Model/userModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const refreshToken = async (req, res, ) => {
  if (!req.headers.cookie) {
    return res.status(401).send("Access denied");
  }
  const token = (req.headers.cookie).split("=")[1];
  if (!token) {
    return res.status(401).send("Access denied");
  }
  try {
    const decoded = jwt.verify(token, process.env.REFRESH_TOKEN_SECRET);
    const jobSeeker = await JobSeeker.findOne({ _id: decoded.id });
    if (!jobSeeker) {
      return res.status(404).send("User not found");
    }
    const accessToken = jwt.sign(
      { email: jobSeeker.email, id: jobSeeker._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10s" }
    );
    res.status(200).send({ accessToken });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { refreshToken };
