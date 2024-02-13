const News = require('../models/news.model')
const { errorHandler } = require('../utils/errorHandler')

// [@] News
const createNews = async (req, res) => {
	try {
		const newNews = await News.create(req.body)
		res.status(201).json(newNews)
	} catch (error) {
		errorHandler(400, error, res)
	}
}

const getAllNews = async (req, res) => {
	try {
		const allNews = await News.find()
		res.status(200).json(allNews)
	} catch (error) {
		errorHandler(400, error, res)
	}
}

const getNewsById = async (req, res) => {
	try {
		const news = await News.findById(req.params.newsId)
		if (!news) {
			return errorHandler(404, error, res)
		}
		res.status(200).json(news)
	} catch (error) {
		errorHandler(400, error, res)
	}
}

const updateNewsById = async (req, res) => {
	try {
		const updatedNews = await News.findByIdAndUpdate(
			req.params.newsId,
			req.body,
			{ new: true }
		)
		if (!updatedNews) {
			return errorHandler(404, error, res)
		}
		res.status(200).json(updatedNews)
	} catch (error) {
		errorHandler(400, error, res)
	}
}

const deleteNewsById = async (req, res) => {
	try {
		await News.findByIdAndDelete(req.params.newsId)
		res.status(204).send()
	} catch (error) {
		errorHandler(400, error, res)
	}
}

module.exports = {
	createNews,
	getAllNews,
	getNewsById,
	updateNewsById,
	deleteNewsById
}
