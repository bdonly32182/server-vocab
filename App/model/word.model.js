const mongoose = require('mongoose')
let Schema = mongoose.Schema

let wordSchema = new Schema({
    word:String,
    mean:String,
    category:String,
    wordTosame:String,
    class:String,
    mark:[Object]
})

mongoose.model('Word',wordSchema)