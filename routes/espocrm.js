const express = require("express")
const espocrm = require("../controllers/espocrm")
const router = express.Router()
const config  = require("../config")
const { status } = require("express/lib/response")
const isAuth = function(req, res, next) {
    const {mailkey} = req.headers
    const {espocrmKeys} = config
    const checkAuth = espocrmKeys.find(el => el.key == mailkey)
    if(checkAuth){
        req.headers.authUser = checkAuth.name
        next()
    }
    res.status(403).json({status:"BAD", message: "Access Denied"})
}

router.post('/dcusers/new', isAuth, espocrm.new)
router.post('/dcusers/created', espocrm.created)

module.exports = router