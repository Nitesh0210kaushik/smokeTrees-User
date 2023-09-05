const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Address = require('../models/Address');

router.post("/signup", async(req, res) => {
    try {
        const { userName, email, password } = req.body;
        const user = new User({ userName, email, password });
        const result = await user.save();

        res.status(201).json({ message: "User registered successfully", user: result });
    } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ error: "Registration failed" });
    }
});

router.post("/login", async(req, res) => {
    try {
        if (req.body.email && req.body.password) {
            const user = await User.findOne({ email: req.body.email }).select("-password");
            if (user) {
                res.json({ user });
            } else {
                res.status(404).json({ error: "User not found" });
            }
        } else {
            res.status(400).json({ error: "Invalid request" });
        }
    } catch (error) {
        console.error("Error logging in:", error);
        res.status(500).json({ error: "Login failed" });
    }
});

router.post('/address', async(req, res) => {
    try {
        const { name, city, address, phoneNumber, state } = req.body;
        const addressData = new Address({ name, city, address, phoneNumber, state });
        const result = await addressData.save();

        res.status(201).json({ message: 'Address created successfully', address: result });
    } catch (error) {
        console.error('Error creating address:', error);
        res.status(500).json({ error: 'Address creation failed' });
    }
});

module.exports = router;