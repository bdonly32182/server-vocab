const Answer = require('mongoose').model('Answer')

exports.createAnswer =((req,res)=>{
    // let answer  = new Answer(req.body)
    // answer.save().then(res.json({msg:'create answer success'}))
    console.log(req.body.answer);
    
    Answer.update({question:req.body.question},req.body,{upsert:true},(err)=>{
        if(err) throw err
        res.json({msg:'create answer success'})
    })
})

exports.listAnswer = ((req,res)=>{
    Answer.find().then(answer=>{
        res.json(answer)
    })
})
exports.Answer =((req,res)=>{
    res.json(req.answer)
})

exports.delAnswer = ((req,res)=>{
    req.answer.remove()
    res.json({msg:"delete success"})
})
exports.AnswerByid = ((req,res,next,id)=>{
    Answer.findById({_id:id}).then(answer =>{
        req.answer = answer
        next()
    }).catch(e=>{
        console.log('answer byid fail');
        
    })
})

//react-native
exports.randomAnswer =((req,res)=>{
    const {category} = req.params
    Answer.aggregate([{$match:{class:category}},{$sample:{size:3}}]).then(async(result)=>{
        console.log(result);
        res.json(result)
    })
})