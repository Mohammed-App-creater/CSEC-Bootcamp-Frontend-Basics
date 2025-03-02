const express = require('express')
const router = express.Router();
const { Job } = require('../Model/jobModel');
const { validateJob } = require('../Validation/jobValidation');
const { createJob, getJobs } = require('../controllers/jobController');

router.route('/') 
    .get( validateJob, getJobs)
    .post( validateJob, createJob);