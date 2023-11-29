let mongoose =require('mongoose')
 let aboutSchema =new mongoose.Schema({
    name:String,
    
 })

 module.exports=mongoose.model('about',aboutSchema)
 