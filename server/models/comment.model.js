const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	content: {
		type: String,
		required: true
	},
	rating: {
		type: Number,
		min: 1,
		max: 5,
		default: 0
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = Comment
