const Register = require('../models/register.model')

const loginGet = (req, res) => {
    res.send('Login System')
}

const loginPost = async (req, res) => {
    const { email, password } = req.body
    const login = await Register.findOne({ email : email })

    if (login && login.password === password) {
        res.status(200).json({ message : "Login Successful" })
    } else {
        res.status(404).json({ message : "Login is failed" })
    }
}

module.exports = {loginGet, loginPost}