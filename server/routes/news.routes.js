const express = require('express')
const newsRouter = express.Router()
const newsController = require('../controllers/news.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const isAdminMiddleware = require('../middlewares/isAdmin.middleware')

// * News
newsRouter.post('/news/create', newsController.createNews)
newsRouter.get('/news', newsController.getAllNews)
newsRouter.get('/news/:newsId', newsController.getNewsById)
newsRouter.put('/news/:newsId', newsController.updateNewsById)
newsRouter.delete('/news/:newsId', newsController.deleteNewsById)

module.exports = newsRouter
