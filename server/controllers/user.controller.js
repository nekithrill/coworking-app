const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const generateToken = require('../utils/generateToken')
const { errorHandler } = require('../utils/errorHandler')

// * User
const registerUser = async (req, res) => {
	try {
		const { password, ...userData } = req.body
		const hashedPassword = await bcrypt.hash(password, 10)

		const newUser = await User.create({ ...userData, password: hashedPassword })

		res.status(201).json(newUser)
	} catch (error) {
		errorHandler(400, error, res)
	}
}

const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body
		const user = await User.findOne({ email })
		if (!user) {
			return errorHandler(401, 'Invalid credentials', res)
		}

		const isPasswordValid = await bcrypt.compare(password, user.password)
		if (!isPasswordValid) {
			return errorHandler(401, 'Invalid credentials', res)
		}

		const tokenInfo = generateToken(user._id)
		res.status(200).json(tokenInfo)
	} catch (error) {
		return errorHandler(500, error, res)
	}
}

const getAllUsers = async (req, res) => {
	try {
		const allUsers = await User.find()
		res.status(200).json(allUsers)
	} catch (error) {
		errorHandler(400, error, res)
	}
}

const getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.userId)
		if (!user) {
			return errorHandler(404, error, res)
		}
		res.status(200).json(user)
	} catch (error) {
		errorHandler(500, error, res)
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
			return errorHandler(404, error, res)
		}
		res.status(200).json(updatedUser)
	} catch (error) {
		errorHandler(500, error, res)
	}
}

const deleteUserById = async (req, res) => {
	try {
		const deletedUser = await User.findByIdAndDelete(req.params.userId)
		if (!deletedUser) {
			return errorHandler(404, error, res)
		}
		res.status(200).json({ message: 'User deleted successfully' })
	} catch (error) {
		errorHandler(500, error, res)
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
