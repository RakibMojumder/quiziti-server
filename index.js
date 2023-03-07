require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;
const userRoutes = require('./routes/userRoutes');
const quizTopicsRoutes = require('./routes/quizTopicRoutes');
const questionsRoutes = require('./routes/questionsRoutes');
const passport = require('passport');
require('./config/database');
require('./config/passport');


//---------------------MIDDLE WARES---------------------
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize());


//------------------------ROUTES------------------------
app.get('/', (req, res) => {
    res.send("API is running");
});
// user routes
app.use('/', userRoutes);
app.use('/', quizTopicsRoutes);
app.use('/', questionsRoutes);
// app.get('/quiz', passport.authenticate('jwt', { session: false }),
//     function (req, res) {
//         res.send({ success: true });
//     })

//---------------------ERROR HANDLING---------------------
// ROUTE ERROR
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' })
});

// SERVER ERROR
app.use((err, req, res, next) => {
    res.status(500).send('Something is broken')
})



app.listen(port, () => console.log('server is running on port 5000'));