module.exports = function(sequelize, DataTypes){

    var Favorite = sequelize.define("Favorite",{
        favorited_user:{
            type:DataTypes.STRING
        },
    })

    return Favorite;

};