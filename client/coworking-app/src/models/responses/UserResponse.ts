import { IUser } from '../entities/IUser'

export interface AuthResponse {
	accessToken: string
	refreshToken: string
	user: IUser
}
