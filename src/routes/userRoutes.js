const router = require('express').Router();

const {
	addUser,
	getUsers,
	getUser,
	updateUser,
	deleteUser,
} = require('../controllers/userControllers');

router.route('/').post(addUser).get(getUsers);

router.route('/:id').put(updateUser).delete(deleteUser).get(getUser);

module.exports = router;
