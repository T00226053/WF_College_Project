const express = require('express');
const router = express.Router();
const ctrlMakeBooking = require('../controllers/makeBooking');
const ctrlViewBooking = require('../controllers/viewBooking');

//make Booking
router
	.route('/makeBooking')
	.post(ctrlMakeBooking.makeBookingCreate);
	
router
	.route('/makeBooking/:bookingId')
	.get(ctrlMakeBooking.makeBookingRead)
	.put(ctrlMakeBooking.makeBookingUpdate)
	.delete(ctrlMakeBooking.makeBookingDelete);
	
//view Booking
router
	.route('/viewBooking')
	.get(ctrlViewBooking.viewBookingRead);
	
router
	.route('/viewBooking/:bookingId')
	.post(ctrlViewBooking.viewBookingCreate)
	.put(ctrlViewBooking.viewBookingUpdate)
	.delete(ctrlViewBooking.viewBookingDelete);
	
module.exports = router;