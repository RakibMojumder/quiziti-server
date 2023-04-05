const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    profile: {
        type: String,
        default: ''
    },
    courses: [{ type: mongoose.Types.ObjectId, ref: 'courses' }]
});

module.exports = new mongoose.model('users', userSchema)