const mongoose = require('mongoose')
let Schema  = mongoose.Schema

let UserScema = new Schema({
    email:{type:String,unique:true},
    name:String,
    password:String,
    // bookmark:[Object],
    role:String
})
mongoose.model('User',UserScema)