
var db = require("../models");

var Burger = db.Burger;

module.exports = function(app){
    //get all burgers
    app.get('/', function(req,res){
        
        Burger.findAll().
            then(function(allBurgers){
                var hbsObject = {
                    burgers: allBurgers
                }
                res.render("index",hbsObject)
            });  
    });

    //insert one burger
    app.post('/api/burgers', function(req, res){
        Burger.create(req.body).then(newBurger => res.json({id: newBurger.id}));
    });

    //update one burger
    app.put('/api/burgers/:id', function(req, res){
        Burger.update(req.body,{
            where:{
                id: req.params.id
            }
        }).then(burger => res.status(200).end())
    });
}