const express = require('express')
const router = express.Router()
const AdminController = require('../controllers/adminController')

// User
router.post('/users/register', AdminController.registerUser)
router.get('/users', AdminController.getAllUsers)
router.get('/users/:userId', AdminController.getUserById)
router.put('/users/:userId', AdminController.updateUserById)
router.delete('/users/:userId', AdminController.deleteUserById)

// Workspace
router.post('/workspaces', AdminController.addWorkspace)
router.get('/workspaces', AdminController.getAllWorkspaces)
router.get('/workspaces/:workspaceId', AdminController.getWorkspaceById)
router.put('/workspaces/:workspaceId', AdminController.updateWorkspaceById)
router.delete('/workspaces/:workspaceId', AdminController.deleteWorkspaceById)

// Booking
router.post('/bookings', AdminController.addBooking)
router.get('/bookings', AdminController.getAllBookings)
router.get('/bookings', AdminController.viewBookingHistory)
router.get('/bookings/:bookingId', AdminController.getBookingById)
router.put('/bookings/:bookingId', AdminController.updateBookingById)
router.delete('/bookings/:bookingId', AdminController.deleteBookingById)

// News
router.post('/news/create', AdminController.addNews)
router.get('/news', AdminController.getAllNews)
router.get('/news/:newsId', AdminController.getNewsById)
router.put('/news/:newsId', AdminController.updateNewsById)
router.delete('/news/:newsId', AdminController.deleteNewsById)

// Announcement
router.post('/announcements', AdminController.addAnnouncement)
router.get('/announcements', AdminController.getAllAnnouncements)
router.get(
	'/announcements/:announcementId',
	AdminController.getAnnouncementById
)
router.put(
	'/announcements/:announcementId',
	AdminController.updateAnnouncementById
)
router.delete(
	'/announcements/:announcementId',
	AdminController.deleteAnnouncementById
)

module.exports = router
