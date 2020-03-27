const mongoose = require('mongoose')
const uri ="mongodb+srv://palit:ice123@cluster0-api4j.mongodb.net/test?retryWrites=true&w=majority"

module.exports=()=>{
    mongoose.set('debug',true)
    let db = mongoose.connect(uri,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true})
    require('../App/model/answer.model')
    require('../App/model/member.model')
    require('../App/model/word.model')
    return db
}