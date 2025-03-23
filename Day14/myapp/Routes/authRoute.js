const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controllers/authController');
const {jobSeekerValidator, loginValidator} = require('../middleware/authValidator');
const companyRoute = require("./companyRoute.js")


router.use('/company', companyRoute);
router.post('/register', jobSeekerValidator, register);
router.post('/login', loginValidator , login);
router.get('/logout', logout);

module.exports = router;