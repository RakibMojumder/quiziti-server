const Statistics = require('../models/statisticsModel');
const getStatisticsData = async (req, res) => {
    try {
        const statistics = await Statistics.find({});
        if (statistics) {
            res.json({
                success: true,
                message: 'Successfully got the data',
                statistics
            })
        } else {
            res.json({
                success: false,
                message: 'Data not found',
            })
        }
    } catch (error) {
        res.json({
            success: false,
            error: error.message
        })
    }
};

const updateStatisticsData = async (req, res) => {
    try {
        const id = req.params.id;
        const score = parseFloat(req.body.score);
        const data = await Statistics.findOne({ id });
        if (score > data.score) {
            const updatedDoc = { score };
            const result = await Statistics.updateOne({ id }, updatedDoc);
            if (result) {
                res.json({
                    success: true
                })
            }
        } else {
            res.json({
                success: true,
                update: false
            })
        }
    } catch (error) {
        res.json({
            success: false,
            error: error.message
        })
    }
}

module.exports = { getStatisticsData, updateStatisticsData };