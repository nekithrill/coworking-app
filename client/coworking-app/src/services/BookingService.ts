import { AxiosResponse } from 'axios'
import $api from '../http'
import { IBooking } from '../models/entities/IBooking'

export default class BookingService {
	static async createBooking(
		userId: string,
		workspaceId: string,
		tariffId: string,
		bookingData?: Partial<IBooking>
	): Promise<AxiosResponse<IBooking>> {
		return $api.post<IBooking>('/booking/create', {
			userId,
			workspaceId,
			tariffId,
			...bookingData
		})
	}

	static async getAllBookings(): Promise<AxiosResponse<IBooking[]>> {
		return $api.get<IBooking[]>('/booking/all')
	}

	static async viewBookingHistory(): Promise<AxiosResponse<IBooking[]>> {
		return $api.get<IBooking[]>('/booking/history')
	}

	static async getBookingById(
		bookingId: string
	): Promise<AxiosResponse<IBooking>> {
		return $api.get<IBooking>(`/booking/${bookingId}`)
	}

	static async updateBookingById(
		bookingId: string,
		bookingData: Partial<IBooking>
	): Promise<AxiosResponse<IBooking>> {
		return $api.put<IBooking>(`/booking/edit/${bookingId}`, bookingData)
	}

	static async cancelBooking(
		bookingId: string
	): Promise<AxiosResponse<{ message: string; booking?: IBooking }>> {
		return $api.put<{ message: string; booking?: IBooking }>(
			`/booking/cancel/${bookingId}`
		)
	}

	static async deleteBookingById(
		bookingId: string
	): Promise<AxiosResponse<{ message: string }>> {
		return $api.delete<{ message: string }>(`/booking/delete/${bookingId}`)
	}
}
