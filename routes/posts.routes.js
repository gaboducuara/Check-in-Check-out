const express = require('express');

const {
	getAllPosts,
	createPosts,
} = require('../controllers/posts.controller');

const postsRouter = express.Router();

postsRouter.get('/posts', getAllPosts);

postsRouter.post('/posts', createPosts);

module.exports = { postsRouter };
