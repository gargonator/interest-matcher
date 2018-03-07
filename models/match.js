module.exports = function(sequelize, DataTypes){

    var Match = sequelize.define("Match",{
        Matched_User:{
            type:DataTypes.STRING
        },
        Distance:{
            type:DataTypes.INTEGER
        },
        Matched_Interests:{
            type:DataTypes.STRING
        },
    });

    return Match;

};