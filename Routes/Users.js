const express = require('express');
require('../db')
let Users=require('../Model/users')

  const user =express.Router()
  

  user.get('/',async (req,res)=>{
    let users = await Users.find()
    res.send(users)
})
user.get('/:_id',async (req,res)=>{
    let users = await Users.findOne(req.params)

    if(users._id==req.params._id){
        res.send(users)
    }
    else{
        // res.send(users._id)
        res.send("thers no such data")
    }
})

user.post('/', async(req,res)=>{
    let user =new Users(req.body);
    let result = await user.save();

    res.send(result)
})
user.put('/:_id', async(req,res)=>{
    let users =await Users.updateOne(req.params,{$set: req.body});
    
    res.send(users)
})
user.delete('/:_id',async (req,res)=>{
    let users = await Users.deleteOne(req.params.id)
    if(users.deletedCount>0){
        res.send(users)
    }
    else{
        res.send('thers no such data')
    }
})
module.exports=user;