const { fetch, fetchAll } = require('../../lib/postgres')


const OCHERDS = `
   SELECT
       *
   FROM
       ocherds;    
`

const NEW_OCHERD = `
   INSERT INTO 
        ocherds(users ,dise_tend_id)
   VALUES($1, $2)
   RETURNING *
`

const ocherds = () => fetchAll(OCHERDS)
const newOcherds = (users, dise_tend_id) => fetch(
    NEW_OCHERD,
    users,
    dise_tend_id
)

module.exports = {
    ocherds,
    newOcherds
}