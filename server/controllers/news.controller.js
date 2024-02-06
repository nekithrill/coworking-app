const News = require('../models/news.model')
const { errorHandler } = require('../utils/errorHandler')

// * News
const createNews = async (req, res) => {
	try {
		const newNews = await News.create(req.body)
		res.status(201).json(newNews)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const getAllNews = async (req, res) => {
	try {
		const allNews = await News.find()
		res.status(200).json(allNews)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const getNewsById = async (req, res) => {
	try {
		const news = await News.findById(req.params.newsId)
		res.status(200).json(news)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const updateNewsById = async (req, res) => {
	try {
		const updatedNews = await News.findByIdAndUpdate(
			req.params.newsId,
			req.body,
			{ new: true }
		)
		res.status(200).json(updatedNews)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const deleteNewsById = async (req, res) => {
	try {
		await News.findByIdAndDelete(req.params.newsId)
		res.status(204).send()
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

module.exports = {
	createNews,
	getAllNews,
	getNewsById,
	updateNewsById,
	deleteNewsById
}
