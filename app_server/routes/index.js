const express = require('express');
const router = express.Router();

const ctrlHome = require('../controllers/home');
const ctrlRegistration = require('../controllers/register');
const ctrlMakeBooking = require('../controllers/makeBooking');
const ctrlViewBooking = require('../controllers/viewBooking');
const ctrlOthers = require('../controllers/about');

/* Home page */
router.get('/', ctrlHome.homeMenu);

/* Registration page */
router.get('/register', ctrlRegistration.register);

/* Booking pages */
router.get('/makeBooking', ctrlMakeBooking.makeBooking);
router.get('/viewBooking', ctrlViewBooking.viewBooking);

/* About pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
