const mongoose = require('mongoose')
let Schema = mongoose.Schema

let wordSchema = new Schema({
    word:String,
    mean:String,
    category:String,
    wordTosame:String,
    class:String
})

mongoose.model('Word',wordSchema)