const express = require("express")
const api = require("../controllers/api")
const router = express.Router()

router.get('/', api.index)

module.exports = router