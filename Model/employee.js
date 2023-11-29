let mongoose =require('mongoose')
 let employeeSchema =new mongoose.Schema({
    name:String,
    gender:String
 })

 module.exports=mongoose.model('employees',employeeSchema)