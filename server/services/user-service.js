const UserModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mail-service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user.dto')
const ApiError = require('../errors/api-error')

class UserService {
	async registration(email, password) {
		const candidate = await UserModel.findOne({ email })
		if (candidate) {
			throw ApiError.BadRequestError(
				`User with email - ${email} already exists.`
			)
		}

		const role = 'user'
		const hashPassword = await bcrypt.hash(password, 3)
		const activationLink = uuid.v4()

		const user = await UserModel.create({
			email,
			password: hashPassword,
			role,
			activationLink
		})
		await mailService.sendActivationMail(
			email,
			`${process.env.API_URL}/api/user/activate/${activationLink}`
		)

		const userDto = new UserDto(user)
		const tokens = tokenService.generateTokens({ ...userDto })
		await tokenService.saveToken(userDto.id, tokens.refreshToken)

		return {
			...tokens,
			user: userDto
		}
	}

	async login(email, password) {
		const user = await UserModel.findOne({ email })
		if (!user) {
			throw ApiError.BadRequestError(`User with email - ${email} doesnt exist.`)
		}
		const isPassEquals = await bcrypt.compare(password, user.password)
		if (!isPassEquals) {
			throw ApiError.badRequestError('Invalid password.')
		}
		const userDto = new UserDto(user)
		const tokens = tokenService.generateTokens({ ...userDto })

		await tokenService.saveToken(userDto.id, tokens.refreshToken)

		return {
			...tokens,
			user: userDto
		}
	}

	async logout(refreshToken) {
		const token = await tokenService.removeToken(refreshToken)
		return token
	}

	async activate(activationLink) {
		const user = await UserModel.findOne({ activationLink })
		if (!user) {
			throw ApiError.BadRequestError('Wrong activation link')
		}
		user.isActivated = true
		await user.save()
	}

	async refresh(refreshToken) {
		if (!refreshToken) {
			throw ApiError.UnauthorizedError()
		}
		const userData = tokenService.validateRefreshToken(refreshToken)
		const tokenFromDb = await tokenService.findToken(refreshToken)
		if (!userData || !tokenFromDb) {
			throw ApiError.UnauthorizedError()
		}
		const user = await UserModel.findById(userData.id)
		const userDto = new UserDto(user)
		const tokens = tokenService.generateTokens({ ...userDto })

		await tokenService.saveToken(userDto.id, tokens.refreshToken)
		return { ...tokens, user: userDto }
	}

	async assignRole(userId, newRole) {
		const user = await UserModel.findById(userId)

		if (!user) {
			throw ApiError.NotFoundError('User not found')
		}

		user.role = newRole
		await user.save()

		return user
	}
}

module.exports = new UserService()
