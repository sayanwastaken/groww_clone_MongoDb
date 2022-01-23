const passport = require("passport");
const redis = require("redis");
// const client=redis.createClient()

const GoogleStrategy = require("passport-google-oauth2").Strategy;

const GOOGLE_CLIENT_ID =
  "971389226126-1fa93in8q2mh97mga5e27jjdr15du387.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.serializeUser(function (user, callback) {
  callback(null, user);
});

passport.deserializeUser(function (user, callback) {
  callback(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:6789/auth/google/callback",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    async function (accessToken, refreshToken, profile, cb) {
      //  client.setex('userProfile',60*5,JSON.stringify(profile))

      return cb(null, profile);
    }
  )
);

module.exports = passport;
