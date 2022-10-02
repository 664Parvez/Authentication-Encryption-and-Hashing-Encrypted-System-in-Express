require('dotenv').config()
const mongoose = require('mongoose')
const encrypt = require('mongoose-encryption')


const createSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        min : 3
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const encKey = process.env.ENC_KEY
createSchema.plugin(encrypt, { secret : encKey, encryptedFields : [ 'password' ], requireAuthenticationCode: false })


const Createmodel = new mongoose.model('data', createSchema)

module.exports = Createmodel