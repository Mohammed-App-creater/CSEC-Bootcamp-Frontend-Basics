const Job = require('../models/jobModel');

export const createJob = async (req, res) => {
   try {
         const { title, description, location, company, salary, date } = req.body;
         const job = new Job({ title, description, location, company, salary, date });
         const savedJob = await job.save();
         res.status(201).json(savedJob);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}