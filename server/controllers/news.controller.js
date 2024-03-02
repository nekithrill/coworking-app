const News = require('../models/news.model')

const createNews = async (req, res) => {
	try {
		const newNews = await News.create(req.body)
		res.status(201).json(newNews)
	} catch (error) {
		next(error)
	}
}

const getAllNews = async (req, res) => {
	try {
		const allNews = await News.find()
		res.status(200).json(allNews)
	} catch (error) {
		next(error)
	}
}

const getNewsById = async (req, res) => {
	try {
		const news = await News.findById(req.params.newsId)
		if (!news) {
			return res.status(404).json({ error: 'News not found' })
		}
		res.status(200).json(news)
	} catch (error) {
		next(error)
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
			return res.status(404).json({ error: 'News not found' })
		}
		res.status(200).json(updatedNews)
	} catch (error) {
		next(error)
	}
}

const deleteNewsById = async (req, res) => {
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
