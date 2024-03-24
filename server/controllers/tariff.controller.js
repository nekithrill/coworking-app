const Tariff = require('../models/tariff.model')

const createTariff = async (req, res) => {
	try {
		const newTariff = await Tariff.create(req.body)
		res.status(201).json(newTariff)
	} catch (error) {
		next(error)
	}
}

const getAllTariffs = async (req, res) => {
	try {
		const allTariffs = await Tariff.find()
		res.status(200).json(allTariffs)
	} catch (error) {
		next(error)
	}
}

const getTariffById = async (req, res) => {
	try {
		const tariff = await Tariff.findById(req.params.tariffId)
		if (!tariff) {
			return res.status(404).json({ error: 'Tariff not found' })
		}
		res.status(200).json(tariff)
	} catch (error) {
		next(error)
	}
}

const updateTariffById = async (req, res) => {
	try {
		const { tariffId } = req.params
		const updatedTariff = await Tariff.findByIdAndUpdate(tariffId, req.body, {
			new: true
		})
		if (!updatedTariff) {
			return res.status(404).json({ error: 'Tariff not found' })
		}
		res.status(200).json(updatedTariff)
	} catch (error) {
		next(error)
	}
}

const deleteTariffById = async (req, res) => {
	try {
		const { id } = req.params
		const deletedTariff = await Tariff.findByIdAndDelete(id)
		if (!deletedTariff) {
			return res.status(404).json({ error: 'Tariff not found' })
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
