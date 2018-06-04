const db = require('monk')('localhost/inprogress')

db.get('users').drop()
db.get('projects').drop()
db.get('blocs').drop()
// db.get('comments').drop()

// création des collections !

const users = db.create('users')
const projects = db.create('projects')
const blocs = db.create('blocs')
// const comments = db.create('comments')

// insertion d'un document user
const newUser1 = { 'name': 'mikael', 'email': 'mikael@gmail.com', 'password': '$4554f6sfs6f4s6sg4', 'type': 'admin' }
const newUser2 = { 'name': 'mik', 'email': 'mik@gmail.com', 'password': '$4554f6sfs6rty6sg4', 'type': 'client' }

users.insert(newUser1)
users.insert(newUser2)

// insertion d'un document user
const newProject = { 'name': 'project3Test', 'client': [{'name': 'Mich'}, {'name': 'M', 'password': '$h25'}], 'createdAt': '2018-05-24' }

projects.insert(newProject)

// insertion document blocs
const newBloc = {'projectId': 'projetId_65565',
  'title': 'ToDo Client',
  'type': 'todo',
  'sections': [{'title': 'section1',
    'elements': [{
      'content': 'Finir le petit guide RH1, le mettre sur le drive et rajouter le lien de partage dans le mail de l\'automation mailjet "Guide prospect"',
      'properties': {'checked': false, 'archive': false},
      'createdBy': 'userId_1zezghozzge',
      'createdAt': new Date('2018-05-23'),
      'updatedBy': 'userId_1zezghozzge',
      'updatedAt': new Date('2018-05-24'),
      'threadId': 'commentID_7485248'
    },
    {
      'content': 'Finir le petit guide RH2, le mettre sur le drive et rajouter le lien de partage dans le mail de l\'automation mailjet "Guide prospect"',
      'properties': {'checked': true, 'archive': false},
      'createdBy': 'userId_1zezghozzge',
      'createdAt': new Date('2018-05-26'),
      'updatedBy': 'userId_1zezghozzge',
      'updatedAt': new Date('2018-05-27'),
      'threadId': 'commentID_7488948'
    }
    ]}],
  'createdBy': 'userId_1zezghozzge',
  'createdAt': new Date('2018-05-26'),
  'updatedBy': 'userId_1zezghozzge',
  'updatedAt': 'new Date("2018-05-27")'
}

const newBloc2 = {'projectId': 'projetId_65565',
  'title': 'Billet',
  'type': 'billet',
  'sections': [{'title': '',
    'elements': [{
      'content': 'Finir le petit guide RH1, le mettre sur le drive et rajouter le lien de partage dans le mail de l\'automation mailjet "Guide prospect"',
      'properties': {'checked': false, 'archive': false},
      'createdBy': 'userId_1zezghozzge',
      'createdAt': new Date('2018-05-23'),
      'updatedBy': 'userId_1zezghozzge',
      'updatedAt': new Date('2018-05-24'),
      'threadId': 'commentID_7485248'
    },
    {
      'content': 'Finir le petit guide RH2, le mettre sur le drive et rajouter le lien de partage dans le mail de l\'automation mailjet "Guide prospect"',
      'properties': {'checked': true, 'archive': false},
      'createdBy': 'userId_1zezghozzge',
      'createdAt': new Date('2018-05-26'),
      'updatedBy': 'userId_1zezghozzge',
      'updatedAt': new Date('2018-05-27'),
      'threadId': 'commentID_7488948'
    }
    ]}],
  'createdBy': 'userId_1zezghozzge',
  'createdAt': new Date('2018-05-26'),
  'updatedBy': 'userId_1zezghozzge',
  'updatedAt': 'new Date("2018-05-27")'
}

const newBloc3 = {'projectId': 'projetId_65565',
  'title': 'Ressources',
  'type': 'ressources',
  'sections': [{'title': '',
    'elements': [{
      'content': 'comment changer l\'image de partage sur stringigly ? ',
      'properties': {'checked': false, 'archive': false},
      'createdBy': 'userId_1zezghozzge',
      'createdAt': new Date('2018-05-23'),
      'updatedBy': 'userId_1zezghozzge',
      'updatedAt': new Date('2018-05-24'),
      'threadId': 'commentID_74852489'
    },
    {
      'content': 'Dans mail 1, on indique que si questions, les gens peuvent nous en fiare part. Est ce que les users peuvent répondre au mail 1 et ca arrive bien sur contact@wikajob.com?',
      'properties': {'checked': true, 'archive': false},
      'createdBy': 'userId_1zezghozzge',
      'createdAt': new Date('2018-05-27'),
      'updatedBy': 'userId_1zezghozzge',
      'updatedAt': new Date('2018-05-27'),
      'threadId': 'commentID_7488948'
    }
    ]}],
  'createdBy': 'userId_1zezghozzge',
  'createdAt': new Date('2018-05-26'),
  'updatedBy': 'userId_1zezghozzge',
  'updatedAt': 'new Date("2018-05-27")'
}

blocs.insert(newBloc)
blocs.insert(newBloc2)
blocs.insert(newBloc3)

// pensez à créer des index si recherche fréquente ou ajouter quelques contraintes
/* const users = db.get('users')
users.createIndex('email') */
