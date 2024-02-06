const express = require('express')
const adminRouter = express.Router()
const adminController = require('../controllers/admin.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const isAdminMiddleware = require('../middlewares/isAdmin.middleware')

module.exports = adminRouter
