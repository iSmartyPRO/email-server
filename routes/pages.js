const express = require("express")
const router = express.Router()
const controller = require("../controllers/pages")

router.get('/', controller.home)
router.get('/about', controller.about)
router.get('/partners', controller.partners)
router.get('/contacts', controller.contacts)

module.exports = router