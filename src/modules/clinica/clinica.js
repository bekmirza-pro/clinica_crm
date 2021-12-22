const model = require('./model')

module.exports = {
    CLINICA: async(req, res) => {
        try {
            const clinica = await model.clinica()
            res.json(clinica)
        } catch (err) {
            console.log(err.message);
        }
    }
}