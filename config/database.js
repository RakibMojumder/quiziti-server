const mongoose = require('mongoose');
const dbURL = process.env.DB_URL

mongoose.set('strictQuery', false);
mongoose.connect(dbURL).then(() => console.log("DB connected")).catch(e => console.log(e.message))