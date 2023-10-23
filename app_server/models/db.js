const mongoose = require('mongoose');
const dbURL = "mongodb+srv://liamocc2003:*@cluster0.xbi7mys.mongodb.net/?retryWrites=true&w=majority";

try{
	mongoose.connect(
		dbURL,
		{ useNewUrlParser: true, useUnifiedTopolgy: true }).then(
		() => {console.log("Mongoose is connected")},
			err => {console.log(err)}
		);
}
catch (e){
	console.log("Could not connect");
}
require('./bookings');
