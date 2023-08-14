const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('game');
});

router.get('/sign-up', async (req, res) => {
  res.render('signup');
});

router.get('/sign-in', async (req, res) => {
  res.render('signin');
});

module.exports = router;

