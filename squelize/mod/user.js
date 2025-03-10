const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database'); 
class User extends Model {}

User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: 'User',
});

module.exports = User;
