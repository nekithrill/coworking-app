const express = require('express')
const newsRouter = express.Router()
const newsController = require('../controllers/news.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const isAdminMiddleware = require('../middlewares/isAdmin.middleware')

// * News
newsRouter.post('/create', newsController.createNews)
newsRouter.get('/all', newsController.getAllNews)
newsRouter.get('/:newsId', newsController.getNewsById)
newsRouter.put('/edit/:newsId', newsController.updateNewsById)
newsRouter.delete('/delete/:newsId', newsController.deleteNewsById)

module.exports = newsRouter
