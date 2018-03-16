var db = require("../models");
var compute = require("../public/assets/js/sql_test.js")

const User = db.User;
const Favorite = db.Favorite;
const Match = db.Match;
const Interest = db.Interest;

const getMatches = compute.getMatches;
//get all users or a specific user
module.exports = function(app){
    
    //********** USERS **********************************/
    
    // Get route for retrieving a single user
    app.get("/api/users/:id?", function(req, res) {
        if(req.params.id){
            User.findById(req.params.id).then(user => res.json(user));
        }
        else{
            User.findAll().then(user => res.json(user));
        }
    });
    
    //insert one user
    app.post('/api/user', function(req, res){
        // res.render("profile");
        User.create(req.body).then(newUser => res.json({id: newUser.id}));
    });

    //update one user
    app.put('/api/user/:id', function(req, res){
        User.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        .then(function()
        {   
            // const arrMatches = computematches();
            // console.log("computematches:",arrMatches);
            // return Match.bulkCreate(arrMatches);
            resolve(getMatches(req.body));
        }).then(matches => res.json(matches))
        
    });
    //********** Favorites **********************************/
    
    //get favorites by user
    app.get('/api/favorites/:id', function(req,res){
        Favorite.findAll({
            where: {
              UserId: req.params.id
            }
          })
        .then(favorite => res.json(favorite));
    });

     //********** Matches **********************************/
    
    //get matches by user
    app.get('/api/matches/:id', function(req,res){
        Match.findAll({
            where: {
              UserId: req.params.id
            }
          })
        .then(favorite => res.json(favorite));
    });

    //********** Interest **********************************/
    
    //get all interest
    app.get('/api/interests/', function(req,res){
        Interest.findAll()
        .then(interests => res.json(interests));
    });
    
}