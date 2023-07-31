const mongoose = require("mongoose");

var mongoURL =
	"mongodb+srv://AnhQuan:quan2101999@cluster0.q9lbil6.mongodb.net/tours_booking?";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on("error", () => {
	console.log("Mongo DB connection failed");
});
connection.on("connected", () => {
	console.log("mongo DB connection Successfull !");
});

module.exports = mongoose;
