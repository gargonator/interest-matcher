// const db = require("../models");
// const Interest = db.Interest;
// console.log("interest:",Interest);
// var Interest = require("./interest");

module.exports = function(sequelize, DataTypes){

    var User = sequelize.define('User', {
        email: {
            type:DataTypes.STRING,
            validate:{
                isEmail:true
            }
        },
        password:{
            type:DataTypes.STRING,
            
        },
        name:{
            type:DataTypes.STRING,
            
        },
        description:{
            type:DataTypes.STRING,
        },
        picture:{
            type:DataTypes.STRING,
        },
        phone:{
            type:DataTypes.STRING,
        },
        latlong:{
            type:DataTypes.STRING,
        }
    })
    User.belongsToMany(sequelize.models.Interest,{through:"UserInterest"});
    User.hasMany(sequelize.models.Favorite);
    User.hasMany(sequelize.models.Match);
  
    
     return User;

};