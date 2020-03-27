module.exports=(app)=>{
    let member = require('../controller/member.controller')
    app.post('/login',member.login)
    app.post('/register',member.register)
}