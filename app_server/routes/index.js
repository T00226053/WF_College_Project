const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/home');
const ctrlBooking = require('../controllers/makeBooking');
const ctrlOthers = require('../controllers/about');

/* Home page */
router.get('/', ctrlHome.homeMenu);

/* Make Booking page */
router.get('/makeBooking', ctrlBooking.makeBooking);

/* About pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
