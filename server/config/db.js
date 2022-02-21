// requiring in the mongoose library
const mongoose = require('mongoose');

// connecting to the database using this function which returns a promise
const connectDB = async () => {
	try {
		// passing the MONGO_URI connection string to the connect method on mongoose
		const conn = await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (e) {
		console.log(e);
		// exiting the process with an error code of 1
		process.exit(1);
	}
};

module.exports = {
	connectDB,
};
