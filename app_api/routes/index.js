const express = require('express');
const router = express.Router();
const ctrlMakeBooking = require('../controllers/makeBooking');
const ctrlViewBooking = require('../controllers/viewBooking');

//make Booking
router
	.route('/makeBooking')
	.get(ctrlMakeBooking.)
	.post(ctrlMakeBooking.);
	
router
	.route('/makeBooking/:bookingId')
	.get(ctrlMakeBooking.)
	.put(ctrlMakeBooking.)
	.post(ctrlMakeBooking.);
	
//view Booking
router
	.route('/viewBooking')
	.get(ctrlViewBooking.)
	.post(ctrlViewBooking.);
	
router
	.route('/viewBooking/:bookingId')
	.get(ctrlViewBooking.)
	.put(ctrlViewBooking.)
	.post(ctrlViewBooking.);
	
module.exports = router;