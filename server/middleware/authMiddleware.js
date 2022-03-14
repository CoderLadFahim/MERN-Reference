const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const Operator = require('../models/operatorModel');

const protectRoute = asyncHandler(async (req, res, next) => {
	let token = null;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			// Getting the token from the request header
			token = req.header.authorization.split(' ')[1];
		} catch (e) {
			console.log(e);
		}
	}
});
