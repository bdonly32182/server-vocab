let auth = require('../../middleware/Auth')

module.exports =(app)=>{
    let word = require('../controller/word.controller')
    app.post('/createWord',word.createWord)
    app.get('/listword',word.listword)
    app.get('/word/:id',word.Readword)
    app.post('/find',word.findword)
    app.get('/native/listword/:category',word.randomword)
    app.delete('/delword/:id',word.delWord)
    app.param('id',word.wordByid)
}