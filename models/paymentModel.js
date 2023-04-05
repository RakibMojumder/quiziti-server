const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    price: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    tax: { type: String },
    studentName: { type: String, required: true },
    studentEmail: { type: String, ref: 'users', required: true },
    courseId: { type: mongoose.Types.ObjectId, ref: 'courses', required: true },
    courseTitle: { type: String, required: true },
    transactionId: { type: String, required: true }
}, { timestamps: true });


module.exports = new mongoose.model('payment', paymentSchema);