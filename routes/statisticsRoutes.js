const express = require('express');
const passport = require('passport');
const { getStatisticsData, updateStatisticsData } = require('../controllers/statisticsControllers');
const router = express.Router();

router.get('/statistics', passport.authenticate('jwt', { session: false }), getStatisticsData);
router.post('/statistics/:id', passport.authenticate('jwt', { session: false }), updateStatisticsData);

module.exports = router;

// const data = [
//     {
//         email: 'abc@gmail.com',
//         statistic: [
//             {
//                 id: '63e9e90cb0e8e5aafeb8ba7b',
//                 topic: 'HTML',
//                 score: 0
//             },
//             {
//                 id: '63e9e90cb0e8e5aafeb8ba7c',
//                 topic: "CSS",
//                 score: 0
//             },
//             {
//                 id: '63e9e90cb0e8e5aafeb8ba7d',
//                 topic: 'JavaScript',
//                 score: 0
//             },
//             {
//                 id: '63e9e90cb0e8e5aafeb8ba7e',
//                 topic: 'React JS',
//                 score: 0
//             },
//             {
//                 id: '63e9e90cb0e8e5aafeb8ba7f',
//                 topic: 'C Language',
//                 score: 0
//             },
//             {
//                 id: '63e9e90cb0e8e5aafeb8ba80',
//                 topic: 'C# Language',
//                 score: 0
//             },
//             {
//                 id: '63e9e90cb0e8e5aafeb8ba81',
//                 topic: "Node JS",
//                 score: 0
//             },
//             {
//                 id: '63e9e90cb0e8e5aafeb8ba82',
//                 topic: "Python",
//                 score: 0
//             }
//         ]
//     }
// ]
