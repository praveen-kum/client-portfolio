let mongoose =require('mongoose')

 let resume =new mongoose.Schema({
    name: String,
    data: Buffer,
    createdAt: { type: Date, default: Date.now },
 })


 module.exports=mongoose.model('resume',resume)
 