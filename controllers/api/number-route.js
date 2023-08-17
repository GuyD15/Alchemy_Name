// Import the Express Router and Numbers model
const router = require('express').Router();
const Number = require('../../Models/Numbers.js');

// POST route for creating a number record
router.post('/', async (req, res) => {
  try {
    // Create a number record using the Number model
    const numberData = await Number.create({
      id: req.body.id,
      highscore: req.body.highscore,
    });

    res.status(200).json(numberData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
