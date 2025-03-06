const express = require('express');
const router = express.Router();
const logger = require('../middleware/logger.js');


router.use((req, res, next) => {
    let origin = req.get('origin') || req.get('referer') || 'Unknown Origin'; // First try Origin, then Referer
    origin = origin === 'null' ? 'Unknown Origin' : origin;  // Handle 'null' cases
    logger(`${req.method} - ${req.originalUrl} - Origin: ${origin}`, 'requestsLog');
    next();
});

module.exports = router;