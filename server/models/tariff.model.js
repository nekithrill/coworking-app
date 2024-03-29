const mongoose = require('mongoose')

const tariffSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		unique: true
	},
	description: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	duration: {
		type: String,
		enum: ['daily', 'weekly', 'monthly'],
		required: true
	},
	services: [String],
	isActive: {
		type: Boolean,
		default: true
	},
	startDate: Date,
	endDate: Date
})

const Tariff = mongoose.model('Tariff', tariffSchema)

module.exports = Tariff
