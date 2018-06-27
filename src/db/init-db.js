const db = require('monk')('localhost/inprogress')

const initialUsers = [
  require('../mocks/users/1.json'),
  require('../mocks/users/2.json')
]

const initialProjects = [
  require('../mocks/projects/1.json'),
  require('../mocks/projects/2.json')
]

const initialBlocks = [
  require('../mocks/blocks/block-billets.json'),
  require('../mocks/blocks/block-todosWikaJob.json'),
  require('../mocks/blocks/block-todosSTFU.json'),
  require('../mocks/blocks/block-ressources.json')
]

const initialComments = [
  require('../mocks/comments/1.json'),
  require('../mocks/comments/2.json')
]

// Drop collections
db.get('users').drop()
db.get('projects').drop()
db.get('blocks').drop()
db.get('comments').drop()

// Re-create collections
const users = db.create('users')
const projects = db.create('projects')
const blocks = db.create('blocks')
const comments = db.create('comments')

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

for (const comment of initialComments) {
  comments.insert(comment)
}

// pensez à créer des index si recherche fréquente ou ajouter quelques contraintes
/* const users = db.get('users')
users.createIndex('email') */
