// importing required modules/routes
const express = require('express');
const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-route');


//Mounting routes to specific task.
router.use('/api', apiRoutes);
router.use('/', homeRoutes);

module.exports = router;
