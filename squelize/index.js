const { Sequelize } = require('sequelize');
const User = require('./models/user');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
});

const main = async () => {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    // Sincronizar el modelo
    await sequelize.sync();

    // Crear un nuevo usuario
    await User.create({ name: 'Jane Doe', age: 25 });

    // Obtener todos los usuarios
    const users = await User.findAll();
    console.log(users);
};

main().catch(err => console.error('Unable to connect to the database:', err));
