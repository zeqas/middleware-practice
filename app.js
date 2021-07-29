// app.js
const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

const logRequest = require('./tools/logRequest')
app.use(logRequest)

const logs = []

app.get('/', (req, res) => {
  logs.unshift(res.locals.logs)
  res.render('index', logs)
})

app.get('/new', (req, res) => {
  logs.unshift(res.locals.logs)
  res.render('index', logs)
})

app.get('/:id', (req, res) => {
  logs.unshift(res.locals.logs)
  res.render('index', logs)
})

app.post('/', (req, res) => {
  logs.unshift(res.locals.logs)
  res.render('index', logs)
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})