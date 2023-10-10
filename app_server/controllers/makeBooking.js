/* GET Make Booking page. */
const makeBooking = function (req, res) {
  res.render('makeBooking', { title: 'Make Booking' });
};

module.exports = {
	makeBooking
};