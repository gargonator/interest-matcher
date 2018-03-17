// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var passport = require('../auth/google');

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route 
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/index.html"));
    // res.render('index');
  });
// *********** NEW **************
  app.get('/login', function(req, res, next) {
    res.send('Go back and register!');
  });

  app.get('/auth/google',
  passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/userinfo.email', 
  'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/plus.login',
    'https://www.googleapis.com/auth/plus.me'] }));
 
  app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
      function(req, res) {
      // Successful authentication, redirect home. 
      console.log("success auth:");
      
      res.redirect('/');
  });
// *********** NEW **************

  //Sign up route
  app.get("/signup", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/signup.html"));
    // res.render("signup");
  });
  //Login route
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/login.html"));
    // res.render("login");
    
  });

  // Route to the profile page
  app.get("/profile", function(req, res) {
    
    res.sendFile(path.join(__dirname, "../public/assets/html/profile.html"));
    // res.render("profile");
  });

 // Route to the matches page
 app.get("/matches", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/html/matches.html"));
  // res.render("profile");
});

 // Route to the favorites page
 app.get("/favorites", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/html/favorites.html"));
});
 // Route to the settings page
 app.get("/settings", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/assets/html/settings.html"));
});

};
