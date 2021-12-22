const { fetch, fetchAll } = require('../../lib/postgres')


const USERS = `
   SELECT
       *
   FROM
       users
   WHERE is_admin = false           
`

const NEW_USER = `
   INSERT INTO 
        users( user_name, email, password)
   VALUES($1, $2, $3)
   RETURNING *
`

const users = () => fetchAll(USERS)
const newUser = (userName, email, password) => fetch(
    NEW_USER,
    userName,
    email,
    password
)

module.exports = {
    users,
    newUser
}