const express = require('express');
const dotenv = require('dotenv').config();

const { handleErrors } = require('./middleware/errorMiddleware.js');
const { connectDB } = require('./config/db.js');

const portToListenOn = process.env.PORT || 5000;

// calling the connectDB function for connecting to mongodb database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/posts', require('./routes/postsRoutes'));
app.use('/api/operators', require('./routes/operatorRoutes'));

app.use(handleErrors);

app.listen(portToListenOn, () => {
	console.log(`Server listening for requests on port ${portToListenOn}`);
});
