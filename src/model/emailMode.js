const mongoose=require('mongoose')

const emailModel=new mongoose.Schema({
    email:{type:String,required:true}
})

module.exports=mongoose.model('email',emailModel)