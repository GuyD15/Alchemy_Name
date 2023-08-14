const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});
const routes = require('./controllers')


const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
require('dotenv').config();

if (!process.env.DB_USERNAME || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
  throw new Error('Required environment variables are missing. Make sure to create a .env file.');
}


// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname, 'public')));
app.use(routes);

app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
});