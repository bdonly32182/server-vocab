const mongoose = require('mongoose')
let schema = mongoose.Schema

let answerSchema = new schema({
    question:String,
    choiceA:String,
    choiceB:String,
    choiceC:String,
    choiceD:String,
    choiceCorrect:String
}) 
mongoose.model('Answer',answerSchema)