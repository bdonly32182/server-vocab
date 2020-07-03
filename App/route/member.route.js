const auth = require('../../middleware/Auth')
module.exports=(app)=>{
    let member = require('../controller/member.controller')
    app.post('/login',member.login)
    app.post('/register',member.register)
    app.get('/user/loaduser',auth,member.load_user)

}