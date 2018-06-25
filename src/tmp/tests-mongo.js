/* const db = require('../db/db.js');

console.log(db.readBlocks())

db.blocks.update({
    _id: "5b2125cd2193044f3470a23b",
    'sections.id': "sectionTodo5"
}
    ,
    {
        $addToSet: { 'sections.$.elements': { title: "Nouveau" } }
    });

db.blocks.update({
    _id: "5b2125cd2193044f3470a23b",
    'sections.id': "sectionTodo5",
    'sections.elements.id': 'elt12'
}
    ,
    {
        $set: { 'sections.$.elements.$': { content: "Nouveau" } }
    });

db.blocks.update({
    _id: "5b2125cd2193044f3470a23b"
}
    ,
    {
        {}
    }
);
 */