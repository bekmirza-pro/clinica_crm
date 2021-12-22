const { fetch, fetchAll } = require('../../lib/postgres')


const CLINICA = `
   SELECT
      *
   FROM
       clinics;   
`

const clinica = () => fetchAll(CLINICA)

module.exports = {
    clinica
}