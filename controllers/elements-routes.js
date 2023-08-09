const express = require('express');
const router = express.Router();

// Define route handlers
router.get('/', (req, res) => {
  res.send('elements API');
});

router.get('/element/:id', (req, res) => {

});


module.exports = router;

