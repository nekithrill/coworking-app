const jwt = require('jsonwebtoken')
const secretKey = process.env.JWT_ACCESS_SECRET || 'defaultSecretKey'

const authMiddleware = (req, res, next) => {
	const token = req.headers.authorization

	if (!token) {
		return res.status(401).json({ message: 'Unauthorized' })
	}

	jwt.verify(token, secretKey, (err, decoded) => {
		if (err) {
			return res.status(401).json({ message: 'Invalid token' })
		}
		req.user = decoded
		next()
	})
}

module.exports = authMiddleware
