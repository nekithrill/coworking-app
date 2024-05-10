const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	workspace: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Workspace',
		required: true
	},
	tariff: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Tariff',
		required: true
	}
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking
