const express = require('express')
const userControler = require('../controllers/userControler')

const router = express.Router()

router.get ('/', userControler.getUser)

module.exports = router