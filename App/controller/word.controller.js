const Word = require('mongoose').model('Word')
const Answer = require('mongoose').model('Answer')
//api for react
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
exports.findword =((req,res)=>{
    console.log(req.body);
    let {word,category} = req.body
    if (category ==="word") {
        Word.find({word:word}).then(word=>{
            res.json(word)
        }).catch(e=>{
            res.json({msg:'find faild'})
        })   
    }
    
})
//api for react-native
exports.randomword =((req,res)=>{
    const {category} = req.params
    console.log(category);
    
   const word = Word.aggregate([{$match:{class:category}},{$sample:{size:50}}]).then(result=>{
       console.log(result);
       res.json(result)
   })
   
})

//twin api
exports.wordByid = ((req,res,next,id)=>{
    Word.findById({_id:id})
        .then(word=>{
            req.word = word
            next()
        }).catch(e=>{
            console.log('byid fail');
            
        })
})