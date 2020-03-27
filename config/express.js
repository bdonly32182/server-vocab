const express =require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
module.exports =()=>{
    const app = express()
    app.use(cors())
    app.use(express.json())

    require('../App/route/member.route')(app)
    require('../App/route/word.route')(app)
    require('../App/route/answer.route')(app)
    return app
}