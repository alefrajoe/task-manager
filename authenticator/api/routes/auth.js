const router = require('express').Router()
const { registerUser, authorizeLogin } = require('../controllers/auth')

// Define routes
router.route('/').post(registerUser)
router.route('/login/').post(authorizeLogin)

// Export
module.exports = router 