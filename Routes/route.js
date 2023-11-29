const express = require('express');
require('../db')
let Employees =require('../Model/employee')

  const emp =express.Router()
  
emp.get('/employees',async (req,res)=>{
    let employees = await Employees.find()
    res.send(employees)
})
emp.get('/employees/:_id',async (req,res)=>{
    let employees = await Employees.findOne(req.params)
    le=employees._id
    if(employees._id){
        res.send(employees)

    }

    else{
        res.send('thers no such  data')
    }
})
emp.post('/employees', async(req,res)=>{
    let employee =new Employees(req.body);
    let result = await employee.save();
     
    res.send(result)
})
emp.put('/employees/:_id', async(req,res)=>{
    let employee =await Employees.updateOne(req.params,{$set: req.body});
    
    res.send(employee)
})

emp.delete('/employees/:_id',async (req,res)=>{
    let employees = await Employees.deleteOne(req.params.id)
    if(employees.deletedCount>0){
        res.send(employees)
    }
    else{
        res.send('thers no such data')
    }
})
module.exports=emp;