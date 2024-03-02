const express = require('express')
const newsRouter = express.Router()
const newsController = require('../controllers/news.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const isAdminMiddleware = require('../middlewares/isAdmin.middleware')

newsRouter.post(
	'/create',
	authMiddleware,
	isAdminMiddleware,
	newsController.createNews
)
newsRouter.get('/all', newsController.getAllNews)
newsRouter.get('/:newsId', newsController.getNewsById)
newsRouter.put(
	'/edit/:newsId',
	authMiddleware,
	isAdminMiddleware,
	newsController.updateNewsById
)
newsRouter.delete(
	'/delete/:newsId',
	authMiddleware,
	isAdminMiddleware,
	newsController.deleteNewsById
)

module.exports = newsRouter
