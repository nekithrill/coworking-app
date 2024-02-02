const mongoose = require('mongoose')

const workspaceSchema = new mongoose.Schema({
	name: { type: String, required: true },
	capacity: { type: Number, required: true },
	location: { type: String },
	type: { type: String },
	amenities: [{ type: String }]
})

const Workspace = mongoose.model('Workspace', workspaceSchema)

module.exports = Workspace
