const express = require('express')
const adRouter = express.Router()
const adController = require('../controllers/ad.controller')
const {
	authMiddleware,
	checkAdminRole
} = require('../middlewares/auth.middleware')

adRouter.post('/create', authMiddleware, checkAdminRole, adController.createAd)

adRouter.get('/all', adController.getAllAds)

adRouter.get('/:adId', adController.getAdById)

adRouter.put(
	'/edit/:adId',
	authMiddleware,
	checkAdminRole,
	adController.updateAdById
)

adRouter.delete(
	'/delete/:adId',
	authMiddleware,
	checkAdminRole,
	adController.deleteAdById
)

module.exports = adRouter
