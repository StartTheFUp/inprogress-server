const monk = require('monk')
const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/inprogress'
const db = monk(url)

const initialUsers = [
  require('../mocks/users/4.json')
]

const initialProjects = [
  require('../mocks/projects/3.json')
]

const initialBlocks = [
  require('../mocks/blocks/block-billets-empty.json'),
  require('../mocks/blocks/block-todosClient-empty.json'),
  require('../mocks/blocks/block-todosSTFU-empty.json'),
  require('../mocks/blocks/block-ressources-empty.json')
]

// Drop collections dans le terminal :  db.dropDatabase();
db.get('users').drop()
db.get('projects').drop()
db.get('blocks').drop()
db.get('comments').drop()

// Re-create collections
const users = db.create('users')
const projects = db.create('projects')
const blocks = db.create('blocks')

// Insert users
for (const user of initialUsers) {
  users.insert(user)
}

// Insert projects
for (const project of initialProjects) {
  projects.insert(project)
}

// Insert blocks
for (const block of initialBlocks) {
  blocks.insert(block)
}

// pensez à créer des index si recherche fréquente ou ajouter quelques contraintes
/* const users = db.get('users')
users.createIndex('email') */

// db.close()
