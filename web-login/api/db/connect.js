const mongoose = require('mongoose')
const dotenv = require('dotenv').config()

const connectDB = async (mongoURI) => {

    // Connect the mongo DB
    await mongoose.connect(mongoURI)
}

module.exports = connectDB