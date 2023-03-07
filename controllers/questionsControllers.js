const Questions = require('../models/questionsModel');

const getQuestions = async (req, res) => {
    try {
        const id = req.params.id;
        const questions = await Questions.findOne({ id });

        res.json({
            success: true,
            message: 'Successfully got the question',
            questions
        })
    } catch (error) {
        console.log(error.message);
    }
};

module.exports = getQuestions;