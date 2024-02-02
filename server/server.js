require('dotenv').config()
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const PORT = process.env.PORT || 5000
const app = express()

const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api/user', userRoutes)
app.use('/api/admin', adminRoutes)

const startServer = async () => {
	try {
		await mongoose.connect(process.env.DB_URL)
		app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
	} catch (error) {
		console.log(error)
	}
}

startServer()
