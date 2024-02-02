const User = require('../models/user.model')
const Workspace = require('../models/workspace.model')
const Booking = require('../models/booking.model')

const registerUser = async (req, res) => {
	try {
		const newUser = await User.create(req.body)
		res.status(201).json(newUser)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const loginUser = (req, res) => {
	// Логика входа пользователя
}

const getUserProfile = (req, res) => {
	// Получение профиля пользователя
}

const updateUserProfile = (req, res) => {
	// Обновление профиля пользователя
}

const getAllWorkspaces = async (req, res) => {
	try {
		// Логика поиска и фильтрации рабочих мест
		const filters = req.query // Здесь можно использовать параметры запроса для фильтрации
		const workspaces = await Workspace.find(filters)

		res.status(200).json(workspaces)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

const createBooking = async (req, res) => {
	try {
		const { workspaceId, date } = req.body

		// Проверка на доступность места перед бронированием
		const isWorkspaceAvailable = await Workspace.findOne({
			_id: workspaceId,
			isOccupied: false
		})
		if (!isWorkspaceAvailable) {
			return res
				.status(400)
				.json({ message: 'Рабочее место уже занято или не существует.' })
		}

		// Логика бронирования места
		const newBooking = await Booking.create({
			userId: req.params.userId, // или откуда вы берете информацию о текущем пользователе
			workspaceId,
			date
		})

		// Обновление статуса места на "занято"
		await Workspace.findByIdAndUpdate(workspaceId, { isOccupied: true })

		res.status(201).json(newBooking)
	} catch (error) {
		res.status(400).json({ message: error.message })
	}
}

module.exports = {
	registerUser,
	loginUser,
	getUserProfile,
	updateUserProfile,
	getAllWorkspaces,
	createBooking
}
