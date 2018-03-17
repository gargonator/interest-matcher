var passport = require('passport');

//configure strategy
var GoogleStrategy = require('passport-google-oauth20').Strategy;
var configStrategy = require("../config/config");

var db = require("../models");
const User = db.User;
var init = require('./init');

function generateOrFindUser(accessToken, refreshToken, profile, done){
    if(profile.emails[0]) {
    //   User.findOrCreate(
    //     { email: profile.emails[0].value },
    //     {
    //       name: profile.displayName || profile.username,
    //       email: profile.emails[0].value,
    //       picture: profile.photos[0].value
    //     },
    //     {
    //       upsert: true
    //     },
    //     done
    //     );
    User.findOrCreate({where: {email:profile.emails[0].value}})
        .spread((user, created) => {
            console.log(user.get({
            plain: true
            }))
            console.log(created)
            res.json(user);
        });
     } else {
        var noEmailError = new Error("Your email privacy settings prevent you from signing in.");
        done(noEmailError, null);
       }
  }



passport.use(new GoogleStrategy({
    clientID: '72738870434-fuiu37kp75tt1ftd5bnkgcglitl07bg7.apps.googleusercontent.com',
    clientSecret: 'R85TbYM2fvdTBjFe842Kkc6K',
    callbackURL: "http://localhost:3000/profile",
    profileFields: ['id', 'displayName', 'photos', 'email']
  },generateOrFindUser));
//   function(accessToken, refreshToken, profile, cb) {
//     // findOne({ where: {googleId: profile.id} })
//     console.log("email:",profile.emails[0]);
//     User
//     .findOrCreate({where: {id: profile.id}})
//     // // .findOrCreate({where: {name: 'test',email:"some@gmail.com",password:"123"}})
//     //     .spread((user, created) => {
//     //         console.log("user",user.get({
//     //         plain: true
//     //         }))
//     //         console.log("created:",created)
//     //         // res.json(user);
//     //         // return cb(err, user); 
//     //     })
//     .then(function(User){
//         console.log("entra user:",User);
//       return cb(err, User);      
//     });

    passport.serializeUser(function(user, done) {
        console.log("entra seiral: ",user);
          
        done(null, user.id);
      });
    
      passport.deserializeUser(function(id, done) {
        console.log("entra des: ",id);
    
        User.findById(id, function (err, user) {
          done(err, user);
        });
      });
    
//   }
// ));
init();

module.exports = passport;