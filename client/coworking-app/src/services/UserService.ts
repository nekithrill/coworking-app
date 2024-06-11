import { AxiosResponse } from 'axios'
import $api from '../http'
import { IUser } from '../models/entities/IUser'
import { AuthResponse } from '../models/responses/UserResponse'

export default class UserService {
	static async register(
		email: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('/user/register', { email, password })
	}

	static async login(
		email: string,
		password: string
	): Promise<AxiosResponse<AuthResponse>> {
		return $api.post<AuthResponse>('/user/login', { email, password })
	}

	static async logout(): Promise<void> {
		return $api.post('/user/logout')
	}

	static getAllUsers(): Promise<AxiosResponse<IUser[]>> {
		return $api.get<IUser[]>('/user/all')
	}

	static getUserById(id: string): Promise<AxiosResponse<IUser>> {
		return $api.get<IUser>(`/user/${id}`)
	}

	static activateUser(activationLink: string): Promise<AxiosResponse<void>> {
		return $api.get<void>(`/user/activate/${activationLink}`)
	}

	static updateUserById(
		id: string,
		userData: Partial<IUser>
	): Promise<AxiosResponse<IUser>> {
		return $api.put<IUser>(`/user/edit/${id}`, userData)
	}

	static async refresh(): Promise<void> {
		return $api.get('/user/refresh')
	}

	static assingRoleUserById(
		id: string,
		role: string
	): Promise<AxiosResponse<IUser>> {
		return $api.put<IUser>(`/user/role/${id}/${role}`)
	}

	static deleteUserById(id: string): Promise<AxiosResponse<void>> {
		return $api.delete<void>(`/user/delete/${id}`)
	}
}
