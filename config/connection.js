const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
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