const mongoose = require('mongoose')

const announcementSchema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String, required: true },
	imageUrl: { type: String },
	createdAt: { type: Date, default: Date.now },
	updatedAt: { type: Date }
})

const Announcement = mongoose.model('Announcement', announcementSchema)

module.exports = Announcement
