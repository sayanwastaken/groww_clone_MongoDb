const mongoose=require('mongoose')


module.exports=()=>{

    return mongoose.connect('mongodb+srv://GROWW:GROWW@cluster0.j2pgu.mongodb.net/')

}