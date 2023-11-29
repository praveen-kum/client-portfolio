let mongoose =require('mongoose')
 let rolesSchema =new mongoose.Schema({
   name:String,
   name2:String,
 })
 module.exports=mongoose.model('roles',rolesSchema)