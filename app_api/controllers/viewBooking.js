const mongoose = require('mongoose');
const Booking = mongoose.model('Booking');

const viewBookingCreate = function (req, res) {
	res
	.status(200)
	.json({"status" : "success"});
};
const viewBookingRead = function (req, res) {
	if (req.params && req.params.bookingId) {
		Booking
			.findById(req.params.bookingId)
			.then((err, booking) => {
				if (!booking) {
					res
						.status(404)
						.json({"message" : "bookingId not found"});
					return;
				}
				else if (err) {
					res
						.status(404)
						.json(err);
					return;
				}
				res
				.status(200)
				.json(booking);
			});
	}
	else {
		res
		.status(404)
		.json({"message" : "No bookingId in request"});
	}
};
const viewBookingUpdate = function (req, res) {
	res
	.status(200)
	.json({"status" : "success"});
};
const viewBookingDelete = function (req, res) {
	res
	.status(200)
	.json({"status" : "success"});
};

module.exports = {
	viewBookingCreate,
	viewBookingRead,
	viewBookingUpdate,
	viewBookingDelete
};