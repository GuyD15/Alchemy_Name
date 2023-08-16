// Import modules and packages.
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});
const routes = require('./controllers');

// Create an instance of the Express app and set port for the server to listen on.
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
require('dotenv').config();

if (
  !process.env.DB_USERNAME ||
  !process.env.DB_PASSWORD ||
  !process.env.DB_NAME
) {
  throw new Error(
    'Required environment variables are missing. Make sure to create a .env file.'
  );
}

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Serving file from public directory and import routs from ./controllers
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

// Start the server and listen for incoming requests.
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
