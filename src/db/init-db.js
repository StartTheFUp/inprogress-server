const db = require('monk')('localhost/inprogress')

//la base de donnée est créée dans le terminal avec :
//mongo
//use inprogress

//création des collections ! db.get('users').drop()
const users = db.create('users')
const projects = db.create('projects')
const blocs = db.create('blocs')
const comments = db.create('comments')

console.log("init-mongo", db.collection('users'))
// insertion d'un document user
const userNew = {'name':'project3Test', 'client':[{'name':'Mich'}, {'name':'M', 'password':'$h25'}], 'created_at':"2018-05-24"}

users.insert(userNew)

//insertion document blocs
const newBloc = {'idProjet':'projetId_65565','title':'ToDo Client','type':'ToDo',
    'sections':[{'title':'section1', 'elements':[{
        'content': 'Finir le petit guide RH1, le mettre sur le drive et rajouter le lien de partage dans le mail de l\'automation mailjet "Guide prospect"',
        'properties':{'checked': false, 'archive' : false},
        'createdBy':'userId_1zezghozzge',
        'createdAt':new Date("2018-05-23"),
        'updateBy':'userId_1zezghozzge',
        'updateAt':new Date("2018-05-24"),
        'threadId':"commentID_7485248",
        },
        {
        'content': 'Finir le petit guide RH2, le mettre sur le drive et rajouter le lien de partage dans le mail de l\'automation mailjet "Guide prospect"',
        'properties':{'checked': true, 'archive' : false},
        'createdBy':'userId_1zezghozzge',
        'createdAt':new Date("2018-05-26"),
        'updateBy':'userId_1zezghozzge',
        'updateAt':new Date("2018-05-27"),
        'threadId':"commentID_7488948",
        } 
    ]}],
    'createdBy':'userId_1zezghozzge',
    'createdAt':new Date("2018-05-26"),
    'updateBy':'userId_1zezghozzge',
    'updateAt':'new Date("2018-05-27")'
}

const newBloc2 = {'idProjet':'projetId_65565','title':'Billet','type':'ToDo',
    'sections':[{'title':'section1', 'elements':[{
        'content': 'Finir le petit guide RH1, le mettre sur le drive et rajouter le lien de partage dans le mail de l\'automation mailjet "Guide prospect"',
        'properties':{'checked': false, 'archive' : false},
        'createdBy':'userId_1zezghozzge',
        'createdAt':new Date("2018-05-23"),
        'updateBy':'userId_1zezghozzge',
        'updateAt':new Date("2018-05-24"),
        'threadId':"commentID_7485248",
        },
        {
        'content': 'Finir le petit guide RH2, le mettre sur le drive et rajouter le lien de partage dans le mail de l\'automation mailjet "Guide prospect"',
        'properties':{'checked': true, 'archive' : false},
        'createdBy':'userId_1zezghozzge',
        'createdAt':new Date("2018-05-26"),
        'updateBy':'userId_1zezghozzge',
        'updateAt':new Date("2018-05-27"),
        'threadId':"commentID_7488948",
        } 
    ]}],
    'createdBy':'userId_1zezghozzge',
    'createdAt':new Date("2018-05-26"),
    'updateBy':'userId_1zezghozzge',
    'updateAt':'new Date("2018-05-27")'
}

blocs.insert(newBloc)
blocs.insert(newBloc2)

// pensez à créer des index si recherche fréquente ou ajouter quelques contraintes
/*const users = db.get('users')
users.createIndex('email')*/
