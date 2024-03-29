const isAdminMiddleware = (req, res, next) => {
	if (!req.user) {
		return res.status(401).json({ error: 'Unauthorized' })
	}

	if (req.user.role !== 'admin') {
		return res.status(403).json({ error: 'Forbidden' })
	}

	next()
}

module.exports = isAdminMiddleware
