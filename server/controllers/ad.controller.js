const Ad = require('../models/ad.model')
const { errorHandler } = require('../utils/errorHandler')

// [@] Ad
const createAd = async (req, res) => {
	try {
		const newAd = await Ad.create(req.body)
		res.status(201).json(newAd)
	} catch (error) {
		errorHandler(400, error, res)
	}
}

const getAllAds = async (req, res) => {
	try {
		const allAds = await Ad.find()
		res.status(200).json(allAds)
	} catch (error) {
		errorHandler(400, error, res)
	}
}

const getAdById = async (req, res) => {
	try {
		const ad = await Ad.findById(req.params.adId)
		if (!ad) {
			return errorHandler(404, error, res)
		}
		res.status(200).json(ad)
	} catch (error) {
		errorHandler(400, error, res)
	}
}

const updateAdById = async (req, res) => {
	try {
		const updatedAd = await Ad.findByIdAndUpdate(req.params.adId, req.body, {
			new: true
		})
		if (!updatedAd) {
			return errorHandler(404, error, res)
		}
		res.status(200).json(updatedAd)
	} catch (error) {
		errorHandler(400, error, res)
	}
}

const deleteAdById = async (req, res) => {
	try {
		const deletedAd = await Ad.findByIdAndDelete(req.params.adId)
		if (!deletedAd) {
			return errorHandler(404, error, res)
		}
		res.status(200).json({ message: 'Ad deleted successfully!' })
	} catch (error) {
		errorHandler(400, error, res)
	}
}

module.exports = {
	createAd,
	getAllAds,
	getAdById,
	updateAdById,
	deleteAdById
}
