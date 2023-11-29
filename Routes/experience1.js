const express = require('express');
require('../db')
let Experience1 =require('../Model/experience1');


  const experience1 =express.Router()

  experience1.get('/',async (req,res)=>{
    let employees = await Experience1.find()
    res.send(employees)
})
experience1.get('/:_id',async (req,res)=>{
    let employees = await Experience1.findOne(req.params)
    le=employees._id
    if(employees._id){
        res.send(employees)

    }
    else{
        res.send('thers no such  data')
    }
})
experience1.post('/', async(req,res)=>{
    let employee =new Experience1(req.body);
    let result = await employee.save();
     
    res.send(result)
})
experience1.put('/:_id', async(req,res)=>{
    let employee =await Experience1.updateOne(req.params,{$set: req.body});
    res.send(employee)
})
experience1.delete('/:_id',async (req,res)=>{
    let employees = await Experience1.deleteOne(req.params)
    if(employees.deletedCount>0){
        res.send(employees)
    }

    else{
        res.send('thers no such data')
    }
})
module.exports=experience1;