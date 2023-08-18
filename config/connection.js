// Loads environment variables from .env file
require('dotenv').config();

// Import Sequelize library
const { Sequelize } = require('sequelize');

// Create new Sequelize instance
let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
    },
  );
}

// Authenticate connection to database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established');
  })
  .catch((err) => {
    console.error('Unable to connect.', err);
  });



module.exports = sequelize;
