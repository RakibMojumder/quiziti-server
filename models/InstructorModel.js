const mongoose = require('mongoose');
const instructorSchema = mongoose.Schema({
    name: String,
    title: String,
    image: String,
    info: String
});

module.exports = mongoose.model('instructors', instructorSchema);