const db = require('monk')('localhost/inprogress')

const initialUsers = [
  require('../mocks/users/user1.json'),
  require('../mocks/users/user2.json')
]

const initialProjects = [
  require('../mocks/projects/project1.json')
]

const initialBlocks = [
  require('../mocks/blocks/block-billets.json'),
  require('../mocks/blocks/block-todos.json'),
  require('../mocks/blocks/block-ressources.json')
]

// Drop collections
db.get('users').drop()
db.get('projects').drop()
db.get('blocks').drop()

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
