const User = require('../models/user.model')
const { errorHandler } = require('../utils/errorHandler')

// * User
const registerUser = async (req, res) => {
	try {
		const newUser = await User.create(req.body)
		res.status(201).json(newUser)
	} catch (error) {
		errorHandler(400, error, res)
		// res.status(400).json({ message: error.message })
	}
}

const loginUser = (req, res) => {
	// Логика входа пользователя
}

const getAllUsers = async (req, res) => {
	try {
		const allUsers = await User.find()
		res.status(200).json(allUsers)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.userId)
		if (!user) {
			return res.status(404).json({ message: 'User not found' })
		}
		res.status(200).json(user)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const updateUserById = async (req, res) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.userId,
			req.body,
			{ new: true }
		)
		if (!updatedUser) {
			return res.status(404).json({ message: 'User not found' })
		}
		res.status(200).json(updatedUser)
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

const deleteUserById = async (req, res) => {
	try {
		const deletedUser = await User.findByIdAndDelete(req.params.userId)
		if (!deletedUser) {
			return res.status(404).json({ message: 'User not found' })
		}
		res.status(200).json({ message: 'User deleted successfully' })
	} catch (error) {
		res.status(500).json({ message: error.message })
	}
}

module.exports = {
	registerUser,
	loginUser,
	getAllUsers,
	getUserById,
	updateUserById,
	deleteUserById
}
