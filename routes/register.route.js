const express = require('express')
const router = express.Router()

const { registerGet, registerPost } = require('../controllers/register.controller')


router.get('/register', registerGet)

router.post('/register', registerPost)


module.exports = router