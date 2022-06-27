const express = require('express')
const router = express.Router()
const { main, auth } = require('../controllers')

router.get('/', main.index)
router.post('/login', auth.login)

module.exports = {
    router,
    onLost: main.onLost,
    onError: main.onError
}