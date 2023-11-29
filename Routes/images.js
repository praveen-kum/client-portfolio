const express = require('express');
require('../db')
let Images =require('../Model/images')

  const image =express.Router()

image.get('/',async (req,res)=>{
    let employees = await Images.find()
    res.send(employees)
})
image.get('/:_id',async (req,res)=>{
    let employees = await Images.findOne(req.params)
    le=employees._id
    if(employees._id){
        res.send(employees)

    }
    else{
        res.send('thers no such  data')
    }
})
image.post('/', async(req,res)=>{
    let employee =new Images(req.body);
    let result = await employee.save();
     
    res.send(result)
})
image.put('/:_id', async(req,res)=>{
    let employee =await Images.updateOne(req.params,{$set: req.body});
    
    res.send(employee)
})
image.delete('/:_id',async (req,res)=>{
    let employees = await Images.deleteOne(req.params)
    if(employees.deletedCount>0){
        res.send(employees)
    }
    else{
        res.send('thers no such data')
    }
})
module.exports=image;