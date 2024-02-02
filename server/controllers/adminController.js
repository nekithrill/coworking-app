const User = require('../models/user.model')
const Workspace = require('../models/workspace.model')
const Booking = require('../models/booking.model')
const Announcement = require('../models/announcement.model')
const News = require('../models/news.model')

// * User
const registerUser = async (req, res) => {
	try {
		const newUser = await User.create(req.body)
		res.status(201).json(newUser)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
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
		res.status(200).json(user)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const updateUserById = async (req, res) => {
	try {
		const updatedUser = await User.findByIdAndUpdate(
			req.params.userId,
			req.body,
			{ new: true }
		)
		res.status(200).json(updatedUser)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const deleteUserById = async (req, res) => {
	try {
		await User.findByIdAndDelete(req.params.userId)
		res.status(204).send()
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

// Workspace
const addWorkspace = async (req, res) => {
	try {
		const newWorkspace = await Workspace.create(req.body)
		res.status(201).json(newWorkspace)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const getAllWorkspaces = async (req, res) => {
	try {
		const allWorkspaces = await Workspace.find()
		res.status(200).json(allWorkspaces)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const getWorkspaceById = async (req, res) => {
	try {
		const workspace = await Workspace.findById(req.params.workspaceId)
		res.status(200).json(workspace)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const updateWorkspaceById = async (req, res) => {
	try {
		const updatedWorkspace = await Workspace.findByIdAndUpdate(
			req.params.workspaceId,
			req.body,
			{ new: true }
		)
		res.status(200).json(updatedWorkspace)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const deleteWorkspaceById = async (req, res) => {
	try {
		await Workspace.findByIdAndDelete(req.params.workspaceId)
		res.status(204).send()
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

// Booking
const addBooking = async (req, res) => {
	try {
		const newBooking = await Booking.create(req.body)
		res.status(201).json(newBooking)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const getAllBookings = async (req, res) => {
	try {
		const allBookings = await Booking.find()
		res.status(200).json(allBookings)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const viewBookingHistory = async (req, res) => {
	try {
		// Логика просмотра истории бронирований
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const getBookingById = async (req, res) => {
	try {
		const booking = await Booking.findById(req.params.bookingId)
		res.status(200).json(booking)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const updateBookingById = async (req, res) => {
	try {
		const updatedBooking = await Booking.findByIdAndUpdate(
			req.params.bookingId,
			req.body,
			{ new: true }
		)
		res.status(200).json(updatedBooking)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const deleteBookingById = async (req, res) => {
	try {
		await Booking.findByIdAndDelete(req.params.bookingId)
		res.status(204).send()
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

// News
const addNews = async (req, res) => {
	try {
		const newNews = await News.create(req.body)
		res.status(201).json(newNews)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const getAllNews = async (req, res) => {
	try {
		const allNews = await News.find()
		res.status(200).json(allNews)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const getNewsById = async (req, res) => {
	try {
		const news = await News.findById(req.params.newsId)
		res.status(200).json(news)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const updateNewsById = async (req, res) => {
	try {
		const updatedNews = await News.findByIdAndUpdate(
			req.params.newsId,
			req.body,
			{ new: true }
		)
		res.status(200).json(updatedNews)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const deleteNewsById = async (req, res) => {
	try {
		await News.findByIdAndDelete(req.params.newsId)
		res.status(204).send()
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

// Announcement
const addAnnouncement = async (req, res) => {
	try {
		const newAnnouncement = await Announcement.create(req.body)
		res.status(201).json(newAnnouncement)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const getAllAnnouncements = async (req, res) => {
	try {
		const allAnnouncements = await Announcement.find()
		res.status(200).json(allAnnouncements)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const getAnnouncementById = async (req, res) => {
	try {
		const announcement = await Announcement.findById(req.params.announcementId)
		res.status(200).json(announcement)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const updateAnnouncementById = async (req, res) => {
	try {
		const updatedAnnouncement = await Announcement.findByIdAndUpdate(
			req.params.announcementId,
			req.body,
			{ new: true }
		)
		res.status(200).json(updatedAnnouncement)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const deleteAnnouncementById = async (req, res) => {
	try {
		await Announcement.findByIdAndDelete(req.params.announcementId)
		res.status(204).send()
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

module.exports = {
	// User
	registerUser,
	getAllUsers,
	getUserById,
	updateUserById,
	deleteUserById,

	// Workspace
	addWorkspace,
	getAllWorkspaces,
	getWorkspaceById,
	updateWorkspaceById,
	deleteWorkspaceById,

	// Booking
	addBooking,
	getAllBookings,
	viewBookingHistory,
	getBookingById,
	updateBookingById,
	deleteBookingById,

	// News
	addNews,
	getAllNews,
	getNewsById,
	updateNewsById,
	deleteNewsById,

	// Announcement
	addAnnouncement,
	getAllAnnouncements,
	getAnnouncementById,
	updateAnnouncementById,
	deleteAnnouncementById
}
