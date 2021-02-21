const Bookmark = require('mongoose').model('Bookmark')
exports.saveword =((req,res)=>{
    console.log('====================================');
    console.log(req.user.id);
    console.log('====================================');
    let bookmark = new Bookmark(req.body)
    bookmark.user_id = req.user.id
    bookmark.save(function(err){
        if (err) res.json({msg:'save fail'})
        if (!err)  res.json({msg:'save success'})
    })
    // Bookmark.findById({user_id:req.user.id},{$addToSet:{bookmark:req.body.vocabs}})
    //     res.json({msg:'save success'})
})
exports.cancleword = (async(req,res)=>{

    let book = await Bookmark.deleteOne({$and:[{'bookmark.word':req.body.bookmark.word},{user_id:req.user.id}]});
    
    res.json({msg:'cancle word success'})
})
exports.bookmarks =((req,res)=>{
    
    Bookmark.find({user_id:req.user.id},'bookmark')
            .then(result=>{
                res.json(result)
            }).catch(e=>{
                console.log('book fetch fail');
                res.sendStatus(400)
            })
   
})