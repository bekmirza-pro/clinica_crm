const model = require('./model')

module.exports = {
    DISEASE_TREND: async(req, res) => {
        try {
            const disease_trend = await model.disease_trend()
            res.json(disease_trend)
        } catch (err) {
            console.log(err.message);
        }
    }
}