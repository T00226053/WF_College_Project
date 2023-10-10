/* GET View Booking page. */
const viewBooking = function (req, res) {
	res.render('viewBooking', {
		title: 'View Bookings' ,
		rows: [{
			id: 2,
			memberName: 'John',
			className: 'Pilates',
			classLength: 2,
			date: '10/10/2023',
			time: '8:00'
		}]
	});
};

module.exports = {
	viewBooking
};