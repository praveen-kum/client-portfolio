let mongoose =require('mongoose')
 let imagesSchema =new mongoose.Schema({
    url:String,
    description:String,
 })

 module.exports=mongoose.model('images',imagesSchema)
 