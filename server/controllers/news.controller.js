const News = require('../models/news.model')
const ApiError = require('../errors/api-error')

const createNews = async (req, res, next) => {
	try {
		const newNews = await News.create(req.body)
		res.status(201).json(newNews)
	} catch (error) {
		next(error)
	}
}

const getAllNews = async (req, res, next) => {
	try {
		const allNews = await News.find()
		res.status(200).json(allNews)
	} catch (error) {
		next(error)
	}
}

const getNewsById = async (req, res, next) => {
	try {
		const news = await News.findById(req.params.newsId)
		if (!news) {
			throw ApiError.NotFoundError('News not found.')
		}
		res.status(200).json(news)
	} catch (error) {
		next(error)
	}
}

const updateNewsById = async (req, res, next) => {
	try {
		const updatedNews = await News.findByIdAndUpdate(
			req.params.newsId,
			req.body,
			{ new: true }
		)
		if (!updatedNews) {
			throw ApiError.NotFoundError('News not found.')
		}
		res.status(200).json(updatedNews)
	} catch (error) {
		next(error)
	}
}

const deleteNewsById = async (req, res, next) => {
	try {
		await News.findByIdAndDelete(req.params.newsId)
		res.status(204).send()
	} catch (error) {
		next(error)
	}
}

module.exports = {
	createNews,
	getAllNews,
	getNewsById,
	updateNewsById,
	deleteNewsById
}
