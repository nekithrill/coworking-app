const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	workspaceId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Workspace',
		required: true
	},
	tariffId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Tariff',
		required: true
	},
	workspaceName: { type: String },
	tariffName: { type: String },
	status: {
		type: String,
		enum: ['active', 'completed', 'cancelled', 'pending'],
		default: 'pending'
	},
	startDate: { type: Date },
	endDate: { type: Date },
	paymentStatus: { type: String, enum: ['paid', 'unpaid'], default: 'unpaid' },
	totalPrice: { type: Number }
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking
