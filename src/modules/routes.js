const { Router } = require('express')
const Users = require('./users/users')
const Disease = require('./disease_trends/disease_trend')
const Orders = require('./ocherds/ocherds')
const Clinics = require('./clinica/clinica')
const Controller = require("../controllers/Auths");

const middleware = require('../middleware/chekToken')

const router = new Router()

router
    .post("/register", Controller.UserRegister)
    .post("/login", Controller.UserLogin)
    .get('/admins/users', Users.USER)
    .get('/admins/orders', Orders.OCHERDS)
    .post('/newOcherds', Orders.NEW_OCHERD)
    .delete('/admins/users/:userID?', Users.DELETE_USER)
    .get('/home', Clinics.CLINICA)
    .post('/newUser', Users.NEW_USER)
    .get('/diseaseTrends', Disease.DISEASE_TREND)
    // .post('/submitOrder', Teachers.COURSE_TEACHERS)


module.exports = router