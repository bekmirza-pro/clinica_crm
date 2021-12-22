const { fetch, fetchAll } = require('../../lib/postgres')


const DISEASE_TREND = `
   SELECT
      *
   FROM
       disease_trends;   
`

const disease_trend = () => fetchAll(DISEASE_TREND)

module.exports = {
    disease_trend
}