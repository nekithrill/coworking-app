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
		enum: ['day', 'week', 'month', 'annual'],
		required: true
	},
	services: [String],
	available: {
		type: Boolean,
		default: true
	}
})

const Tariff = mongoose.model('Tariff', tariffSchema)

module.exports = Tariff
