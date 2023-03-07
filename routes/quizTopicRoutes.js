const express = require('express');
const { getQuizTopics, getSingleQuizTopic } = require('../controllers/quizTopicsControllers');
const router = express.Router();


router.get('/quizTopics/:id', getSingleQuizTopic);
router.get('/quizTopics', getQuizTopics);

module.exports = router;