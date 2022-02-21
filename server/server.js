const express = require('express');
const dotenv = require('dotenv').config();
const portToListenOn = process.env.PORT || 5000;

const app = express();

app.use('/api/posts', require('./routes/inventionRoutes'));

app.listen(portToListenOn, () => {
	console.log(`Server listening for requests on port ${portToListenOn}`);
});
