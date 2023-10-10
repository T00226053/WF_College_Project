/* GET View Booking page. */
const viewBooking = function (req, res) {
  res.render('viewBooking', { title: 'View Bookings' });
};

module.exports = {
	viewBooking
};