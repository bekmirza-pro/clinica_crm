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
            const { users, dise_tend_id } = req.body
            const newOcherds = await model.newOcherds(users, dise_tend_id)
            res.json(newOcherds)
        } catch (err) {
            console.log(err.message);
        }
    }
}