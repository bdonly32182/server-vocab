const Word = require('mongoose').model('Word')

exports.createWord = ((req,res)=>{
    Word.update({word:req.body.word},req.body,{upsert:true},(err)=>{
        if(err) throw err
        res.json({msg:'create word success'})
    })
})

exports.listword = ((req,res)=>{
    Word.find().then(word=>{
        res.json(word)
    })
})
exports.Readword =((req,res)=>{
    res.json(req.word)
})
exports.delWord = ((req,res)=>{
    req.word.remove()
    res.json({msg:"delete word success"})
})
exports.wordByid = ((req,res,next,id)=>{
    Word.findById({_id:id})
        .then(word=>{
            req.word = word
            next()
        }).catch(e=>{
            console.log('byid fail');
            
        })
})