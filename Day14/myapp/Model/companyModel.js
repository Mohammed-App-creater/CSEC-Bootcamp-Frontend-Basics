const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
  companyName: { type: String, required: true },
  industry: { type: String, required: true },
  location: { type: String, required: true },
  contactPersonName: { type: String, required: true },
  contactEmail: { type: String, required: true },
  contactPhone: { type: String, required: true },
  description: { type: String, default: "" },
  longDescription: { type: String, default: "" },
  logo: { type: String, default: "" },
  companyEmail: { type: String, required: true },
  password: { type: String, required: true },
  linkedin: { type: String, default: "" },
  twitter: { type: String, default: "" },
  facebook: { type: String, default: "" },
});


module.exports = mongoose.model("Company", companySchema);
