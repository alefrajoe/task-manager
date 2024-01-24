const mongoose = require('mongoose')

// Define the function to connect to the DB
const connectDB = (uriString) => {
    return mongoose.connect(uriString)
} 

// Export the function to connect the DB
module.exports = connectDB