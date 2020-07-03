const mongoose = require('mongoose')
let schema = mongoose.Schema

let Bookmark = new schema({
    user_id : String,
    bookmark:[Object]
})

mongoose.model('Bookmark',Bookmark)