/* GET Make Booking page. */
const request = require('request');
const apiOptions = {
	server: 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
	apiOptions.server = 'https://wf-project-locc-t00226053.onrender.com';
}

const _renderMakeBooking = function (req, res) {
	res.render('makeBooking', {
		title: 'Make Booking'
	});
};

const makeBooking = function (req, res) {
  const path = '/api/bookings';
	const requestOptions = {
		url: apiOptions.server + path,
		method: 'POST',
		json: {}
	};
	request(requestOptions, (err, response, body) => {
		_renderMakeBooking(req, res, body);
	});
};

module.exports = {
	makeBooking
};