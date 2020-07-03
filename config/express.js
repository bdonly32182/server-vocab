const express =require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
let path = require('path')

module.exports =()=>{
    const app = express()
    app.use(cors())
    app.use(express.json())

    require('../App/route/member.route')(app)
    require('../App/route/word.route')(app)
    require('../App/route/answer.route')(app)
    require('../App/route/bookroute')(app)
    if (process.env.NODE_ENV ==='production') {
        app.use(express.static("public"))
        app.use(express.static('client/build'))
        app.get('*',(req,res)=>{
            res.sendFile(path.resolve(__dirname,'client','build','index.html'))
        })
    }
    return app
}