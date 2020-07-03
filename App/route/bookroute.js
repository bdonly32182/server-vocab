let auth = require('../../middleware/Auth')

module.exports =(app)=>{
    const bookmark = require('../controller/bookmarkCon')
    app.post('/native/saveword',auth,bookmark.saveword)
    app.post('/native/cancleword',auth,bookmark.cancleword)
    app.get('/native/bookmark',auth,bookmark.bookmarks)
   
}