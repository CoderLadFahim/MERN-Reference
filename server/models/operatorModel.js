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
		gender: {
			type: String,
			required: [true, 'Please add one of the two genders'],
		},
		religion: {
			type: String,
			required: [true, 'Please state your chosen faith'],
		},
		age: {
			type: String,
			required: [true, 'Please state your age'],
		},
		password: {
			type: String,
			required: [true, 'Please add a password'],
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Operator', operatorSchema);
