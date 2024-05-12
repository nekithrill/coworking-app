const Ad = require('../models/ad.model')
const ApiError = require('../errors/api-error')

const createAd = async (req, res, next) => {
	try {
		const newAd = await Ad.create(req.body)
		res.status(201).json(newAd)
	} catch (error) {
		next(error)
	}
}

const getAllAds = async (req, res, next) => {
	try {
		const allAds = await Ad.find()
		res.status(200).json(allAds)
	} catch (error) {
		next(error)
	}
}

const getAdById = async (req, res, next) => {
	try {
		const ad = await Ad.findById(req.params.adId)
		if (!ad) {
			throw ApiError.NotFoundError('Ad not found.')
		}
		res.status(200).json(ad)
	} catch (error) {
		next(error)
	}
}

const updateAdById = async (req, res, next) => {
	try {
		const updatedAd = await Ad.findByIdAndUpdate(req.params.adId, req.body, {
			new: true
		})
		if (!updatedAd) {
			throw ApiError.NotFoundError('Ad not found.')
		}
		res.status(200).json(updatedAd)
	} catch (error) {
		next(error)
	}
}

const deleteAdById = async (req, res, next) => {
	try {
		const deletedAd = await Ad.findByIdAndDelete(req.params.adId)
		if (!deletedAd) {
			throw ApiError.NotFoundError('Ad not found.')
		}
		res.status(200).json({ message: 'Ad deleted successfully!' })
	} catch (error) {
		next(error)
	}
}

module.exports = {
	createAd,
	getAllAds,
	getAdById,
	updateAdById,
	deleteAdById
}
