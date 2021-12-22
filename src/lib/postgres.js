const { DB } = require('../config')

const { Pool } = require('pg')

const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "1111",
    database: "crm_clinica",
})


const fetch = async(query, ...params) => {
    const client = await pool.connect()
    try {
        const { rows: [row] } = await client.query(query, params.length ? params : null)
        return row
    } catch (error) {
        console.log(error)
    } finally {
        client.release()
    }
}

const fetchAll = async(query, ...params) => {
    let client = await pool.connect()
    try {
        let { rows } = await client.query(query, params.length ? params : null)
        return rows
    } catch (err) {
        console.log(err)
    } finally {
        client.release()
    }
}

module.exports = {
    fetch,
    fetchAll
}