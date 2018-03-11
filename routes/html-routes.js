// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route 
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/assets/html/index.html"));
    // res.render('index');
  });

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

};
