const model = require('./model')

module.exports = {
    USER: async(req, res) => {
        try {
            const users = await model.users()
            res.json(users)
        } catch (err) {
            console.log(err.message);
        }
    },
    NEW_USER: async(req, res) => {
        try {
            const { userName, email, password } = req.body
            const newUser = await model.newUser(userName, email, password)
            res.json(newUser)
        } catch (err) {
            console.log(err.message);
        }
    }
}