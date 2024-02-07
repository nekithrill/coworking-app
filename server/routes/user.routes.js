const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const isAdminMiddleware = require('../middlewares/isAdmin.middleware')

// * User
userRouter.post('/register', userController.registerUser)
userRouter.post('/login', userController.loginUser)
userRouter.get(
	'/all',
	authMiddleware,
	isAdminMiddleware,
	userController.getAllUsers
)
userRouter.get(
	'/:userId',
	authMiddleware,
	isAdminMiddleware,
	userController.getUserById
)
userRouter.put(
	'/edit/:userId',
	authMiddleware,
	isAdminMiddleware,
	userController.updateUserById
)
userRouter.delete(
	'/delete/:userId',
	authMiddleware,
	isAdminMiddleware,
	userController.deleteUserById
)

module.exports = userRouter
