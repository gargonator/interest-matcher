module.exports = function(sequelize, DataTypes){

    var Match = sequelize.define("Match",{
        matched_user:{
            type:DataTypes.INTEGER
        },
        distance:{
            type:DataTypes.INTEGER
        },
        matched_interests:{
            type:DataTypes.STRING
        },
    });

    return Match;

};