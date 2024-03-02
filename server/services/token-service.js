const jwt = require('jsonwebtoken')
const tokenModel = require('../models/token.model')

const accessSecretKey = process.env.JWT_ACCESS_SECRET || 'jwt-secret-key'
const refreshSecretKey =
	process.env.JWT_REFRESH_SECRET || 'jwt-refresh-secret-key'

class TokenService {
	generateTokens(payload) {
		const accessToken = jwt.sign(payload, accessSecretKey, { expiresIn: '30m' })
		const refreshToken = jwt.sign(payload, refreshSecretKey, {
			expiresIn: '30d'
		})
		return {
			accessToken,
			refreshToken
		}
	}

	async saveToken(userId, refreshToken) {
		const tokenData = await tokenModel.findOne({ user: userId })
		if (tokenData) {
			tokenData.refreshToken = refreshToken
			return tokenData.save()
		}
		const token = await tokenModel.create({ user: userId, refreshToken })
		return token
	}

	async removeToken(refreshToken) {
		const tokenData = await tokenModel.deleteOne({ refreshToken })
		return tokenData
	}
}

module.exports = new TokenService()
