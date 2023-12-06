const mongoose = require('mongoose');
const Booking = mongoose.model('Booking');

const makeBookingCreate = function (req, res) {
	res
	.status(200)
	.json({"status" : "success"});
};
const makeBookingRead = function (req, res) {
	res
	.status(200)
	.json({"status" : "success"});
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