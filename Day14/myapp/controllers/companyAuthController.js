const Company = require("../Model/companyModel");
const bcrypt = require("bcrypt");
const { generateAccessToken } = require("./generateAccessToken");
const { generateRefreshToken } = require("./generateRefreshToken");
const dotenv = require("dotenv");
dotenv.config();

const register = async (req, res) => {
  try {
    const { companyEmail } = req.body;
    console.log(req.body)
    console.log(companyEmail)
    const existingUser = await Company.findOne({
      companyEmail,
    });
    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashedPassword;
    const newCompany = new Company(req.body);
    await newCompany.save();
    const accessToken = generateAccessToken(newCompany);
    const refreshToken = generateRefreshToken(newCompany);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 1000 * 60 * 60 * 24, // 1 day
    });
    res.status(201).json({
      message: "Registration successful",
      accessToken,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Registration failed",
      error: error.message,
    });
  }
};

const login = async (req, res) => {
  const { companyEmail, password } = req.body;
  console.log(req.body)
  try {
    const company = await Company.findOne({
      companyEmail,
    });
    if (!company) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    const isPasswordCorrect = await bcrypt.compare(password, company.password);
    if (!isPasswordCorrect) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }
    const accessToken = generateAccessToken(company);
    const refreshToken = generateRefreshToken(company);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 1000 * 60 * 60 * 24, 
    });

    res.status(200).json({
      message: "Logged in successful",
      accessToken,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

const logout = (req, res) => {
  res.clearCookie("refreshToken", {
    sameSite: "None",
    secure: true,
    httpOnly: true,
  });

  res.status(200).json({
    message: "Logged out successfully",
  });
};

module.exports = {
  register,
  login,
  logout,
};
