//Models

const { User } = require('../models/user.model');
//
const getAllPosts = (req, res) => {
	res.status(200).json({
		status: 'success',
		posts,
	});
};

const createPosts = (req, res) => {
	const { entranceTime } = req.body;

	const newPost = {
		id: Math.floor(Math.random() * 1000),
		entranceTime,
	};

	posts.push(newPost);

	res.status(201).json({
		status: 'success',
		newPost,
	});
};

module.exports = { getAllPosts, createPosts };
