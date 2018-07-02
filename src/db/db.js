const monk = require('monk')

const url = process.env.DATABASE_URL || 'mongodb://localhost:27017/inprogress'

const db = monk(url)

const users = db.get('users')
const blocks = db.get('blocks')
const comments = db.get('comments')
const projects = db.get('projects')

const saveUser = (user) => users.insert(user)
const findUser = (email) => users.findOne({email})

const findProjectClient = (email) => projects.find({client: email})
const findProjectAdmin = () => projects.find({})

const readProject = (id) => projects.findOne({id})
const readBlocksById = (id) => blocks.find({projectId: id})
const readBlocks = () => blocks.find({})
const readComments = () => comments.find({})

const updateBlock = (block) => blocks.update({_id: block._id}, block)
const updateThreadComment = (threadComment) => {
if(comments.find({id : threadComment.id})){
  let update = {
    ...threadComment

  }
  return comments.update({ id: update.id }, update, { upsert: true })
}else {
  let update = {
    ...threadComment,
    _id: threadComment._id || monk.id()
  }
  return comments.update({ id: update.id }, update, { upsert: true })
}
}

module.exports = {
  ...db,
  readBlocks,
  readBlocksById,
  readComments,
  readProject,
  findUser,
  findProjectAdmin,
  findProjectClient,
  updateBlock,
  blocks,
  updateThreadComment,
  saveUser
}
