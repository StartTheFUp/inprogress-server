const monk = require('monk')

const url = process.env.DATABASE_URL || 'mongodb://localhost:27017/inprogress'

const db = monk(url)

const blocks = db.get('blocks')
const comments = db.get('comments')
const projects = db.get('projects')

const readBlocks = () => blocks.find({})
const readComments = () => comments.find({})
// on met une ID par défaut pour l'instant

const readProject = (id = '1') => projects.findOne({id})
const updateBlock = (block) => blocks.update({_id: block._id}, block)
const updateThreadComment = (threadComment) => {
  const update = {
    ...threadComment,
    _id: threadComment._id || monk.id()
  }

  return comments.update({ id: update.id }, update, { upsert: true })
}
module.exports = {
  ...db,
  readBlocks,
  readComments,
  readProject,
  updateBlock,
  blocks,
  updateThreadComment
}
