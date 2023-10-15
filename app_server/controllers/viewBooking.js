/* GET View Booking page. */
const viewBooking = function (req, res) {
	res.render('viewBooking', {
		title: 'View Bookings' ,
		bookings: [{
			id: 2,
			memberName: 'John',
			className: 'Pilates',
			classLength: 1.5,
			date: '10/10/2023',
			time: '8:00'
		}]
	});
};

module.exports = {
	viewBooking
};