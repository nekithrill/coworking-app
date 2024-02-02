const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	imageUrl: { type: String },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date }
})

const News = mongoose.model('News', newsSchema)

module.exports = News
