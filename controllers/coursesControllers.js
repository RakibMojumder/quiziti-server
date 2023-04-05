
const Courses = require('../models/coursesModel');
const Payment = require('../models/paymentModel');

const getCourses = async (req, res) => {
    try {
        const id = req.params.id;
        const course = await Courses.findOne({ courseId: id });

        if (course) {
            res.json({ success: true, message: 'Successfully got the course', course })
        } else {
            res.json({ success: false, message: 'Course not found' })
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
};


const getPaymentInvoice = async (req, res) => {
    try {
        const email = req.query.email;
        const invoice = await Payment.find({ studentEmail: email }).select('-courseId').sort({ createdAt: -1 });

        if (invoice) {
            res.json({ success: true, message: 'Successfully got the invoice', invoice })
        }
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}


module.exports = { getCourses, getPaymentInvoice };