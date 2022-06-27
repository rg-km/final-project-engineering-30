const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const mainRoutes = require('./app/routes')

app.use('/', mainRoutes.router)

app.use(mainRoutes.onLost)
app.use(mainRoutes.onError)

module.exports = app