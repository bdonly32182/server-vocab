module.exports=(app)=>{
    let answer = require('../controller/answer.controller')
    app.post('/createanswer',answer.createAnswer)
    app.get('/listAnswer',answer.listAnswer)
    app.get('/answer/:id',answer.Answer)
    app.route('/answeredit/:id')
        .delete(answer.delAnswer)
    app.get('/native/answer/:category',answer.randomAnswer)
    app.param('id',answer.AnswerByid)
}