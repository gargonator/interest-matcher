module.exports = function(sequelize, DataTypes){

    var User = sequelize.define('User', {
        email: {
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                isEmail:true
            }
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
                notNull:true
            }
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true,
                notNull:true
            }
        },
        Description:{
            type:DataTypes.STRING,
        },
        Picture:{
            type:DataTypes.STRING,
        },
        Phone:{
            type:DataTypes.STRING,
        },
        LatLong:{
            type:DataTypes.STRING,
        }
    })
     return User;

};