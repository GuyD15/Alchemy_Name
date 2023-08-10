const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('test');
});

router.get('/test2', async (req, res) => {
  res.render('test2');
});

module.exports = router;

