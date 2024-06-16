const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/user.controller')
const {
	authMiddleware,
	checkAdminRole,
	checkCreatorRole
} = require('../middlewares/auth.middleware')
const { body } = require('express-validator')

userRouter.post(
	'/register',
	body('email').isEmail(),
	body('password').isLength({ min: 4, max: 30 }),
	userController.registerUser
)

userRouter.post('/login', userController.loginUser)

userRouter.post('/logout', authMiddleware, userController.logoutUser)

userRouter.get('/refresh', userController.refreshUser)

userRouter.get(
	'/activate/:activationLink',
	authMiddleware,
	userController.activateUser
)

userRouter.get(
	'/all',
	authMiddleware,
	checkAdminRole,
	userController.getAllUsers
)

userRouter.get(
	'/:userId',
	authMiddleware,
	checkAdminRole,
	userController.getUserById
)

userRouter.put(
	'/edit/:userId',
	authMiddleware,
	checkAdminRole,
	userController.updateUserById
)

userRouter.delete(
	'/delete/:userId',
	authMiddleware,
	checkAdminRole,
	userController.deleteUserById
)

userRouter.put(
	'/role/:userId/:role',
	authMiddleware,
	checkCreatorRole,
	userController.assignRoleUserById
)

module.exports = userRouter
