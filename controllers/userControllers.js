const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

const createUser = async (req, res) => {
    try {
        const userInfo = req.body;
        delete userInfo.confirmPassword;
        const isUserExits = await Users.findOne({ email: userInfo.email });
        if (isUserExits) return res.json({ success: false, message: "This email already exits" });

        bcrypt.hash(userInfo.password, saltRounds, async (err, hash) => {
            const result = await Users.create({
                username: userInfo.username, email: userInfo.email, password: hash
            });
            if (result) {
                res.json({
                    success: true,
                    message: "Successfully become a user",
                })
            }
        });

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
};


const loginUser = async (req, res) => {
    try {
        const userInfo = req.body;
        const user = await Users.findOne({ email: userInfo.email });
        const isPassMatched = await bcrypt.compare(userInfo.password, user.password);
        if (!user || !isPassMatched) return res.status(400).json({ message: "Incorrect username or password" });
        const payload = {
            id: user._id,
            email: user.email
        }

        const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3d' });
        delete userInfo.password;
        userInfo.name = user.username;
        res.json({
            success: true,
            message: 'Successfully logged in',
            token: "Bearer " + token,
            userInfo
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}


module.exports = { createUser, loginUser };