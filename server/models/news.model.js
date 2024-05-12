const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	imageUrl: { type: String },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date }
})

newsSchema.pre('findOneAndUpdate', function (next) {
	this.set({ updatedAt: new Date() })
	next()
})

const News = mongoose.model('News', newsSchema)

module.exports = News
