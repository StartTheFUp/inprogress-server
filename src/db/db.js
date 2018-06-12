const connect = require('monk')

const url = process.env.DATABASE_URL || 'mongodb://localhost:27017/inprogress'

const db = connect(url)

const blocks = db.get('blocks')
const comments = db.get('comments')
const projects = db.get('projects')

const readBlocks = () => blocks.find({})
const readComments = () => comments.find({})
//on met une ID par défaut pour l'instant
const readProject = (id = "5b1f7d9895aa581c12512ec3") => projects.findOne({_id:id})

module.exports = {
  ...db,
  readBlocks,
  readComments,
  readProject
}
