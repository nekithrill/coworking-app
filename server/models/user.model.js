const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	role: { type: String, enum: ['user', 'admin', 'creator'], default: 'user' },
	isActivated: { type: Boolean, default: false },
	activationLink: { type: String }
})

const User = mongoose.model('User', userSchema)

module.exports = User
