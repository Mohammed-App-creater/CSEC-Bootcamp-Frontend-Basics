const express = require('express');
const router = express.Router();
const { createJob, getJobs } = require('../controllers/jobController');
const jobValidator = require('../middleware/validator'); 
const verifyJWT = require('../middleware/verifyJWT');
const verifyRole = require('../middleware/verifyRole');


router.route('/')
    .get(getJobs)
    .post(jobValidator, verifyJWT, verifyRole("company"), createJob);
  
module.exports = router;
