const express = require("express");
const router = express.Router();
const User = require("../db/userSchema");

router.post("/", async (req, res) => {
    const { email, password } = req.body;
 
    if (!email || !password) {
        res.status(404).json({ message: "Please fill all the fields" });
        // Issue: Sending response here and continuing without stopping
    }

    try {
        const user = await User.findOne({ email: email });

        if (!user) {
            res.status(404).json({ message: "Account does not exist" });
            // Issue: Sending response here and continuing without stopping
        }

        if (user.password !== password) {
            res.status(404).json({ message: "Invalid email or password" });
            // Issue: Sending response here and continuing without stopping
        }

        return res.status(200).json({ message: "Login successfully" });
        // Issue: Attempting to send another response here
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;
