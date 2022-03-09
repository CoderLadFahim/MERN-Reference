const express = require('express');
const operatorRouter = express.Router();
const {
	registerOperator,
	loginOperator,
	getOperatorData,
} = require('../controllers/operatorController.js');

operatorRouter.post('/register', registerOperator);
operatorRouter.post('/login', loginOperator);
operatorRouter.get('/me', getOperatorData);

module.exports = operatorRouter;
