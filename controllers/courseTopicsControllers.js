const CourseTopics = require('../models/courseTopicsModel');
const getCourseTopics = async (req, res) => {
    try {
        const topics = await CourseTopics.find({});
        if (topics) {
            res.json({
                success: true,
                message: 'Successfully got topics',
                topics
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
};



const getOtherCourses = async (req, res) => {
    try {
        const id = req.params.id;
        const courses = await CourseTopics.find({ _id: { $ne: id } }).limit(4);

        if (courses) {
            res.json({ success: true, message: 'Successfully got courses', courses })
        } else {
            res.json({ success: false, message: 'Could not get courses' })
        }

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}


module.exports = { getCourseTopics, getOtherCourses };