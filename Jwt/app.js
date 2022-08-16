const express = require("express");
const app = express();
require('./db/conn');
const User = require('./models/user');
const crypto=require("crypto");
const algo='aes256';
const key='pzalmi';

app.use(express.json());



app.post('/register', async (req,res)=>{
    const cipher=crypto.createCipheriv(algo,key);
    const encrypted = cipher.update(req.body.password,'utf8','hex')
    +cipher.final('hex')
    console.log(encrypted);
    
    const data=new User({
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        password:req.body.password,
    })
    const createuser = await data.save();
    res.status(201).send(createuser);

});
app.listen(3000)