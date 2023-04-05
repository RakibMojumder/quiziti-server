const express = require('express');
const { getCourseTopics, getOtherCourses } = require('../controllers/courseTopicsControllers');
const router = express.Router();

router.get('/courseTopic', getCourseTopics);
router.get('/courseTopic/:id', getOtherCourses);

module.exports = router;