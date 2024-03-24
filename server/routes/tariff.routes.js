const express = require('express')
const tariffRouter = express.Router()
const tariffController = require('../controllers/tariff.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const isAdminMiddleware = require('../middlewares/isAdmin.middleware')

tariffRouter.post(
	'/create',
	authMiddleware,
	isAdminMiddleware,
	tariffController.createTariff
)
tariffRouter.get('/all', tariffController.getAllTariffs)
tariffRouter.get('/:tariffId', tariffController.getTariffById)
tariffRouter.put(
	'/edit/:tariffId',
	authMiddleware,
	isAdminMiddleware,
	tariffController.updateTariffById
)
tariffRouter.delete(
	'/delete/:tariffId',
	authMiddleware,
	isAdminMiddleware,
	tariffController.deleteTariffById
)

module.exports = tariffRouter
