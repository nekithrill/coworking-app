const mongoose = require('mongoose')

const adSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	imageUrl: { type: String },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date }
})

const Ad = mongoose.model('Ad', adSchema)

module.exports = Ad
