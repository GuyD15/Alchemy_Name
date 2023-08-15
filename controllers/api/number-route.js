const router = require('express').Router();
const Number = require('../../Models/Numbers.js');

// route to create/add a dish using async/await
router.post('/', async (req, res) => {
  try { 
    const numberData = await Number.create({
    id: req.body.id,
    highscore: req.body.highscore,
  });
  // if the dish is successfully created, the new response will be returned as json
  res.status(200).json(numberData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;