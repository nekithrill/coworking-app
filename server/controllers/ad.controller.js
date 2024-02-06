const Ad = require('../models/ad.model')
const { errorHandler } = require('../utils/errorHandler')

// * Ad
const createAd = async (req, res) => {
	try {
		const newAd = await Ad.create(req.body)
		res.status(201).json(newAd)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const getAllAds = async (req, res) => {
	try {
		const allAds = await Ad.find()
		res.status(200).json(allAds)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const getAdById = async (req, res) => {
	try {
		const ad = await Ad.findById(req.params.adId)
		res.status(200).json(ad)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const updateAdById = async (req, res) => {
	try {
		const updatedAd = await Ad.findByIdAndUpdate(req.params.adId, req.body, {
			new: true
		})
		res.status(200).json(updatedAd)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const deleteAdById = async (req, res) => {
	try {
		await Ad.findByIdAndDelete(req.params.adId)
		res.status(204).send()
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

module.exports = {
	createAd,
	getAllAds,
	getAdById,
	updateAdById,
	deleteAdById
}
