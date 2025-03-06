const express = require('express');
const router = express.Router();
const { createJob, getJobs } = require('../controllers/jobController');
const jobValidator = require('../middleware/validator'); 


router.route('/')
    .get(getJobs)
    .post(jobValidator, createJob); 
    
module.exports = router;
