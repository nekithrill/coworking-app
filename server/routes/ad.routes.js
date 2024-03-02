const express = require('express')
const adRouter = express.Router()
const adController = require('../controllers/ad.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const isAdminMiddleware = require('../middlewares/isAdmin.middleware')

adRouter.post(
	'/create',
	authMiddleware,
	isAdminMiddleware,
	adController.createAd
)
adRouter.get('/all', adController.getAllAds)
adRouter.get('/:adId', adController.getAdById)
adRouter.put(
	'/edit/:adId',
	authMiddleware,
	isAdminMiddleware,
	adController.updateAdById
)
adRouter.delete(
	'/delete/:adId',
	authMiddleware,
	isAdminMiddleware,
	adController.deleteAdById
)

module.exports = adRouter
