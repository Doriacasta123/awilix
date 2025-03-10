const { Sequelize } = require('sequelize');
const User = require('./models/user');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite',
});

const main = async () => {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await sequelize.sync();

    await User.create({ name: 'Juan', age: 25 });

    const users = await User.findAll();
    console.log(users);
};

main().catch(err => console.error('Unable to connect to the database:', err));
