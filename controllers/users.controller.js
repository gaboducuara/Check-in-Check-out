//Models
const { User } = require('../models/user.model');

const getAllUsers = async (req, res) => {
	try {
		const users = await User.findAll();
		// process the request (return the list the users)
		res.status(200).json({
			status: 'success',
			users,
		});
	} catch (err) {
		console.log(err);
	}
};

const createUser = async (req, res) => {
	try {
		const { entranceTime, exitTime } = req.body;

		const newUser = await User.create({
			entranceTime,
			exitTime,
		});

		res.status(201).json({
			status: 'success',
			newUser,
		});
	} catch (err) {
		console.log(err);
	}
};

const getUserById = async (req, res) => {
	const { id } = req.params;

	const user = await User.findOne({ where: { id } });

	if (!user) {
		return res.status(404).json({
			status: 'error',
			message: 'User not found',
		});
	}

	res.status(200).json({
		status: 'success',
		user,
	});
};

const updateUser = async (req, res) => {
	const { id } = req.params;
	const { entranceTime } = req.body;

	const user = await User.findOne({ where: { id } });

	if (!user) {
		return res.status(404).json({
			status: 'error',
			message: 'User not found',
		});
	}

	await user.update({ entranceTime });
	res.status(204).json({ status: 'success' });
};

const deleteUser = async (req, res) => {
	const { id } = req.params;

	const user = await User.findOne({ where: { id } });

	if (!user) {
		return res.status(404).json({
			status: 'error',
			message: 'User not found',
		});
	}

	await user.destroy ()

	res.status(204).json ({ status: 'success'})
};

module.exports = {
	getAllUsers,
	createUser,
	getUserById,
	updateUser,
	deleteUser,
};
