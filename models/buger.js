module.exports = function(sequelize, DataTypes) {
    const Burger = sequelize.define("Burger", {
        burger_type: {
            type: DataTypes.STRING,
        },
        eaten: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    });
    return Burger;
};