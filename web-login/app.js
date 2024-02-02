const express = require('express')
const dotenv = require('dotenv').config()
const expressAsyncErrors = require('express-async-errors')
const app = express()

// Routes
const registerRouter = require('./api/routes/register')

// Database
const connectDB = require('./api/db/connect')

// Middleware
app.use(express.static('./static'))
app.use(express.json())
app.use('/api/v1/register', registerRouter)

async function start() {

    // Connect the database
    const db = await connectDB(process.env.MONGO_URI)

    // Listen to the given port
    const port = process.env.PORT || 3000;
    app.listen(port, () => {console.log(`Server is listening port ${port}...`)})
}

// Start the server
start()