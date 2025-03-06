const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  salary: { type: Number, required: true },
  currency: { type: String, default: "USD" }, 
  description: { type: String, required: true },
  fullDescription: { 
    jobDescription: { type: String, required: true },
    jobResponsibility: { type: [String], required: true },
    jobRequirement: { type: [String], required: true }
   },
  company: { type: String, required: true },
  logo: { type: String, required: true }, 
  isBookMarked: { type: Boolean, default: false }, 
  location: { type: String, required: true },
  experienceLevel: { type: String, required: true }, 
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Job", jobSchema);
