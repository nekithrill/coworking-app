const Booking = require('../models/booking.model')

const createBooking = async (req, res) => {
	try {
		const newBooking = await Booking.create(req.body)
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

const viewBookingHistory = async (req, res) => {
	try {
		// Логика просмотра истории бронирований
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

module.exports = {
	createBooking,
	viewBookingHistory,
	getAllBookings,
	getBookingById,
	updateBookingById,
	deleteBookingById
}
