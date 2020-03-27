const mongoose = require('./config/mongoose')
const express = require('./config/express')
const db = mongoose()
const app = express()
let PORT = process.env.PORT || 3001

app.listen(PORT,()=>{
    console.log('server run port 3001');
    
})