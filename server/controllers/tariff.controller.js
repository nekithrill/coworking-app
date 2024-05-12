const Tariff = require('../models/tariff.model')
const ApiError = require('../errors/api-error')

const createTariff = async (req, res, next) => {
	try {
		const newTariff = await Tariff.create(req.body)
		res.status(201).json(newTariff)
	} catch (error) {
		next(error)
	}
}

const getAllTariffs = async (req, res, next) => {
	try {
		const allTariffs = await Tariff.find()
		res.status(200).json(allTariffs)
	} catch (error) {
		next(error)
	}
}

const getTariffById = async (req, res, next) => {
	try {
		const tariff = await Tariff.findById(req.params.tariffId)
		if (!tariff) {
			throw ApiError.NotFoundError('Tariff not found.')
		}
		res.status(200).json(tariff)
	} catch (error) {
		next(error)
	}
}

const updateTariffById = async (req, res, next) => {
	try {
		const { tariffId } = req.params
		const updatedTariff = await Tariff.findByIdAndUpdate(tariffId, req.body, {
			new: true
		})
		if (!updatedTariff) {
			throw ApiError.NotFoundError('Tariff not found.')
		}
		res.status(200).json(updatedTariff)
	} catch (error) {
		next(error)
	}
}

const deleteTariffById = async (req, res, next) => {
	try {
		const { tariffId } = req.params
		const deletedTariff = await Tariff.findByIdAndDelete(tariffId)
		if (!deletedTariff) {
			throw ApiError.NotFoundError('Tariff not found.')
		}
		res.status(200).json({ message: 'Tariff deleted successfully!' })
	} catch (error) {
		next(error)
	}
}

module.exports = {
	createTariff,
	getAllTariffs,
	getTariffById,
	updateTariffById,
	deleteTariffById
}
