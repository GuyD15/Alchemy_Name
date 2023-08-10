const router = require('express').Router();
const Number = require('../../Models/Numbers.js');

// route to create/add a dish using async/await
router.post('/', async (req, res) => {
  try { 
    const numberData = await Number.create({
    user_id: req.body.user_id,
    value: req.body.value,
    is_even: req.body.is_even,
  });
  // if the dish is successfully created, the new response will be returned as json
  res.status(200).json(numberData)
} catch (err) {
  res.status(400).json(err);
}
});


module.exports = router;