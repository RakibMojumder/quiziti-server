const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const { createUser, loginUser, getUserCourses } = require('../controllers/userControllers');
const router = express.Router();



//----------------- GOOGLE LOG IN ---------------------
// router.get('/auth/google', passport.authenticate('google', { scope: ['profile'] }));
// router.get('/auth/google/callback',
//     passport.authenticate('google', { failureRedirect: 'http://localhost:3000' }),
//     function (req, res) {
//         // Successful authentication, redirect home.
//         res.redirect('http://localhost:3000');
//     }
// );

router.get('/auth/user', passport.authenticate('jwt', { session: false }), getUserCourses);
router.post('/auth/register', createUser);
router.post('/auth/login', loginUser);

module.exports = router;