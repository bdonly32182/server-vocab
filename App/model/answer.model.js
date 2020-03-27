const mongoose = require('mongoose')
let schema = mongoose.Schema

let answerSchema = new schema({
    question:String,
    choice:[String],
    choiceCorrect:String
}) 
mongoose.model('Answer',answerSchema)