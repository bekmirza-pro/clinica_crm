const model = require('./model')

module.exports = {
    OCHERDS: async(req, res) => {
        try {
            const ocherds = await model.ocherds()
            res.json(ocherds)
        } catch (err) {
            console.log(err.message);
        }
    },
    NEW_OCHERD: async(req, res) => {
        try {
            const { username, disease_trends } = req.body
            const newOcherds = await model.newOcherds(username, disease_trends)
            res.json(newOcherds)
        } catch (err) {
            console.log(err.message);
        }
    }
}