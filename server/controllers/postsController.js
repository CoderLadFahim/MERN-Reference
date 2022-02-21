const asyncHandler = require('express-async-handler');
const Post = require('../models/postsModel');

const getPosts = asyncHandler(async (req, res) => {
	const posts = await Post.find();
	res.status(200).json(posts);
});

const setPosts = asyncHandler(async (req, res) => {
	const { body: reqBody } = req;

	if (!reqBody.title) {
		res.status(400);
		throw new Error('A title field is required in the data');
	}

	const { title, author, body } = reqBody;

	const post = await Post.create({
		title,
		author,
		body,
	});

	res.status(200).json(post);
});

const updatePosts = asyncHandler(async (req, res) => {
	const { id } = req.params;

	const postToUpdate = await Post.findById(id);

	if (!postToUpdate) {
		res.status(400);
		throw new Error('Post not found');
	}

	const updatedPost = Post.findByIdAndUpdate(id, req.body, { new: true });

	res.status(200).json(updatedPost);
});

const deletePosts = asyncHandler(async (req, res) => {
	const { id } = req.params;
	res.status(200).send({ message: `Deleting post with the id of ${id}` });
});

module.exports = {
	getPosts,
	setPosts,
	updatePosts,
	deletePosts,
};
