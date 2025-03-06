const { body } = require("express-validator");

const jobValidator = [
    body("title")
        .isLength({ min: 5 })
        .withMessage("Title must be at least 5 characters long"),
    
    body("description")
        .isLength({ min: 10 })
        .withMessage("Description must be at least 10 characters long"),

    body("fullDescription.jobDescription")
        .isLength({ min: 10 })
        .withMessage("Job Description must be at least 10 characters long"),
    
    body("fullDescription.jobResponsibility")
        .isLength({ min: 1 })
        .withMessage("Job Responsibility must be at least 1  responsibility"),

    body("fullDescription.jobRequirement")
        .isLength({ min: 1 })
        .withMessage("Job Requirement must be at least 1 requirement"),
    
    body("type")
        .isIn(["Full-time", "Part-time", "Hybrid", "Internship", "Contract", "Volunteer", "Remote"])
        .withMessage("Type must be one of: Full-time, Part-time, Hybrid, Internship, Contract, Volunteer, Remote"),
    
    body("location")
        .isLength({ min: 5 })
        .withMessage("Location must be at least 5 characters long"),
    
    body("company")
        .isLength({ min: 5 })
        .withMessage("Company must be at least 5 characters long"),
    
    body("salary")
        .isNumeric()
        .withMessage("Salary must be a number"),
    
    body("currency")
        .isLength({ min: 3, max: 3 }) 
        .withMessage("Currency must be a 3-letter ISO 4217 currency code (e.g., USD, EUR)"),
    
    body("logo")
        .isURL()
        .withMessage("Logo must be a valid URL"),
    
    body("isBookMarked")
        .isBoolean()
        .withMessage("isBookMarked must be a boolean"),
    
    body("experienceLevel")
        .isIn(["Entry Level", "Mid Level", "Senior Level"])
        .withMessage("Experience Level must be either Entry Level, Mid Level, or Senior Level"),
    
    body("date")
        .optional() 
        .isISO8601()
        .withMessage("Date must be a valid ISO8601 date"),
];

module.exports = jobValidator;
