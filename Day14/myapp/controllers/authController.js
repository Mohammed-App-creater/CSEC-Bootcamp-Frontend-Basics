const JobSeeker = require('../Model/userModel');


const register = async (req, res) => {
    const newJobSeeker = new JobSeeker(req.body);
    try {
        await newJobSeeker.save();
        res.status(201).send("Registration successful");
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const jobSeeker = await JobSeeker.findOne({
            email: email,
            password: password
        });
        if (jobSeeker) {
            res.status(200).send("Login successful");
        } else {
            res.status(400).send("Invalid credentials");
        }
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = { register, login };
