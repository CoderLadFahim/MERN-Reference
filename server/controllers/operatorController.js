const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Operator = require('../models/operatorModel');

// DESC: Registers an operator
// ENDPOINT: POST  /api/operators/
// ACCESS: Public
const registerOperator = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) {
		res.status(400);
		throw new Error('Missing fields');
	}

	// checking to see if operator exists
	const operatorExists = await Operator.findOne({ email });

	// Throwing an error if user does exist
	if (operatorExists) {
		res.status(400);
		throw new Error('Operator you are trying to create already exists');
	}

	// Hasing the password
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const operator = await Operator.create({
		name,
		email,
		password: hashedPassword,
	});

	if (operator) {
		res.status(201).json({
			_id: operator.id,
			name: operator.name,
			email: operator.email,
		});
	} else {
		res.status(400);
		throw new Error('Invalid operator data');
	}
});

// DESC: Authenticate an operator
// ENDPOINT: POST  /api/operators/login/
// ACCESS: Public
const loginOperator = asyncHandler(async (req, res) => {
	const { email, password } = req.body;

	const operator = await Operator.findOne({ email });

	if (operator && (await bcrypt.compare(password, operator.password))) {
		res.json({
			_id: operator.id,
			name: operator.name,
			email: operator.email,
		});
	} else {
		res.status(400);
		throw new Error("Credentials don't match our records");
	}
});

// DESC: Get an operator's data
// ENDPOINT: GET  /api/operators/me/
// ACCESS: Public
const getOperatorData = asyncHandler(async (req, res) => {
	res.json({ message: 'Operator data' });
});

module.exports = {
	registerOperator,
	loginOperator,
	getOperatorData,
};
