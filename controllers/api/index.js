// Import Express Router and number-routes module
const router = require('express').Router();
const numberRoutes = require('./number-route.js');

router.use('/Numbers', numberRoutes);

module.exports = router;
