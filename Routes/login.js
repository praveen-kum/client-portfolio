const express = require('express');
require('../db')
let Login =require('../Model/login')

  const login =express.Router()

login.get('/',async (req,res)=>{
    let employees = await Login.find()
    res.send(employees)
})
login.get('/:_id',async (req,res)=>{
    let employees = await Login.findOne(req.params)
    le=employees._id
    if(employees._id){
        res.send(employees)

    }
    else{
        res.send('thers no such  data')
    }
})
login.post('/', async(req,res)=>{
    let employee =new Login(req.body);
    let result = await employee.save();
     
    res.send(result)
})
login.put('/:_id', async(req,res)=>{
    let employee =await Login.updateOne(req.params,{$set: req.body});
    
    res.send(employee)
})
login.delete('/:_id',async (req,res)=>{
    let employees = await Login.deleteOne(req.params)
    if(employees.deletedCount>0){
        res.send(employees)
    }
    else{
        res.send('thers no such data')
    }
})
module.exports=login;