const express = require('express')

const db = require('./db/db.js')

const port = process.env.PORT || 5000

const app = express()

// MIDDLEWARES

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTION')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
})

// ROUTES

app.get('/', (req, res) => {
  res.send('ok')
})

app.get('/blocks', (req, res, next) => {
  db.readBlocks()
    .then(blocks => res.json(blocks))
    .catch(next)
})

app.get('/comments', (req, res, next) => {
  db.readComments()
    .then(comments => res.json(comments))
    .catch(next)
})

app.get('/project/:id', (req, res, next) => {
  const idProject = req.params.id
  db.readProject(idProject)
    .then(project => res.json(project))
    .catch(next)
})

// Errors handling
app.use((err, req, res, next) => {
  if (err) {
    res.json({ error: err.message })
    return console.error(err)
  }
})

app.listen(port, () => console.log(`server is listening on port: ${port}`))
