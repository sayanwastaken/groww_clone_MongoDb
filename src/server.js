
const app=require('./index.js')
const connect=require('./config/db.js')
const port = process.env.PORT || 3000;
app.listen(port,async()=>{
     await connect();
    console.log("Listening at ");
})

