require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// INTERNAL IMPORT
const userRoutes = require('./routes/userRoutes');
const quizTopicsRoutes = require('./routes/quizTopicRoutes');
const questionsRoutes = require('./routes/questionsRoutes');
const statisticsRoutes = require('./routes/statisticsRoutes');
const courseTopicsRoutes = require('./routes/courseTopicsRoutes');
const instructorRoutes = require('./routes/instructorRoutes');
const coursesRoutes = require('./routes/coursesRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

// EXTERNAL IMPORT
const cors = require('cors');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
require('./config/database');
require('./config/passport');


//---------------------MIDDLE WARES---------------------
app.use(cors({
    origin: true,
    credentials: true
}))
app.use(express.json())
app.use(cookieParser('ABC'))
// Passport middleware
app.use(session({
    secret: 'Hello world',
    resave: false,
    saveUninitialized: true
}))

app.use(express.urlencoded({ extended: true }))
app.use(passport.initialize());
app.use(passport.session());


//------------------------ROUTES------------------------
app.get('/', (req, res) => {
    res.send("API is running");
});
app.use('/', userRoutes);
app.use('/', quizTopicsRoutes);
app.use('/', questionsRoutes);
app.use('/', statisticsRoutes);
app.use('/', courseTopicsRoutes);
app.use('/', instructorRoutes);
app.use('/', coursesRoutes);
app.use('/', paymentRoutes);

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