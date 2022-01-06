const model = require("../modules/login/auth");
const { sign } = require("../lib/jwt");

module.exports = {
    UserRegister: async(req, res) => {
        try {
            const user = await model.register(req.body);

            if (user) {
                const token = sign(user);
                res.status(302).json({ token, message: "You authed in!" });
            } else {
                res
                    .status(401)
                    .json({ message: "You are not authed in, please try again!" });
            }
        } catch (error) {
            return error.message;
        }
    },

    UserLogin: async(req, res) => {
        try {
            const user = await model.login(req.body);
            if (user) {
                const isAdmin = user.is_admin;
                const token = sign(user);
                res.status(302).json({ token, isAdmin, message: "You logged in!" });
            } else {
                res
                    .status(401)
                    .json({ message: "You are not logged in, please try again!" });
            }
        } catch (error) {
            return error.message;
        }
    }
}