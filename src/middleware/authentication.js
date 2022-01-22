const app=require('../index.js')
const passport=require('passport')
const cookieSession = require('cookie-session')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const User=require('../model/user.model.js')



const GOOGLE_CLIENT_ID="971389226126-1fa93in8q2mh97mga5e27jjdr15du387.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET="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"

passport.serializeUser(function (user, callback) {
    callback(null, user);
  });
  
  passport.deserializeUser(function (user, callback) {
    callback(null, user);
  });

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:6789/auth/google/callback",
    userProfileURL: 'https://www.googleapis.com/oauth2/v3/userinfo'
  },
  async function(accessToken, refreshToken, profile, cb) {

    const isUser=await User.find({email:profile._json.email}).lean().exec()
    if(isUser.length===0){
        const user=await User.create({
            email:profile._json.email,
            password:12345
        })
        console.log(user);
        return cb(null,user)
    }
    if(isUser.length!==0){
        console.log("hihihih");
        return cb(null,{user:"Already exist"})
    }
  }
));

module.exports=passport;