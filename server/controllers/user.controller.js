const User = require('../models/user.model')
const userService = require('../services/user-service')
const { validationResult } = require('express-validator')
const ApiError = require('../errors/api-error')

const registerUser = async (req, res, next) => {
	try {
		const errors = validationResult(req)
		if (!errors.isEmpty()) {
			return next(ApiError.BadRequestError('Validation error', errors.array()))
		}
		const { email, password } = req.body
		const userData = await userService.registration(email, password)
		res.cookie('refreshToken', userData.refreshToken, {
			maxAge: 30 * 24 * 60 * 60 * 1000, // ! 30D AGE
			httpOnly: true
		})
		return res.json(userData)
	} catch (error) {
		next(error)
	}
}

const loginUser = async (req, res, next) => {
	try {
		const { email, password } = req.body
		const userData = await userService.login(email, password)
		res.cookie('refreshToken', userData.refreshToken, {
			maxAge: 30,
			httpOnly: true
		})
		return res.json(userData)
	} catch (error) {
		next(error)
	}
}

const logoutUser = async (req, res, next) => {
	try {
		const { refreshToken } = req.cookies
		const token = await userService.logout(refreshToken)
		res.clearCookie('refreshToken')
		return res.json(token)
	} catch (error) {
		next(error)
	}
}

const activateUser = async (req, res, next) => {
	try {
		const activationLink = req.params.activationLink
		await userService.activate(activationLink)
		return res.redirect(process.env.CLIENT_URL)
	} catch (error) {
		next(error)
	}
}

const refreshUser = async (req, res, next) => {
	try {
		const { refreshToken } = req.cookies
		const userData = await userService.refresh(refreshToken)
		res.cookie('refreshToken', userData.refreshToken, {
			maxAge: 30,
			httpOnly: true
		})
		return res.json(userData)
	} catch (error) {
		next(error)
	}
}

const getAllUsers = async (req, res, next) => {
	try {
		const allUsers = await User.find()
		res.status(200).json(allUsers)
	} catch (error) {
		next(error)
	}
}

const getUserById = async (req, res, next) => {
	try {
		const user = await User.findById(req.params.userId)
		if (!user) {
			return res.status(404).json({ error: 'User not found' })
		}
		res.status(200).json(user)
	} catch (error) {
		next(error)
	}
}

const updateUserById = async (req, res, next) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.userId,
			req.body,
			{ new: true }
		)
		if (!updatedUser) {
			return res.status(404).json({ error: 'User not found' })
		}
		res.status(200).json(updatedUser)
	} catch (error) {
		next(error)
	}
}

const deleteUserById = async (req, res, next) => {
	try {
		const deletedUser = await User.findByIdAndDelete(req.params.userId)
		if (!deletedUser) {
			return res.status(404).json({ error: 'User not found' })
		}
		res.status(200).json({ message: 'User deleted successfully' })
	} catch (error) {
		next(error)
	}
}

const assignRoleUserById = async (req, res, next) => {
	try {
		if (req.user.role !== 'creator') {
			return res
				.status(403)
				.json({ error: 'You must be a creator. No permission' })
		}

		const userId = req.params.userId
		const newRole = req.params.role

		const result = await userService.assignRole(userId, newRole)
		res.json(result)
	} catch (error) {
		next(error)
	}
}

module.exports = {
	registerUser,
	loginUser,
	logoutUser,
	activateUser,
	refreshUser,
	getAllUsers,
	getUserById,
	updateUserById,
	deleteUserById,
	assignRoleUserById
}
