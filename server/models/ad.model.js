const mongoose = require('mongoose')

const adSchema = new mongoose.Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	imageUrl: { type: String },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date, default: Date.now }
})

adSchema.pre('findOneAndUpdate', function (next) {
	this.set({ updatedAt: new Date() })
	next()
})

const Ad = mongoose.model('Ad', adSchema)

module.exports = Ad
