const brcypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Operator = require('../models/operatorModel');

// DESC: Registers an operator
// ENDPOINT: POST  /api/operators/
// ACCESS: Public
const registerOperator = (req, res) => {
	res.json({ message: 'Operator registered' });
};

// DESC: Authenticate an operator
// ENDPOINT: POST  /api/operators/login/
// ACCESS: Public
const loginOperator = (req, res) => {
	res.json({ message: 'Operator Login' });
};

// DESC: Get an operator's data
// ENDPOINT: GET  /api/operators/me/
// ACCESS: Public
const getOperatorData = (req, res) => {
	res.json({ message: 'Operator data' });
};

module.exports = {
	registerOperator,
	loginOperator,
	getOperatorData,
};
