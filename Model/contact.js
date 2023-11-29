let mongoose =require('mongoose')
 let contactSchema =new mongoose.Schema({
    mail:String,
    linkedin:String,
    phone:Number,
    
    
 })

 module.exports=mongoose.model('contact',contactSchema)