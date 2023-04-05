const mongoose = require('mongoose');

const coursesSchema = new mongoose.Schema({
    courseId: { type: String, required: true },
    courseTitle: { type: String, required: true },
    instructor: [{ img: String, name: String }],
    image: { type: String, required: true },
    price: { type: String, required: true },
    enrolled: { type: String, required: true },
    recordClass: { type: String, required: true },
    liveClass: { type: String, required: true },
    quiz: { type: String, required: true },
    assignment: { type: String, required: true },
    milestones: [{ _id: String, name: String, modules: [{ _id: String, title: String }] }]
}, { timestamps: true });


module.exports = new mongoose.model('courses', coursesSchema);