const express = require('express')
const adRouter = express.Router()
const adController = require('../controllers/ad.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const isAdminMiddleware = require('../middlewares/isAdmin.middleware')

// * Ad
adRouter.post('/ad/create', adController.createAd)
adRouter.get('/ads', adController.getAllAds)
adRouter.get('/ad/:adId', adController.getAdById)
adRouter.put('/ad/:adId', adController.updateAdById)
adRouter.delete('/ad/:adId', adController.deleteAdById)

module.exports = adRouter
