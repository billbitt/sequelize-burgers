module.exports = function(sequelize, DataTypes){
    var Burger = sequelize.define("Burger", {
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT
        },
        rating: {
            type: DataTypes.INTEGER
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