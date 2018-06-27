const connect = require('monk')

const url = process.env.DATABASE_URL || 'mongodb://localhost:27017/inprogress'

const db = connect(url)

const users = db.get('users')
const blocks = db.get('blocks')
const comments = db.get('comments')
const projects = db.get('projects')

const findProjectAdmin = () => projects.find({})

const findProjectClient = (email) => projects.find({client: email})

const readBlocks = () => blocks.find({})
const readComments = () => comments.find({})

const readProject = (id = '1') => projects.findOne({id})
const updateBlock = (block) => blocks.update({_id: block._id}, block)

const findUser = (user) => {
  console.log('db', user)
  return users.findOne({email: user.email, password: user.password})
}

module.exports = {
  ...db,
  readBlocks,
  readComments,
  readProject,
  updateBlocks,
  saveBlock,
  findUser,
  findProjectAdmin,
  findProjectClient,
  updateBlock,
  blocks
}

/*, password: user.password */
