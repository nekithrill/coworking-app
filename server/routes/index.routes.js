const express = require('express')
const mainRouter = express.Router()

const adRouter = require('./ad.routes')
const bookingRouter = require('./booking.routes')
const newsRouter = require('./news.routes')
const userRouter = require('./user.routes')
const workspaceRouter = require('./workspace.routes')

mainRouter.use('/ad', adRouter)
mainRouter.use('/booking', bookingRouter)
mainRouter.use('/news', newsRouter)
mainRouter.use('/user', userRouter)
mainRouter.use('/workspace', workspaceRouter)

module.exports = mainRouter
