const express = require('express');
const router = express.Router();
const { refreshToken } = require('../controllers/refreshTolenController');
router.get('/', refreshToken);

module.exports = router;