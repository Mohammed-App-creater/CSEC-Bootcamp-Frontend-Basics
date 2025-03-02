const { body, validator } = require("express-validator");

export const jobValidater = [
    body("title").isLength({ min: 5 }).withMessage("Title must be at least 5 characters long"),
    body("description").isLength({ min: 10 }).withMessage("Description must be at least 10 characters long"),
    body("location").isLength({ min: 5 }).withMessage("Location must be at least 5 characters long"),
    body("company").isLength({ min: 5 }).withMessage("Company must be at least 5 characters long"),
    body("salary").isNumeric().withMessage("Salary must be a number"),
    body("date").isDate().withMessage("Date must be a valid date")
];