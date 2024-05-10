const express = require('express')
const tariffRouter = express.Router()
const tariffController = require('../controllers/tariff.controller')
const {
	authMiddleware,
	checkAdminRole
} = require('../middlewares/auth.middleware')

tariffRouter.post(
	'/create',
	authMiddleware,
	checkAdminRole,
	tariffController.createTariff
)

tariffRouter.get('/all', tariffController.getAllTariffs)

tariffRouter.get('/:tariffId', tariffController.getTariffById)

tariffRouter.put(
	'/edit/:tariffId',
	authMiddleware,
	checkAdminRole,
	tariffController.updateTariffById
)

tariffRouter.delete(
	'/delete/:tariffId',
	authMiddleware,
	checkAdminRole,
	tariffController.deleteTariffById
)

module.exports = tariffRouter
