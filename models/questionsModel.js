const mongoose = require('mongoose');
const questionsSchema = new mongoose.Schema({
    id: String,
    title: String,
    image: String,
    questions: Object
});

module.exports = new mongoose.model('questions', questionsSchema);