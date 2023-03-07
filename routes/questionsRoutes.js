const express = require('express');
const passport = require('passport');
const getQuestions = require('../controllers/questionsControllers');
const router = express.Router();

// router.get('/questions/:id', getQuestions);
router.get('/questions/:id', passport.authenticate('jwt', { session: false }), getQuestions);
module.exports = router;


// app.get('/quiz', passport.authenticate('jwt', { session: false }),
//     function (req, res) {
//         res.send({ success: true });
//     })