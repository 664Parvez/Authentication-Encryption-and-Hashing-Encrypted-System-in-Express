const express = require('express')
const app = express()

const registerRouter = require('./routes/register.route')
const loginRouter = require('./routes/login.route')

const registerRouterTwo = require('./routes/registerTwo.route')
const loginRouterTwo = require('./routes/loginTwo.route')

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Home Page')
})

app.use(registerRouter)
app.use(loginRouter)
app.use(registerRouterTwo)
app.use(loginRouterTwo)


app.use((req, res) => {
    res.json({ message : "This page is not exist" })
})

module.exports = app