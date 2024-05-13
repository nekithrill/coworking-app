import { ITariff } from './ITariff'
import { IUser } from './IUser'
import { IWorkspace } from './IWorkspace'

export interface IBooking {
	_id: string
	userId: IUser['_id']
	workspaceId: IWorkspace['_id']
	tariffId: ITariff['_id']
	status?: 'active' | 'completed' | 'cancelled' | 'pending'
	startDate?: Date
	endDate?: Date
	paymentStatus?: 'paid' | 'unpaid'
	totalPrice?: number
}
