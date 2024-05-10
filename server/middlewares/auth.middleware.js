const jwt = require('jsonwebtoken')
const ApiError = require('../errors/api-error')
const tokenService = require('../services/token-service')

const authMiddleware = (req, res, next) => {
	try {
		const authorizationHeader = req.headers.authorization
		if (!authorizationHeader) {
			return next(ApiError.UnauthorizedError())
		}

		const accessToken = authorizationHeader.split(' ')[1]
		if (!accessToken) {
			return next(ApiError.UnauthorizedError())
		}

		const userData = tokenService.validateAccessToken(accessToken)
		if (!userData) {
			return next(ApiError.UnauthorizedError())
		}

		req.user = userData
		next()
	} catch (error) {
		return next(ApiError.UnauthorizedError())
	}
}

const checkAdminRole = (req, res, next) => {
	if (req.user && req.user.role === 'admin') {
		next()
	} else {
		return next(
			ApiError.ForbiddenError(
				'You must be an admin. You do not have permission to access this resource.'
			)
		)
	}
}

const checkCreatorRole = (req, res, next) => {
	if (req.user && req.user.role === 'creator') {
		next()
	} else {
		return next(
			ApiError.ForbiddenError(
				'You must be a creator. You do not have permission to access this resource.'
			)
		)
	}
}

module.exports = { authMiddleware, checkAdminRole, checkCreatorRole }
