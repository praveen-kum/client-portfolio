let mongoose =require('mongoose')
 let experience1Schema =new mongoose.Schema({
    role:String,
    company:String,
    duration:String,
    description:String,
 })

 module.exports=mongoose.model('experience1',experience1Schema)