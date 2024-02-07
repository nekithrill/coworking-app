const jwt = require('jsonwebtoken')

const generateToken = userId => {
	const secretKey = process.env.JWT_SECRET || 'defaultSecretKey'

	const currentDate = new Date()
	const expirationDate = new Date(currentDate.getTime() + 3600 * 1000)

	const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' })

	const response = {
		token,
		expiresAt: expirationDate.toLocaleString(),
		status: 'Success',
		message: 'Token created successfully'
	}

	return response
}

module.exports = generateToken
