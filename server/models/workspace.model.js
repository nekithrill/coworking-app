const mongoose = require('mongoose')

const workspaceSchema = new mongoose.Schema({
	name: { type: String, required: true },
	capacity: { type: Number, required: true },
	location: { type: String, required: true },
	type: {
		type: String,
		enum: ['Office', 'Co-Working', 'Meeting Room', 'Event Space'],
		default: 'Office',
		required: true
	},

	amenities: {
		type: [String],
		enum: ['Wi-Fi', 'Coffee', 'Printer', 'Parking', 'Kitchen'],
		default: []
	}
})

const Workspace = mongoose.model('Workspace', workspaceSchema)

module.exports = Workspace
