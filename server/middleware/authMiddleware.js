const jwt = require('jsonwebtoken');
const asyncHandler = require('express');
const Operator = require('../models/operatorModel');

const protect = asyncHandler(async (req, res, next) => {
	let token = null;

	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		try {
			// getting the token from the request headers
			token = req.headers.authorization.split(' ');

			// decoding the token
			let decodedToken = jwt.verify(token, process.env.JWT_SECRET);

			// getting the operator;
			req.operator = await Operator.findById(decodedToken);
		} catch (e) {
			console.log(e);
		}
	}
});

module.exports = {
	protect,
};
