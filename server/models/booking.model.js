const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
	userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
	workspaceData: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Workspace',
		required: true
	},
	tariffData: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Tariff',
		required: true
	},
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

bookingSchema.pre('findOne', function (next) {
	this.populate('workspaceData')
	this.populate('tariffData')
	next()
})

const Booking = mongoose.model('Booking', bookingSchema)

module.exports = Booking
