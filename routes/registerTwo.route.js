const router = require('express').Router()
const { registerTwo, registerPostTwo } = require('../controllers/registerTwo.controller')

router.get('/registerTwo', registerTwo)

router.post('/registerTwo', registerPostTwo)

module.exports = router