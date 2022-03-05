const express = require('express');
const operatorRouter = express.Router();
const { registerOperator } = require('../controllers/operatorController.js');

operatorRouter.post('/', registerOperator);

module.exports = operatorRouter;
