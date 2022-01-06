const { fetch, fetchAll } = require('../../lib/postgres')


const OCHERDS = `
SELECT *
FROM ocherds 
INNER JOIN disease_trends
ON ocherds.dise_tend_id = disease_trends.dis_tend_id;   
`

const NEW_OCHERD = `
   INSERT INTO 
        ocherds(users_name, dise_tend_id)
   VALUES($1, $2)
   RETURNING *
`

const ocherds = () => fetchAll(OCHERDS)
const newOcherds = (username, disease_trends) => fetch(
    NEW_OCHERD,
    username,
    disease_trends
)

module.exports = {
    ocherds,
    newOcherds
}