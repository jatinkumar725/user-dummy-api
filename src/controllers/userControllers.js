const asyncHandler = require('express-async-handler');
const User = require('../models/user');

// Add User
const addUser = asyncHandler(async (req, res) => {
	try {
		const { name, email, phone } = req.body;
		await User.create({
			name,
			email,
			phone,
		});
		res.sendStatus(201);
	} catch (error) {
		console.log(error);
		res.status(500).send('Something went wrong.');
	}
});

// Get Users
const getUsers = asyncHandler(async (req, res) => {
	const { page } = req.query;
	const filter = {};
	let usersList;
	try {
		if (page) {
			const skip = (page - 1) * 2;
			usersList = await User.find(filter).skip(skip).limit(2);
		} else {
			usersList = await User.find(filter);
		}

		res.status(200).json(usersList);
	} catch (error) {
		console.log(error);
	}
});

// Get User
const getUser = asyncHandler(async (req, res) => {
	const id = req.body.id;
	try {
		let user = await User.findById(id);

		res.status(200).json(user);
	} catch (error) {
		console.log(error);
	}
});

// Update User
const updateUser = asyncHandler(async (req, res) => {
	const id = req.params.id;
	try {
		await User.findByIdAndUpdate(id, {
			$set: req.body,
		});

		res.sendStatus(200);
	} catch (error) {
		return res.status(500).send(error);
	}
});

//delete user
const deleteUser = asyncHandler(async (req, res) => {
	const id = req.params.id;
	try {
		await User.findByIdAndDelete(id);
		res.sendStatus(200);
	} catch (error) {
		return res.status(500).send(error);
	}
});
module.exports = {
	addUser,
	getUsers,
	getUser,
	updateUser,
	deleteUser,
};
