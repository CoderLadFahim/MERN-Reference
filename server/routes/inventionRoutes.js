const express = require('express');
const router = express.Router();

const posts = [
	{
		title: 'Learning the backend with the MERN stack',
		author: 'CoderLadFahim',
		id: Date.now(),
		body: "I can't believe I'm finally doing this, and blah blah blah",
	},
	{
		title: 'Should I learn Django instead?',
		author: 'CoderLadFahim',
		id: Date.now(),
		body: "I learnt python with great amibition, and it would be shame if I don't do anything with it",
	},
];

router.get('/', (req, res) => {
	res.status(200).json(posts);
});

module.exports = router;
