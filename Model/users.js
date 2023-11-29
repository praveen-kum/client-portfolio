let mongoose =require('mongoose')
 let users =new mongoose.Schema({
    name:String,
    age:String
 })

 
 module.exports=mongoose.model('users',users)