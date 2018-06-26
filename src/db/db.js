const connect = require('monk')

const url = process.env.DATABASE_URL || 'mongodb://localhost:27017/inprogress'

const db = connect(url)

const users = db.get('users')
const blocks = db.get('blocks')
const comments = db.get('comments')
const projects = db.get('projects')

const readBlocks = () => blocks.find({})
const readComments = () => comments.find({})
// on met une ID par défaut pour l'instant

const readProject = (id = '1') => projects.findOne({id})
const updateBlocks = (block) => blocks.update({_id: block._id}, block)

const saveBlock = (block, blockId) => {
  console.log(block)
  blocks.update({
    _id: blockId
  },
  block
  )
}

const findUser = (user) => {
  console.log('db', user)
  return users.find({email: user.email, password: user.password})
}

module.exports = {
  ...db,
  readBlocks,
  readComments,
  readProject,
  updateBlocks,
  saveBlock,
  findUser,
  blocks
}

/*, password: user.password */
