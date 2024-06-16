export interface IUser {
	id: string
	email: string
	password: string
	role: 'user' | 'admin' | 'creator'
	isActivated: boolean
	activationLink?: string
	firstName?: string
	lastName?: string
	gender?: 'male' | 'female' | 'other'
	dateOfBirth?: Date
	phoneNumber?: string
	profilePicture?: string
}
