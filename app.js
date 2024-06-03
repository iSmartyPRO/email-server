const express = require("express")
const morgan = require("morgan")
// const exphbs = require("express-handlebars")
const expressLayouts = require('express-ejs-layouts')
const path = require("path")

const app = express()
const pagesRoutes = require("./routes/pages")
const apiRoutes = require("./routes/api")
const espocrmRoutes = require("./routes/espocrm")

app.use(expressLayouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')

app.set('views', 'views')

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('public'))
app.use('/public/uikit', express.static(path.join(__dirname, 'node_modules','uikit','dist')))
app.use(morgan('combined'))
app.use("/", pagesRoutes)
app.use("/api/", apiRoutes)
app.use("/espocrm/", espocrmRoutes)

module.exports = app