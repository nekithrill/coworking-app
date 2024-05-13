require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')
const errorHandler = require('./middlewares/errorHandler.middleware')
const Router = require('./routes/index.routes')

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(
	cors({
		origin: 'http://localhost:3000',
		credentials: true
	})
)
app.use('/api', Router)
app.use(errorHandler)

const startServer = async () => {
	try {
		await mongoose.connect(process.env.DB_URL)
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
	} catch (error) {
		console.log(error)
	}
}

startServer()
