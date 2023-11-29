const express = require('express');
require('../db')
let Roles =require('../Model/roles')

  const role =express.Router()

role.get('/',async (req,res)=>{
    let employees = await Roles.find().maxTimeMS(15000)
    res.send(employees)
})
role.get('/:_id',async (req,res)=>{
    let employees = await Roles.findOne(req.params)
    le=employees._id
    if(employees._id){
        res.send(employees)

    }
    else{
        res.send('thers no such  data')
    }
})
role.post('/', async(req,res)=>{
    let employee =new Roles(req.body);
    let result = await employee.save();
    
    res.send(result)
})
role.put('/:_id', async(req,res)=>{
    let employee =await Roles.updateOne(req.params,{$set: req.body});
    
    res.send(employee)
})
role.delete('/:_id',async (req,res)=>{
    let employees = await Roles.deleteOne(req.params)
    if(employees.deletedCount>0){
        res.send(employees)
    }
    else{
        res.send('thers no such data')
    }
})
module.exports=role;