const jobSeeker = require("../Model/userModel");
const company = require("../Model/companyModel");

const verifyRole = (role) => {
  return async (req, res, next) => {
    const user = req.user;

    try {
      let userRecord;
      
      if (role === "Company") {
        userRecord = await company.findById(user.id);
      } else if (role === "jobSeeker") {
        userRecord = await jobSeeker.findById(user.id);
      } else {
        return res.status(400).send("Invalid role type");
      }

      if (!userRecord) {
        return res.status(403).send("Invalid token or user not found");
      }

      next();
    } catch (err) {
      console.error("Role verification error:", err);
      return res.status(500).send("Server error during role verification");
    }
  };
};

module.exports = verifyRole;
