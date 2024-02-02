const jwt = require('jsonwebtoken')
require('dotenv')

const registerUser = async function (req, res){

    // Get the username and password
    const {username, password} = req.body

    // Define variable to get time
    const time = new Date()

    // Generate the token
    const token = jwt.sign({username:username, time:time.getTime()}, process.env.JWT_SECRET)

    // Return
    return res.status(200).json({token:token})
}

const authorizeLogin = async function (req, res){

    // Get the username and password
    const { Authorization } = req.headers

    console.log(req.headers)

    return res.status(200).send("done")
}

// Export functions to be used by routers
module.exports = { registerUser, authorizeLogin }