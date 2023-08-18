const router = require('express').Router();
const { User } = require('../Models/index');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['username', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('game', {
      users,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//Handle GET requests for '/sign-up'
router.get('/sign-up', async (req, res) => {
  res.render('signup');
});

//Handle GET requests for '/sign-in'
router.get('/sign-in', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signin');
});

module.exports = router;
