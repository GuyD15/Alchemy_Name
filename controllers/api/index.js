// Import Express Router and number-routes module.
const router = require('express').Router();
const numberRoutes = require('./number-route.js');
const userRoutes =  require('./userRoutes.js')

router.use('/Numbers', numberRoutes);
router.use('/users',  userRoutes);

module.exports = router;
