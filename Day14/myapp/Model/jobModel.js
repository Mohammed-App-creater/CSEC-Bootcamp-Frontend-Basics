const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const jobSchema = new Schema({
    title: { type: { type: String, required: true }, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    salary: Number,
    company: { type: String, required: true },
    date: { type: Date, default: Date.now }
});
    
const Job = mongoose.model('Job', jobSchema);
exports.Job = Job;
