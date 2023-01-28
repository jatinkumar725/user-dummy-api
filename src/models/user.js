const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
			lowercase: true,
		},
		phone: {
			type: String,
			unique: true,
			required: true,
		},
	},
	{
		timeStamps: true,
	},
);

const User = mongoose.model('User', userSchema);

module.exports = User;
