const mongoose = require('mongoose');

const statisticsSchema = mongoose.Schema({
    topic: String,
    score: Number,
    total: Number
});

// email: String,
//     statistics: [
//         {
//             id: String,
//             topic: String,
//             score: Number,
//         }
//     ]

module.exports = mongoose.model('statistics', statisticsSchema);