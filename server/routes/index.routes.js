const express = require('express')
const Router = express.Router()

const adRouter = require('./ad.routes')
const bookingRouter = require('./booking.routes')
const newsRouter = require('./news.routes')
const userRouter = require('./user.routes')
const workspaceRouter = require('./workspace.routes')

Router.use('/ad', adRouter)
Router.use('/booking', bookingRouter)
Router.use('/news', newsRouter)
Router.use('/user', userRouter)
Router.use('/workspace', workspaceRouter)

module.exports = Router
