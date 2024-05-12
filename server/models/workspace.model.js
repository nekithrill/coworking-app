const mongoose = require('mongoose')

const workspaceSchema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String, required: true },
	images: [String],
	capacity: { type: Number, required: true },
	location: { type: String, required: true },
	coefficient: { type: Number, required: true },
	type: {
		type: String,
		enum: ['Office', 'Co-Working', 'Meeting Room', 'Event Space'],
		default: 'Office',
		required: true
	},
	status: {
		type: String,
		enum: ['occupied', 'available'],
		default: 'available'
	},
	amenities: {
		type: [String],
		enum: ['Wi-Fi', 'Coffee', 'Printer', 'Parking', 'Kitchen'],
		default: []
	}
})

const Workspace = mongoose.model('Workspace', workspaceSchema)

module.exports = Workspace
