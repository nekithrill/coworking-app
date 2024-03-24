const Booking = require('../models/booking.model')
const Tariff = require('../models/tariff.model')
const User = require('../models/user.model')

const createBooking = async (req, res, next) => {
	try {
		const { userId, workspaceId, date, tariffId } = req.body
		const selectedTariff = await Tariff.findById(tariffId)
		const newBooking = await Booking.create({
			userId,
			workspace: workspaceId,
			date,
			tariff: selectedTariff._id
		})

		res.status(201).json(newBooking)
	} catch (error) {
		next(error)
	}
}

const getAllBookings = async (req, res) => {
	try {
		const allBookings = await Booking.find()
		res.status(200).json(allBookings)
	} catch (error) {
		next(error)
	}
}

const viewBookingHistory = async (req, res, next) => {
	try {
		const userId = req.user.id
		const userBookings = await Booking.find({ userId })

		res.status(200).json(userBookings)
	} catch (error) {
		next(error)
	}
}

const getBookingById = async (req, res) => {
	try {
		const booking = await Booking.findById(req.params.bookingId)
		res.status(200).json(booking)
	} catch (error) {
		next(error)
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
		next(error)
	}
}

const deleteBookingById = async (req, res) => {
	try {
		await Booking.findByIdAndDelete(req.params.bookingId)
		res.status(204).send()
	} catch (error) {
		next(error)
	}
}

const cancelBooking = async (req, bookingId) => {
	try {
		const booking = await Booking.findById(bookingId)
		if (!booking) {
			throw new Error('Booking not found')
		}

		if (
			booking.userId.toString() !== req.user._id.toString() &&
			req.user.role !== 'admin'
		) {
			throw new Error('You have no permissions to cancel this booking')
		}

		await Booking.findByIdAndDelete(bookingId)

		return { message: 'Booking cancelled successfully!' }
	} catch (error) {
		next(error)
	}
}

module.exports = {
	createBooking,
	viewBookingHistory,
	getAllBookings,
	getBookingById,
	updateBookingById,
	deleteBookingById,
	cancelBooking
}
