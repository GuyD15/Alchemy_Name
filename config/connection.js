const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3001,
});

sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established')
})
.catch(err => {
    console.error('Unable to connect.', err);
});

module.exports=sequelize;