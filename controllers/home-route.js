const router = require('express').Router();

//Handle GET requests for the root path '/'
router.get('/', async (req, res) => {
  res.render('game');
});

//Handle GET requests for '/sign-up'
router.get('/sign-up', async (req, res) => {
  res.render('signup');
});

//Handle GET requests for '/sign-in'
router.get('/sign-in', async (req, res) => {
  res.render('signin');
});

module.exports = router;
