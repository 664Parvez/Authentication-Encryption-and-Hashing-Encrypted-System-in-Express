const Registermodel = require('../models/registerTwo_model')
const md5 = require('md5')

const loginGet = (req, res) => {
    res.send('Login System Two')
}

const loginPost = async (req, res) => {
    const email = req.body.email
    const password = md5(req.body.password)
    const login = await Registermodel.findOne({ email : email })

    if (login && login.password === password) {
        res.status(200).json({ message : "Login Successful" })
    } else {
        res.status(404).json({ message : "Login is failed" })
    }
}

module.exports = {loginGet, loginPost}