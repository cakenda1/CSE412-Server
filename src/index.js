const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')
const app = express()
const port = 5017

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

  app.get('/gas', db.getGas)
  app.get('/groceries', db.getGroceries)
  app.get('/rent', db.getRent)
  app.get('/household', db.getHouse)
  app.get('/population', db.getPop)


  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })