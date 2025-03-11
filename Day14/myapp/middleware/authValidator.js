const { body } = require('express-validator');

const jobSeekerValidator = [
    body('firstName').isString().notEmpty(),
    body('lastName').isString().notEmpty(),
    body('email').isEmail().notEmpty(),
    body('password').isString().notEmpty(),
];

const loginValidator = [
    body('email').isEmail().notEmpty(),
    body('password').isString().notEmpty()
];

module.exports = {jobSeekerValidator, loginValidator};