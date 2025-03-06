const Job = require("../Model/jobModel");
const { validationResult } = require("express-validator");

const createJob = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const job = new Job(req.body);
    await job.save();

    res.status(201).json({ message: "Job created successfully", job });
  } catch (err) {
    if (err.name === "ValidationError") {
      return res
        .status(400)
        .json({ message: "Mongoose Validation Error", error: err.errors });
    }
    res
      .status(500)
      .json({ message: "Internal Server Error", error: err.message });
  }
};

const getJobs = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 2;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;
    const jobs = await Job.find().limit(limit).skip(skip);
    const totalJobs = await Job.countDocuments();
    return res.status(200).json({
      totalJobs: totalJobs,
      limit: limit,
      page: page,
      jobs: jobs,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createJob, getJobs };
