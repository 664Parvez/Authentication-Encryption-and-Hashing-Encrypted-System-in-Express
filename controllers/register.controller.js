const Createmodel = require('../models/register.model')

const registerGet = async (req, res) => {
    const dataRead = await Createmodel.find()
    res.send(dataRead)
}

const registerPost = async (req, res) => {
    try {
        const newData = new Createmodel(req.body)
        await newData.save()
        res.status(200).json(newData)
    } catch (err) {
        res.send(err)
    }
    
}

module.exports = { registerGet, registerPost }