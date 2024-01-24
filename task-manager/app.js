const connectDB = require('./api/db/connect_db')
const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const Task = require('./api/models/Task')
const controllers = require('./api/controllers/controllers')

// Middleware
app.use(express.static('./static'))
app.use(express.json())

// Show the home page
app.get('/', (req, res)=>{res.sendFile('./index')})

// GET : list all items
app.get('/api/v1/items', controllers.getAllItems)

// POST : add an item
app.post('/api/v1/items', controllers.addItem)

// PATCH : update an item
app.patch('/api/v1/items/:id', controllers.updateItem)

// DELETE : delete an item
app.delete('/api/v1/items/:id', controllers.deleteItem)

// Connect to the db and listen to the port
const start = async (uri) => {

    try {
        // Try to log to the db
        await connectDB(uri)
        app.listen(process.env.PORT, () => {console.log(`Server is listening port ${process.env.PORT}...`)})
    } catch (error) {
        console.log(error)
    }
}

start(process.env.MONGO_URI)