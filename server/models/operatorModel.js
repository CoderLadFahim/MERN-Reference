const mongoose = require('mongoose');

const operatorSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, 'Please add a name'],
		},
		email: {
			type: String,
			required: [true, 'Please add an email address'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please add a password'],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Operator', operatorSchema);
