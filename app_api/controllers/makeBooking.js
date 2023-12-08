const mongoose = require('mongoose');
const Booking = mongoose.model('Booking');

const makeBookingCreate = function (req, res) {
	Booking.create({
		memberId: parseInt(req.body.memberId),
		memberName: req.body.memberName,
		className: req.body.className,
		classLength: parseFloat(req.body.classLength),
		classDate: req.body.classDate,
		classTime: req.body.classTime,
	})
	.then((err, booking) => {
		if(err) {
			res
			.status(400)
			.json(err);
		}
		else {
			res
			.status(201)
			.json(booking);
		}
	});
};
const makeBookingRead = function (req, res) {
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
const makeBookingUpdate = function (req, res) {
	res
	.status(200)
	.json({"status" : "success"});
};
const makeBookingDelete = function (req, res) {
	res
	.status(200)
	.json({"status" : "success"});
};

module.exports = {
	makeBookingCreate,
	makeBookingRead,
	makeBookingUpdate,
	makeBookingDelete
};