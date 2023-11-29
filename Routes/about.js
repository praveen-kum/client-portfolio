const express = require('express');
require('../db')
let About =require('../Model/about');


  const about =express.Router()

about.get('/',async (req,res)=>{
    let employees = await About.find()
    res.send(employees)
})
about.get('/:_id',async (req,res)=>{
    let employees = await About.findOne(req.params)
    le=employees._id
    if(employees._id){
        res.send(employees)

    }
    else{
        res.send('thers no such  data')
    }
})
about.post('/', async(req,res)=>{
    let employee =new About(req.body);
    let result = await employee.save();
     
    res.send(result)
})
about.put('/:_id', async(req,res)=>{
    let employee =await About.updateOne(req.params,{$set: req.body});

    res.send(employee)
})

about.delete('/:_id',async (req,res)=>{
    let employees = await About.deleteOne(req.params)
    if(employees.deletedCount>0){
        res.send(employees)
    }

    else{
        res.send('thers no such data')
    }
})
module.exports=about;