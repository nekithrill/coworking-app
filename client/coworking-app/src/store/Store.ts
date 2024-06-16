import axios from 'axios'
import { makeAutoObservable } from 'mobx'
import { API_URL } from '../http'
import { IUser } from '../models/entities/IUser'
import { AuthResponse } from '../models/responses/UserResponse'
import UserService from '../services/UserService'

export default class AuthStore {
	user: IUser | null = null
	isAuth = false

	constructor() {
		makeAutoObservable(this)
	}

	setAuth(bool: boolean) {
		this.isAuth = bool
	}

	setUser(user: IUser) {
		this.user = user
	}

	async register(email: string, password: string) {
		try {
			const response = await UserService.register(email, password)
			console.log(response)
			localStorage.setItem('token', response.data.accessToken)
			this.setAuth(true)
			this.setUser(response.data.user)
		} catch (error) {
			console.error('Registration failed:', error)
		}
	}

	async login(email: string, password: string) {
		try {
			const response = await UserService.login(email, password)
			localStorage.setItem('token', response.data.accessToken)
			this.setAuth(true)
			this.setUser(response.data.user)
		} catch (error) {
			console.error('Login failed:', error)
		}
	}

	async logout() {
		try {
			await UserService.logout()
			localStorage.removeItem('token')
			this.setAuth(true)
			this.setUser({} as IUser)
		} catch (error) {
			console.error('Logout failed:', error)
		}
	}

	async checkAuth() {
		try {
			const response = await axios.get<AuthResponse>(
				`${API_URL}/user/refresh`,
				{
					withCredentials: true
				}
			)
			localStorage.setItem('token', response.data.accessToken)
			this.setAuth(true)
			this.setUser(response.data.user)
		} catch (error: any) {
			console.log(error.response?.data?.message)
		}
	}
}
