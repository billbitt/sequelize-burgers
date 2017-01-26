module.exports = function(sequelize, DataTypes){
    var Burger = sequelize.define("Burger", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT
        },
        rating: {
            type: DataTypes.STRING
        },
        notes: {
            type: DataTypes.TEXT
        },
        eaten: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });
    return Burger;
}