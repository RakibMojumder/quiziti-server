const mongoose = require('mongoose');

const courseTopicSchema = mongoose.Schema({
    image: String,
    title: String,
    price: String
});

module.exports = new mongoose.model('course-topics', courseTopicSchema);

