const Booking = require('../models/booking.model')
const Tariff = require('../models/tariff.model')
const User = require('../models/user.model')
const Workspace = require('../models/workspace.model')
const ApiError = require('../errors/api-error')

const createBooking = async (req, res, next) => {
	try {
		const { userId, workspaceId, tariffId } = req.body

		if (!userId || !workspaceId || !tariffId) {
			throw ApiError.BadRequestError('Missing required fields in the request.')
		}

		const [user, workspace, tariff] = await Promise.all([
			User.findById(userId),
			Workspace.findById(workspaceId),
			Tariff.findById(tariffId)
		])
		if (!user || !workspace || !tariff) {
			throw ApiError.NotFoundError('User, workspace, or tariff not found.')
		}

		if (workspace.status === 'occupied') {
			throw ApiError.BadRequestError('Workspace is already occupied.')
		}

		const startDate = new Date()
		const endDate = calculateEndDate(startDate, tariff.duration)
		const totalPrice = tariff.price * workspace.coefficient
		const workspaceName = workspace.name
		const tariffName = tariff.name

		const newBooking = await Booking.create({
			userId,
			workspaceId,
			tariffId,
			workspaceName,
			tariffName,
			totalPrice,
			startDate,
			endDate
		})

		await Workspace.findByIdAndUpdate(workspaceId, { status: 'occupied' })

		res.status(201).json(newBooking)
	} catch (error) {
		next(error)
	}
}

const getAllBookings = async (req, res, next) => {
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

const getBookingById = async (req, res, next) => {
	try {
		const booking = await Booking.findById(req.params.bookingId)
		res.status(200).json(booking)
	} catch (error) {
		next(error)
	}
}

const updateBookingById = async (req, res, next) => {
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

const deleteBookingById = async (req, res, next) => {
	try {
		const { bookingId } = req.params
		const deletedBooking = await Booking.findByIdAndDelete(bookingId)
		if (!deletedBooking) {
			throw ApiError.NotFoundError('Booking not found.')
		}

		const { workspaceId } = deletedBooking
		await Workspace.findByIdAndUpdate(workspaceId, { status: 'available' })

		res.status(200).json({ message: 'Booking deleted successfully!' })
	} catch (error) {
		next(error)
	}
}

const cancelBooking = async (req, res, next) => {
	try {
		const { bookingId } = req.params
		const { id: userId } = req.user

		const booking = await Booking.findById(bookingId)

		if (!booking) {
			throw ApiError.NotFoundError('Booking not found.')
		}

		if (booking.userId.toString() !== userId) {
			throw ApiError.ForbiddenError(
				'You are not the person who made the booking. You have no permissions to cancel it.'
			)
		}

		const updatedBooking = await Booking.findByIdAndUpdate(
			bookingId,
			{ status: 'cancelled' },
			{ new: true }
		)

		if (!updatedBooking) {
			throw ApiError.NotFoundError('Booking not found.')
		}

		const { workspaceId } = updatedBooking
		await Workspace.findByIdAndUpdate(workspaceId, { status: 'available' })

		res.status(200).json({
			message: 'Booking cancelled successfully!',
			booking: updatedBooking
		})
	} catch (error) {
		next(error)
	}
}

const calculateEndDate = (startDate, duration) => {
	const endDate = new Date(startDate)
	switch (duration) {
		case 'daily':
			endDate.setDate(startDate.getDate() + 1)
			break
		case 'weekly':
			endDate.setDate(startDate.getDate() + 7)
			break
		case 'monthly':
			const year = startDate.getFullYear()
			let month = startDate.getMonth() + 1
			let day = startDate.getDate()
			if (month === 12) {
				year += 1
				month = 0
			} else {
				const nextMonthLastDay = new Date(year, month + 1, 0).getDate()
				if (day > nextMonthLastDay) {
					day = nextMonthLastDay
				}
			}
			endDate.setFullYear(year)
			endDate.setMonth(month)
			endDate.setDate(day)
			break
		default:
			throw ApiError.BadRequestError('Invalid tariff duration.')
	}
	return endDate
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
