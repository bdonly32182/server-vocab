const mongoose = require('mongoose')
let schema = mongoose.Schema

let answerSchema = new schema({
    question:String,
    choiceA:String,
    choiceB:String,
    choiceC:String,
    choiceD:String,
    class:String,
    answer:String
}) 
mongoose.model('Answer',answerSchema)