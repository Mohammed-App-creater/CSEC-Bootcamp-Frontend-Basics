const { body } = require("express-validator");

const registerValidator = [
    body("companyName").isString().isLength({ min: 3 }),
    body("industry").isString().isLength({ min: 3 }),
    body("location").isString().isLength({ min: 3 }),
    body("contactPersonName").isString().isLength({ min: 3 }),
    body("contactEmail").isEmail(),
    body("contactPhone").isString().isLength({ min: 3 }),
    body("description").isString(),
    body("longDescription").isString(),
    body("logo").isString().default(""),
    body("companyEmail").isEmail(),
    body("password").isString().isLength({ min: 6 }),
    body("linkedin").isString(),
    body("twitter").isString(),
    body("facebook").isString(),
  ];

const loginValidator = [
  body("email").isEmail(),
  body("password").isString().isLength({ min: 6 })
];
 
module.exports = { registerValidator, loginValidator };