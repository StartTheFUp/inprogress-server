const monk = require('monk')

const url = process.env.DATABASE_URL || 'mongodb://localhost:27017/inprogress'

const db = monk(url)

const users = db.get('users')
const blocks = db.get('blocks')
const comments = db.get('comments')
const projects = db.get('projects')

const findProjectAdmin = () => projects.find({})

const findProjectClient = (email) => projects.find({client: email})

const readBlocks = () => blocks.find({})
const readComments = () => comments.find({})

const readProject = (id) => projects.findOne({id})
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

const findUser = (user) => {
  console.log('db', user)
  return users.findOne({email: user.email, password: user.password})
}

module.exports = {
  ...db,
  readBlocks,
  readComments,
  readProject,
  findUser,
  findProjectAdmin,
  findProjectClient,
  updateBlock,
  blocks,
  updateThreadComment
}

/*, password: user.password */
