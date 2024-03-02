module.exports = class ApiError extends Error {
	status
	errors

	constructor(status, message, errors) {
		super(message)
		this.status = status
		this.errors = errors
	}

	static badRequestError(message, errors = []) {
		return new ApiError(400, message, errors)
	}

	static unauthorizedError() {
		return new ApiError(401, 'Authentication error')
	}

	static forbiddenError(message, errors = []) {
		return new ApiError(403, message, errors)
	}

	static notFoundError(message, errors = []) {
		return new ApiError(404, message, errors)
	}

	static requestTimeoutError(message, errors = []) {
		return new ApiError(408, message, errors)
	}

	static tooManyRequestsError(message, errors = []) {
		return new ApiError(429, message, errors)
	}

	static internalServerError(message, errors = []) {
		return new ApiError(500, message, errors)
	}

	static notImplementedError(message, errors = []) {
		return new ApiError(501, message, errors)
	}

	static badGatewayError(message, errors = []) {
		return new ApiError(502, message, errors)
	}

	static serviceUnavailableError(message, errors = []) {
		return new ApiError(503, message, errors)
	}

	static gatewayTimeoutError(message, errors = []) {
		return new ApiError(504, message, errors)
	}

	static customError(statusCode, message, errors = []) {
		return new ApiError(statusCode, message, errors)
	}
}
