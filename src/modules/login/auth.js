const { fetch, fetchAll } = require("../../lib/postgres");

const userRegister = `
INSERT INTO users (
    user_name,
    email,
    password
) VALUES ($1, $2, $3)
RETURNING * ;
 `

const register = async({ username, email, password }) => {
    const data = await fetch(
        userRegister,
        username,
        email,
        password
    );

    return data
}

const userLogin = `
    SELECT
        user_id
    FROM users
    WHERE user_name = $1 AND password = $2;
`

const login = async({ username, password }) => {
    const data = await fetch(
        userLogin,
        username,
        password
    );
    return data
}

const getUserByID =
    `
        select  
          is_admin
        from users
        where user_id = $1;
      `

const getUser = (id) => fetch(
    getUserByID,
    id
);

module.exports = {
    register,
    login,
    getUser
};