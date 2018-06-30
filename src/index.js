const express = require('express')
const bodyParser = require('body-parser')
const db = require('./db/db.js')
const bcrypt =require('bcrypt-promise')
const jwt= require('jsonwebtoken')
const jwtSecret = 'MY_FUCKING_SECRET'
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

app.post('/signup', async(req, res, next) => {
  const newUser = req.body
  console.log('signup : ', req.body)
  newUser.password = await bcrypt.hash(newUser.password, 16)
  db.saveUser(newUser)
    .then(doc => res.json('ok'))
    .catch(next)

})

app.post('/signin', async(req, res, next) => {
  console.log('signin : ',req.body)
  const user = await db.findUser(req.body.email)
  console.log('user', user)
  if (user === null) {
    return res.end('user not defined')}
  const isEqual = await bcrypt.compare(req.body.password, user.password)

  if (isEqual && user.type ==='admin') {
    const token = jwt.sign({
      id: user._id,
      username: user.email
    }, jwtSecret)
    res.json({token})
    console.log('token', token)
  } else {
      res.json('auth failed')
      return next(Error('Wrong Password or not admin'))

    }
  })




app.get('/adminprojects', (req, res, next) => {
  db.findUser(req.body)
    .then(user => {
      console.log('user', user)
      if (user === null) {
        return res.end('user not defined')
      } else if (user.type === 'admin') {
        console.log('admin identifié')
        db.findProjectAdmin()
          .then(projects => res.end(JSON.stringify(projects)))
          .catch(next)
      } else if (user.type === 'client') {
        console.log('clients identifié')
        db.findProjectClient(user.email)
          .then(project => res.end(JSON.stringify(project)))
          .catch(next)
      } else return res.end('no project found')
    })
    .catch(err => console.log('err', err))
})

// Errors handling
app.use((err, req, res, next) => {
  if (err) {
    res.json({ error: err.message })
    return console.error(err)
  }
})

app.listen(port, () => console.log(`server is listening on port: ${port}`))
