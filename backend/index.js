const connectToMongo = require('./db');
const express = require('express')
var cors = require('cors')
connectToMongo();

const app = express()
require('dotenv').config()
const port = process.env.PORT || 5000;

app.use(express.json())
app.use(cors())

// AVAILABLE ROUTES

app.use('/api/courses', require('./routes/courses'))
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port || process.env.PORT}`)
})