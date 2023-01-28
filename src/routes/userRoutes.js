const router = require('express').Router();

const {
	addUser,
	getUsers,
	getUser,
	updateUser,
	deleteUser,
} = require('../controllers/userControllers');

router.route('/').post(addUser).get(getUsers);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

module.exports = router;
