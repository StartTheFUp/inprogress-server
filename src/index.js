const express = require('express')
const bodyParser = require('body-parser')
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

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

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

app.get('/projects/:id', (req, res, next) => {
  const idProject = req.params.id
  db.readProject(idProject)
    .then(project => res.json(project))
    .catch(next)
})

// probleme colision : si 2 user envoit un updatesection sur meme block sans rechergement préalable
// (seul le deuxieme est sauvegardé)
app.post('/blocks', (req, res, next) => {
  Promise.all(req.body.map(block => {
    db.updateBlock(block)
  }))
    .then(() => res.send('ok'))
    .catch(next)
})

app.post('/comments', (req, res, next) => {
  Promise.all(req.body.map(threadComment => {
    db.updateThreadComment(threadComment)
  }))
    .then(() => res.send('ok'))
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
