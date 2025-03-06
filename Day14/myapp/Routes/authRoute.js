const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');
const {jobSeekerValidator, loginValidator} = require('../middleware/authValidator');

router.post('/register', jobSeekerValidator, register);
router.post('/login', loginValidator , login);

module.exports = router;