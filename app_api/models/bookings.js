const mongoose = require('mongoose');
const bookingSchema = new mongoose.Schema({
	memberId: {
		type: Number,
		required: true
	},
	
	memberName: {
		type: String,
		required: true
	},
	
	className: {
		type: String,
		required: true
	},
	
	classLength: {
		type: Number,
		'default': 0,
		min: 0.5,
		max: 3
	},
	
	classDate: {
		type: String,
		required: true
	},
	
	classTime: {
		type: Number,
		required: true,
		min: 6,
		max: 17,
	}
});
mongoose.model('Booking', bookingSchema);