const express = require('express');
const getInstructor = require('../controllers/instructorControllers');
const router = express.Router();

router.get('/instructor', getInstructor);

module.exports = router;