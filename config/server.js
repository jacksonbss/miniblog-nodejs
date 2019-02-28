fs = require('fs')
path = require('path')

config = JSON.parse(fs.readFileSync('config.json'));
let express = require('express')
let cors = require('cors')
let bodyParser = require('body-parser')
let expressValidator = require('express-validator')
let consign = require('consign')

let app = express()
app.use(cors())
app.options('*', cors())

app.set('view engine', 'ejs')
app.set('views', 'app/views')
app.use(require('stylus').middleware(path.join(process.cwd(), 'public')))
app.use(express.static(path.join(process.cwd(), 'public')))

app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended:false}))
app.use(expressValidator())

// Load Express Session Module
session = require('express-session')
app.use(session({
    secret: config.session.secret,
    saveUninitialized: false,
    resave: false
}))

consign()
    .include('app/routes')
    .include('app/controllers')
    .include('app/model')
    .into(app)

    module.exports = app

