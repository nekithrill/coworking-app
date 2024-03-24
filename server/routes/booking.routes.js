const express = require('express')
const bookingRouter = express.Router()
const bookingController = require('../controllers/booking.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const isAdminMiddleware = require('../middlewares/isAdmin.middleware')

bookingRouter.post('/create', authMiddleware, bookingController.createBooking)
bookingRouter.get(
	'/all',
	authMiddleware,
	isAdminMiddleware,
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
	isAdminMiddleware,
	bookingController.updateBookingById
)
bookingRouter.delete(
	'/delete/:bookingId',
	authMiddleware,
	isAdminMiddleware,
	bookingController.deleteBookingById
)
bookingRouter.delete(
	'/cancel/:bookingId',
	authMiddleware,
	bookingController.cancelBooking
)

module.exports = bookingRouter
