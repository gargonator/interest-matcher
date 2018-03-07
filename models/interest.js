module.exports = function(sequelize, DataTypes){

    var Interest = sequelize.define("Interest",{
        Interest:{
            type:DataTypes.STRING,
        }

    });
    return Interest;

};