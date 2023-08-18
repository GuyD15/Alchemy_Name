// Import modules and packages.
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/auth');

// Create an instance of the Express app and set port for the server to listen on.
const app = express();
const PORT = process.env.PORT || 3001;
require('dotenv').config();

if (
  !process.env.DB_USERNAME ||
  !process.env.DB_PW ||
  !process.env.DB_NAME
) {
  throw new Error(
    'Required environment variables are missing. Make sure to create a .env file.'
  );
}

// Set up sessions with cookies
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({});

// Set Handlebars as the default template engine.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Serving file from public directory and import routs from ./controllers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Start the server and listen for incoming requests.
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});
