const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/user.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const isAdminMiddleware = require('../middlewares/isAdmin.middleware')

// * User
userRouter.post('/user/register', userController.registerUser)
userRouter.get('/users', userController.getAllUsers)
userRouter.get('/user/:userId', userController.getUserById)
userRouter.put('/user/:userId', userController.updateUserById)
userRouter.delete('/user/:userId', userController.deleteUserById)

module.exports = userRouter
