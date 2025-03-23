const express = require('express');
const router = express.Router();
const  { register, login, logout, } = require('../controllers/companyAuthController')
const { registerValidator, loginValidator} = require('../middleware/companyValidator')



router.post('/register', registerValidator, register );
router.post('/login', loginValidator, login )
router.get('/logout', logout);


module.exports = router;