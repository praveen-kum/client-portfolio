let mongoose =require('mongoose')
 let news =new mongoose.Schema({
    name:String,
    
 })
 module.exports=mongoose.model('news',news)
 