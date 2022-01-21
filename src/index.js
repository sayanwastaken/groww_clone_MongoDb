const express=require('express')
const path=require('path')
const app=express()
app.use(express.static("public"))
app.set('view engine','ejs')


app.get('/index',(req,res)=>{
    res.render("index")

})

app.get('/stockPage',(req,res)=>{
    res.render("stockPage")

})
app.get('/home',(req,res)=>{
    res.render("home")

})
app.get('/MutualFunds',(req,res)=>{
    res.render("MutualFunds")

})
app.get('/stockPage',(req,res)=>{
    res.render("stockPage")

})
app.get('/Grow_cart_page',(req,res)=>{
    res.render("Grow_cart_page")

})

module.exports=app