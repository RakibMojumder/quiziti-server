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
        let userInfo = req.body;
        const user = await Users.findOne({ email: userInfo.email });

        if (!user) return res.json({ message: "Incorrect username or password" })
        const isPassMatched = await bcrypt.compare(userInfo.password, user?.password);
        if (!isPassMatched) return res.json({ message: "Incorrect username or password" });
        const payload = {
            id: user._id,
            email: user.email
        }

        const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '3d' });

        delete userInfo.password;
        userInfo.username = user.username;
        userInfo.profile = user.profile;

        // res.cookie('token', token, {
        //     maxAge: 1 * 24 * 60 * 60 * 1000, // 7d
        //     httpOnly: false,
        // })

        res.json({
            success: true,
            message: 'Successfully logged in',
            token,
            userInfo
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}


const getUserCourses = async (req, res) => {
    try {
        const email = req.query.email;
        const courses = await Users.findOne({ email }).populate('courses')

        if (courses) {
            res.json({
                success: true,
                message: 'Successfully got courses',
                data: courses
            })
        }

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}



module.exports = { createUser, loginUser, getUserCourses };