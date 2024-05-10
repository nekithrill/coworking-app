const express = require('express')
const newsRouter = express.Router()
const newsController = require('../controllers/news.controller')
const {
	authMiddleware,
	checkAdminRole
} = require('../middlewares/auth.middleware')

newsRouter.post(
	'/create',
	authMiddleware,
	checkAdminRole,
	newsController.createNews
)

newsRouter.get('/all', newsController.getAllNews)

newsRouter.get('/:newsId', newsController.getNewsById)

newsRouter.put(
	'/edit/:newsId',
	authMiddleware,
	checkAdminRole,
	newsController.updateNewsById
)

newsRouter.delete(
	'/delete/:newsId',
	authMiddleware,
	checkAdminRole,
	newsController.deleteNewsById
)

module.exports = newsRouter
