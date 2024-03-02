const Ad = require('../models/ad.model')

const createAd = async (req, res) => {
	try {
		const newAd = await Ad.create(req.body)
		res.status(201).json(newAd)
	} catch (error) {
		next(error)
	}
}

const getAllAds = async (req, res) => {
	try {
		const allAds = await Ad.find()
		res.status(200).json(allAds)
	} catch (error) {
		next(error)
	}
}

const getAdById = async (req, res) => {
	try {
		const ad = await Ad.findById(req.params.adId)
		if (!ad) {
			return res.status(404).json({ error: 'Ad not found' })
		}
		res.status(200).json(ad)
	} catch (error) {
		next(error)
	}
}

const updateAdById = async (req, res) => {
	try {
		const updatedAd = await Ad.findByIdAndUpdate(req.params.adId, req.body, {
			new: true
		})
		if (!updatedAd) {
			return res.status(404).json({ error: 'Ad not found' })
		}
		res.status(200).json(updatedAd)
	} catch (error) {
		next(error)
	}
}

const deleteAdById = async (req, res) => {
	try {
		const deletedAd = await Ad.findByIdAndDelete(req.params.adId)
		if (!deletedAd) {
			return res.status(404).json({ error: 'Ad not found' })
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
