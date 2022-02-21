let posts = [
	{
		title: 'Learning the backend with the MERN stack',
		author: 'CoderLadFahim',
		id: 1,
		body: "I can't believe I'm finally doing this, and blah blah blah",
	},
	{
		title: 'Should I learn Django instead?',
		author: 'CoderLadFahim',
		id: 2,
		body: "I learnt python with great amibition, and it would be shame if I don't do anything with it",
	},
];

const getPosts = (req, res) => {
	res.status(200).json(posts);
};

const setPosts = (req, res) => {
	const { body } = req;

	if (!body.title) {
		res.status(400);
		throw new Error('A title field is required in the data');
	}

	res.status(200).json({ message: 'Setting posts' });
};

const updatePosts = (req, res) => {
	const { id } = req.params;
	res.status(200).send({ message: `Updating post with the id of ${id}` });
};

const deletePosts = (req, res) => {
	const { id } = req.params;
	res.status(200).send({ message: `Deleting post with the id of ${id}` });
};

module.exports = {
	getPosts,
	setPosts,
	updatePosts,
	deletePosts,
};
