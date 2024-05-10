const express = require('express')
const bookingRouter = express.Router()
const bookingController = require('../controllers/booking.controller')
const {
	authMiddleware,
	checkAdminRole
} = require('../middlewares/auth.middleware')

bookingRouter.post('/create', authMiddleware, bookingController.createBooking)
bookingRouter.get(
	'/all',
	authMiddleware,
	checkAdminRole,
	bookingController.getAllBookings
)

bookingRouter.get(
	'/history',
	authMiddleware,
	bookingController.viewBookingHistory
)

bookingRouter.get(
	'/:bookingId',
	authMiddleware,
	bookingController.getBookingById
)

bookingRouter.put(
	'/edit/:bookingId',
	authMiddleware,
	checkAdminRole,
	bookingController.updateBookingById
)

bookingRouter.delete(
	'/delete/:bookingId',
	authMiddleware,
	checkAdminRole,
	bookingController.deleteBookingById
)

bookingRouter.delete(
	'/cancel/:bookingId',
	authMiddleware,
	bookingController.cancelBooking
)

module.exports = bookingRouter
