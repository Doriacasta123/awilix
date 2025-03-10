const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database'); // Asegúrate de configurar tu conexión a la base de datos

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
