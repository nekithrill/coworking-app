const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user.controller')

// Роуты для пользователей
router.post('/register', UserController.registerUser)
router.post('/login', UserController.loginUser)

router.get('/profile/:userId', UserController.getUserProfile)
router.put('/profile/:userId', UserController.updateUserProfile)

router.get('/workspaces', UserController.getAllWorkspaces)
router.get('/workspaces/free', UserController.searchWorkspaces)
router.post('/create-booking', UserController.createBooking)

module.exports = router
