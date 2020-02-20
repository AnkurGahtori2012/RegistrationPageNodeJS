var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20');
let User = require('./schema');
// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.serializeUser((user, done) => {
  done(null, user.id);
})
passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
   // console.log('deserial',id);
    done(null, user);
  })
})
passport.use(new GoogleStrategy({
    clientID: '825353393874-l1jmgm2gqk7p89q9l1fi331ic29sho5n.apps.googleusercontent.com',
    clientSecret: "tUfV-wiWFWNsEP7CdT4c_X-i",
    callbackURL: "/auth/login/redirect"
  },
  function (token, tokenSecret, profile, done) {
    User.findOne({
      googleid: profile.id
    }).then((currentUser) => {
      if (currentUser) {
        //user already exist
        console.log("User already Exist : ");
        done(null, currentUser);
      } else {
        //if user not exist
        console.log("user does not exist");
        // console.log(profile);
        new User({
          username: profile.displayName,
          googleid: profile.id,
          email: profile.emails[0].value,
          img: profile.photos[0].value,
          firstname: "",
          lastname: "",
          state: "",
          password: profile.id,
        }).save().then((newUser) => {
          console.log("New user created : ");
          done(null, newUser);
        });
      }
    })

  }
));