module.exports = function(sequelize, DataTypes){

    var Favorite = sequelize.define("Favorite",{
        Favorited_User:{
            type:DataTypes.STRING
        },
    })

    return Favorite;

};