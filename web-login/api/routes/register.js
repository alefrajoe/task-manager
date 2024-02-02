const router = require('express').Router()
const { registerUser } = require('../controllers/register')


// Routes
router.route('/').post(registerUser)

// Export the router
module.exports = router