const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	workspaceId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Workspace',
		required: true
	},
	date: { type: Date, required: true }
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking
