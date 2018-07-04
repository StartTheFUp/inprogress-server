const db = require('monk')('localhost/inprogress')

const initialUsers = [
  require('../mocks/users/1.json'),
  require('../mocks/users/2.json'),
  require('../mocks/users/3.json')
]

const initialProjects = [
  require('../mocks/projects/1.json'),
  require('../mocks/projects/2.json')
]

const initialBlocks = [
  require('../mocks/blocks/block-billets.json'),
  require('../mocks/blocks/block-todosWikaJob.json'),
  require('../mocks/blocks/block-todosSTFU.json'),
  require('../mocks/blocks/block-ressources.json'),
  require('../mocks/blocks/block-billets.wika2.json')
]

const initialComments = [
  require('../mocks/comments/1.json'),
  require('../mocks/comments/2.json'),
  require('../mocks/comments/3.json'),
  require('../mocks/comments/4.json'),
  require('../mocks/comments/5.json'),
  require('../mocks/comments/6.json'),
  require('../mocks/comments/7.json'),
  require('../mocks/comments/8.json'),
  require('../mocks/comments/9.json'),
  require('../mocks/comments/10.json'),
  require('../mocks/comments/11.json'),
  require('../mocks/comments/12.json'),
  require('../mocks/comments/13.json'),
  require('../mocks/comments/14.json'),
  require('../mocks/comments/15.json')
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
