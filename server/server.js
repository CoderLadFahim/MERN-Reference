const express = require('express');
const dotenv = require('dotenv').config();

const { handleErrors } = require('./middleware/errorMiddleware.js');

const portToListenOn = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/posts', require('./routes/inventionRoutes'));

app.use(handleErrors);

app.listen(portToListenOn, () => {
	console.log(`Server listening for requests on port ${portToListenOn}`);
});
