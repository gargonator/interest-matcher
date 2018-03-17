
var db = require("../models");
var getMatches = require("../controllers/matcher.js")
const User = db.User;
const Favorite = db.Favorite;
const Match = db.Match;
const Interest = db.Interest;
//get all users or a specific user
module.exports = function(app){
    
    //********** USERS **********************************/
    //test
    app.get("/api/userfindcreate", function(req, res) {
        User
        .findOrCreate({where: {name: 'test',email:"some@gmail.com",password:"123"}})
        .spread((user, created) => {
            console.log(user.get({
            plain: true
            }))
            console.log(created)
            res.json(user);
        });
    });
    


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
        console.log(req.body);
        User.update(req.body,{
            where:{
                id: req.params.id
            }
        })
        .then(results => {
           return getMatches(req.body, req.params.id);
        })
        .then(results => {
            Match.bulkCreate(results)
            res.json(results);
        })

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
        db.sequelize.query("SELECT * FROM Matches WHERE UserId = " + req.params.id, { type: db.sequelize.QueryTypes.SELECT})
        .then(matches => res.json(matches));
    });

    //********** Interest **********************************/
    
    //get all interest
    app.get('/api/interests/', function(req, res){
        Interest.findAll()
            .then(interests => res.json(interests));
    });
    
}
