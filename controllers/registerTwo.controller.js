const Registermodel = require('../models/registerTwo_model')
const md5 = require('md5')

const registerTwo = (req, res) => {
    res.send('Register')
}

const registerPostTwo = async (req, res) => {
    try{
        const data = new Registermodel( {
            username : req.body.username,
            email : req.body.email,
            password : md5(req.body.password)
        } )
        await data.save()
        res.status(200).json(data)
    } catch (err) {
        res.status(400).json({ message : err })
    }
}

module.exports = { registerTwo, registerPostTwo }