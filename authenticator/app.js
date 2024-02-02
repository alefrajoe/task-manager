const express = require('express')
const app = express()
const dotenv = require('dotenv').config()

// Define middleware
app.use(express.static('./static'))
app.use(express.json())

// Define routes
const authRouter = require('./api/routes/auth')
app.use('/api/v1/auth', authRouter)

// Serve home page
app.get('/', (req, res) => {
    
    // Return the home page
    return res.status(200).sendFile('index.html')
})

const start =  function () {
    try {
        
        // Listen to the port
        app.listen(process.env.PORT, () => {console.log(`Server is listening port ${process.env.PORT}...`)})
    } catch (error) {
        
    }
}

// Start the server
start()