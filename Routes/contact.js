const express = require('express');
require('../db')
let Contact =require('../Model/contact')

  const contact =express.Router()

contact.get('/',async (req,res)=>{
    let employees = await Contact.find()
    res.send(employees)
})
contact.get('/:_id',async (req,res)=>{
    let employees = await Contact.findOne(req.params)
    le=employees._id
    if(employees._id){
        res.send(employees)

    }
    else{
        res.send('thers no such  data')
    }
})
contact.post('/', async(req,res)=>{
    let employee =new Contact(req.body);
    let result = await employee.save();
     
    res.send(result)
})
contact.put('/:_id', async(req,res)=>{
    let employee =await Contact.updateOne(req.params,{$set: req.body});
    
    res.send(employee)
})
contact.delete('/:_id',async (req,res)=>{
    let employees = await Contact.deleteOne(req.params)
    if(employees.deletedCount>0){
        res.send(employees)
    }
    else{
        res.send('thers no such data')
    }
})
module.exports=contact;