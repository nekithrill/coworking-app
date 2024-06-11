import { AxiosResponse } from 'axios'
import $api from '../http'
import { ITariff } from '../models/entities/ITariff'

export default class TariffService {
	static async createTariff(
		name: string,
		description: string,
		price: number,
		duration: 'day' | 'week' | 'month' | 'year',
		tariffData?: Partial<ITariff>
	): Promise<AxiosResponse<ITariff>> {
		const tariffPayload = {
			name,
			description,
			price,
			duration,
			...tariffData
		}
		return $api.post<ITariff>('/tariff/create', tariffPayload)
	}

	static async getAllTariffs(): Promise<AxiosResponse<ITariff[]>> {
		return $api.get<ITariff[]>('/tariff/all')
	}

	static async getTariffById(
		tariffId: string
	): Promise<AxiosResponse<ITariff>> {
		return $api.get<ITariff>(`/tariff/${tariffId}`)
	}

	static async updateTariffById(
		tariffId: string,
		tariffData: Partial<ITariff>
	): Promise<AxiosResponse<ITariff>> {
		return $api.put<ITariff>(`/tariff/edit/${tariffId}`, tariffData)
	}

	static async deleteTariffById(
		tariffId: string
	): Promise<AxiosResponse<void>> {
		return $api.delete<void>(`/tariff/delete/${tariffId}`)
	}
}
