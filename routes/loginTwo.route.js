const router = require('express').Router()
const { loginGet, loginPost } = require('../controllers/loginTwo.controller')

router.get('/loginTwo', loginGet)

router.post('/loginTwo', loginPost)

module.exports = router