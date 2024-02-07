// [@] Error Handler

// 400 Bad Request
const handleBadRequestError = (err, res) => {
	res.status(400).json({ error: 'Bad Request error', details: err.message })
}

// 401 Unauthorized
const handleAuthenticationError = (err, res) => {
	res.status(401).json({ error: 'Authentication error', details: err.message })
}

// 403 Forbidden
const handleForbiddenError = (err, res) => {
	res.status(403).json({ error: 'Forbidden error', details: err.message })
}

// 404 Not Found
const handleNotFoundError = (err, res) => {
	res.status(404).json({ error: 'Not Found error', details: err.message })
}

// 408 Request Timeout
const handleRequestTimeoutError = (err, res) => {
	res.status(408).json({ error: 'Request Timeout error', details: err.message })
}

// 429 Too Many Requests
const handleTooManyRequestsError = (err, res) => {
	res
		.status(429)
		.json({ error: 'Too Many Requests error', details: err.details })
}

// 500 Internal Server
const handleInternalServerError = (err, res) => {
	res.status(500).json({ error: 'Internal Server error', details: err.message })
}

// 501 Not Implemented
const handleNotImplementedError = (err, res) => {
	res.status(501).json({ error: 'Not Implemented error', details: err.message })
}

// 502 Bad Gateway
const handleBadGatewayError = (err, res) => {
	res.status(502).json({ error: 'Bad Gateway error', details: err.message })
}

// 503 Service Unavailable
const handleServiceUnavailableError = (err, res) => {
	res
		.status(503)
		.json({ error: 'Service Unavailable error', details: err.message })
}

// 504 Gateway Timeout
const handleGatewayTimeoutError = (err, res) => {
	res.status(504).json({ error: 'Gateway Timeout error', details: err.message })
}

// Custom error
const handleCustomError = (err, res) => {
	res
		.status(err.status || 500)
		.json({ error: err.message || 'Internal Server Error' })
}

const errorHandler = (statusCode, err, res) => {
	switch (statusCode) {
		case 400:
			handleBadRequestError(err, res)
			break
		case 401:
			handleAuthenticationError(err, res)
			break
		case 403:
			handleForbiddenError(err, res)
			break
		case 404:
			handleNotFoundError(err, res)
			break
		case 408:
			handleRequestTimeoutError(err, res)
			break
		case 429:
			handleTooManyRequestsError(err, res)
			break
		case 500:
			handleInternalServerError(err, res)
			break
		case 501:
			handleNotImplementedError(err, res)
			break
		case 502:
			handleBadGatewayError(err, res)
			break
		case 503:
			handleServiceUnavailableError(err, res)
			break
		case 504:
			handleGatewayTimeoutError(err, res)
			break
		default:
			handleCustomError(err, res)
	}
}

module.exports = {
	errorHandler,
	handleBadRequestError,
	handleAuthenticationError,
	handleForbiddenError,
	handleNotFoundError,
	handleRequestTimeoutError,
	handleTooManyRequestsError,
	handleInternalServerError,
	handleNotImplementedError,
	handleBadGatewayError,
	handleServiceUnavailableError,
	handleGatewayTimeoutError,
	handleCustomError
}
