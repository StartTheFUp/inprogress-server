const connect = require('monk')

const url = process.env.DATABASE_URL || 'mongodb://localhost:27017/inprogress'

const db = connect(url)

//collections
const blocs = db.get('blocs')

//requete pour retourner l'ensemble des documents contenus dans la collection blocs
const readBlocs = () => blocs.find({})


module.exports = {
    ...db,
    readBlocs
}