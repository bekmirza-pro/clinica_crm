const express = require('express')
const app = express()
const cors = require("cors");
const router = require('./src/modules/routes')
const PORT = process.env.PORT || 9000

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router)

app.listen(PORT, console.log(PORT))