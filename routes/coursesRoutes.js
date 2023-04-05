const express = require('express');
const { getCourses, getPaymentInvoice } = require('../controllers/coursesControllers');
const router = express.Router();

router.get('/courses/:id', getCourses);
router.get('/invoice', getPaymentInvoice)


module.exports = router;