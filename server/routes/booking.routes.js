const express = require('express')
const bookingRouter = express.Router()
const bookingController = require('../controllers/booking.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const isAdminMiddleware = require('../middlewares/isAdmin.middleware')

bookingRouter.post('/create', bookingController.createBooking)
bookingRouter.get('/all', bookingController.getAllBookings)
bookingRouter.get('/history', bookingController.viewBookingHistory)
bookingRouter.get('/:bookingId', bookingController.getBookingById)
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

module.exports = bookingRouter
