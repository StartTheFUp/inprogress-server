const connect = require('monk')

const url = process.env.DATABASE_URL || 'mongodb://localhost:27017/inprogress'

const db = connect(url)

const blocks = db.get('blocks')

const readBlocks = () => blocks.find({})

const readComments = () => comments.find({})

module.exports = {
  ...db,
  readBlocks,
  readComments
}
