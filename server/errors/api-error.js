module.exports = class ApiError extends Error {
	status
	errors

	constructor(status, message, errors) {
		super(message)
		this.status = status
		this.errors = errors
	}

	static BadRequestError(message, errors = []) {
		return new ApiError(400, message, errors)
	}

	static UnauthorizedError() {
		return new ApiError(401, 'Authentication error')
	}

	static ForbiddenError(message, errors = []) {
		return new ApiError(403, message, errors)
	}

	static NotFoundError(message, errors = []) {
		return new ApiError(404, message, errors)
	}

	static RequestTimeoutError(message, errors = []) {
		return new ApiError(408, message, errors)
	}

	static TooManyRequestsError(message, errors = []) {
		return new ApiError(429, message, errors)
	}

	static InternalServerError(message, errors = []) {
		return new ApiError(500, message, errors)
	}

	static NotImplementedError(message, errors = []) {
		return new ApiError(501, message, errors)
	}

	static BadGatewayError(message, errors = []) {
		return new ApiError(502, message, errors)
	}

	static ServiceUnavailableError(message, errors = []) {
		return new ApiError(503, message, errors)
	}

	static GatewayTimeoutError(message, errors = []) {
		return new ApiError(504, message, errors)
	}

	static CustomError(statusCode, message, errors = []) {
		return new ApiError(statusCode, message, errors)
	}
}
