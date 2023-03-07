const mongoose = require('mongoose');

const quizTopicsSchema = new mongoose.Schema({
    title: String,
    image: String
});

module.exports = new mongoose.model('quiz-topics', quizTopicsSchema);