const express = require('express')
const bookingRouter = express.Router()
const bookingController = require('../controllers/booking.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const isAdminMiddleware = require('../middlewares/isAdmin.middleware')

// * Booking
bookingRouter.post('/booking/create', bookingController.createBooking)
bookingRouter.get('/bookings', bookingController.getAllBookings)
bookingRouter.get('/bookings/history', bookingController.viewBookingHistory)
bookingRouter.get('/booking/:bookingId', bookingController.getBookingById)
bookingRouter.put('/booking/:bookingId', bookingController.updateBookingById)
bookingRouter.delete('/booking/:bookingId', bookingController.deleteBookingById)

module.exports = bookingRouter
