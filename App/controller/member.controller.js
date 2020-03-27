const User = require('mongoose').model('User')
let jwt = require('jsonwebtoken')
exports.login =((req,res)=>{
    User.findOne({email:req.body.email})
        .then(user =>{
            jwt.sign({id:user._id},"jwtSecret",{expiresIn:7000},(err,token)=>{
                if(err) throw err;
                res.json({token,user,msg:'login success'})
            })
            
        })
        .catch(e =>{
            console.log('login fail');
            
        })
})
exports.register = ((req,res)=>{
    User.update({email:req.body.email},req.body,{upsert:true},(err)=>{
        if(err) throw err;
        res.json({msg:'register Success'})
    })
})