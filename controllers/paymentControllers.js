const Payment = require('../models/paymentModel');
const Users = require('../models/userModel');
const stripe = require('stripe')(process.env.STRIPE_sk);

const paymentIntent = async (req, res) => {
    try {
        const price = req.body.totalPrice;
        const amount = Number((parseFloat(price) * 100).toFixed(2));

        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            payment_method_types: ['card']
        })

        res.json({
            success: true,
            clientSecret: paymentIntent.client_secret,
            message: 'Successfully got the client secret'
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
};


const payment = async (req, res) => {
    try {
        const { studentEmail, courseId } = req.body;

        const newPayment = await Payment.create({ ...req.body });
        await Users.updateOne({ email: studentEmail }, { $push: { courses: courseId } });


        if (newPayment) {
            res.json({
                success: true,
                message: 'Payment successful'
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { paymentIntent, payment };