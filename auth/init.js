var passport = require('passport');
// var passport = require("./google");
var db = require("../models");
const user = db.User;


module.exports = function() {
    console.log("entra init");
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

};