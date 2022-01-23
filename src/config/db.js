
const mongoose=require("mongoose")

const connect=()=>{
    return mongoose.connect("mongodb+srv://GROWW:GROWW@cluster0.j2pgu.mongodb.net/stock")
}

module.exports=connect
