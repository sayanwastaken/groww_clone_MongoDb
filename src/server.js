
const app=require('./index.js')
const connect=require('./config/db.js')
app.listen(6789,async()=>{
     await connect();
    console.log("Listening at 6789");
})

