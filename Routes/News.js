const express = require('express');
require('../db')
let News =require('../Model/news')

  const news =express.Router()

news.get('/',async (req,res)=>{
    let employees = await News.find()
    res.send(employees)
})
news.get('/:_id',async (req,res)=>{
    let employees = await News.findOne(req.params)
    le=employees._id
    if(employees._id){
        res.send(employees)

    }
    else{
        res.send('thers no such  data')
    }
})
news.post('/', async(req,res)=>{
    let employee =new News(req.body);
    let result = await employee.save();
    
    res.send(result)
})
news.put('/:_id', async(req,res)=>{
    let employee =await News.updateOne(req.params,{$set: req.body});
    
    res.send(employee)
})
news.delete('/:_id',async (req,res)=>{
    let employees = await News.deleteOne(req.params)
    if(employees.deletedCount>0){
        res.send(employees)
    }
    else{
        res.send('thers no such data')
    }
})
module.exports=news;