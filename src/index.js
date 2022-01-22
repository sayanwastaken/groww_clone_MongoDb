const express=require('express')
const path=require('path')
const app=express()
app.use(express.static("public"))
app.set('view engine','ejs')



app.use(cookieSession({
    name: 'tuto-session',
    keys: ['key1', 'key2']
  }));

app.use(passport.initialize());
app.use(passport.session());
app.get(
    '/auth/google',
    passport.authenticate('google', 
    { scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
        ]
    })
);



app.get('/user',(req,res)=>{

  return  res.render('userAuthentication')
})

app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile','email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.render('home');
  });

app.get("/auth/google/failure", (req, res) => {
  return res.send("Failure");
});


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