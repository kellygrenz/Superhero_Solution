const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const SuperHero = require('./models/SuperHero')
const Villain = require('./models/Villain')

const heroRoutes = require('./routes/heroes')
const villainRoutes = require('./routes/villains')

const port = 3001
app.set('trust proxy', '127.0.0.1')

mongoose.connect('mongodb://localhost/SUPERHEROES_DB')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('./config/error-handler'))

app.use('/', villainRoutes)
app.use('/', heroRoutes)
const server = app.listen(port, () => console.log(`Running on port: ${port}🔥`))

module.exports = server
