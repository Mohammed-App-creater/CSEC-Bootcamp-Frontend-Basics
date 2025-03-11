const JobSeeker = require("../Model/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const register = async (req, res) => {
  try {
    const { email } = req.body;
    const existingUser = await JobSeeker.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const newJobSeeker = new JobSeeker(req.body);
    await newJobSeeker.save();
    res.status(201).json({ message: "Registration successful" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Registration failed", error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const jobSeeker = await JobSeeker.findOne({ email });
    if (!jobSeeker) {
      return res.status(400).json({ message: "User not found" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      jobSeeker.password
    );
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const accessToken = jwt.sign(
      { email: jobSeeker.email, id: jobSeeker._id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10s" }
    );
    const refreshToken = jwt.sign(
      { email: jobSeeker.email, id: jobSeeker._id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: 'None',
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });

    res.status(200).json({ accessToken });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

const logout = (req, res) => {
  console.log(req.headers);
  res.clearCookie("refreshToken", {
    sameSite: 'None',
    secure: true,
    httpOnly: true,
  });
  console.log(req.headers);

  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = { register, login, logout };
