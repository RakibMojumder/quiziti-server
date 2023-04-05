const express = require('express');
const passport = require('passport');
const { paymentIntent, payment } = require('../controllers/paymentControllers');
const router = express.Router();

router.post('/create-payment-intent', passport.authenticate('jwt', { session: false }), paymentIntent);
router.post('/payment', passport.authenticate('jwt', { session: false }), payment);

module.exports = router;