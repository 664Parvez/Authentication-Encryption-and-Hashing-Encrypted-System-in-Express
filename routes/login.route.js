const router = require('express').Router()
const { loginGet, loginPost } = require('../controllers/login.controller')

router.get('/login', loginGet)

router.post('/login', loginPost)

module.exports = router