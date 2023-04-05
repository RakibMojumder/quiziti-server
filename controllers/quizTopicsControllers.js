const QuizTopics = require('../models/quizTopicsModel');

const getQuizTopics = async (req, res) => {
    try {
        const quizTopics = await QuizTopics.find({});
        return res.json({
            success: true,
            message: "Successfully got the Topics",
            quizTopics
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
};

const getSingleQuizTopic = async (req, res) => {
    try {
        const id = req.params.id;
        const query = { _id: id };
        const topic = await QuizTopics.findOne(query);
        res.json({
            success: true,
            message: "Successfully got the topic",
            topic
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}


module.exports = { getQuizTopics, getSingleQuizTopic };