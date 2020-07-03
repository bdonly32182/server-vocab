const User = require('mongoose').model('User')
let jwt = require('jsonwebtoken')
exports.login =((req,res)=>{
    console.log(req.body);
    
    User.findOne({email:req.body.email,password:req.body.password})
        .then(user =>{
            jwt.sign({id:user._id},"jwtSecret",{expiresIn:7000},(err,token)=>{
                if(err) throw err;
                res.json({token,user,msg:'login success'})
            })
            
        })
        .catch(e =>{
            console.log('login fail');
            res.json({msg:'Please Check email or password'})
        })
})
exports.register = ((req,res)=>{
    User.update({email:req.body.email},req.body,{upsert:true},(err)=>{
        if(err) throw err;
        res.json({msg:'register Success'})
    })
})

exports.load_user =((req,res)=>{
    User.findById({_id:req.user.id})
    .then(user=>{
        console.log(user);
       
         res.json({user})    
    })
})