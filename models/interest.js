// const db = require("../models");
// const User = db.User;

module.exports = function(sequelize, DataTypes){

    var Interest = sequelize.define("Interest",{
        interest:{
            type:DataTypes.STRING,
        }

    });
    // Interest.belongsToMany(sequelize.models.User, {through:"UserInterest"});
        
    return Interest;

};