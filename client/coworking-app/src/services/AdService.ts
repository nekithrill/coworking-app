import { AxiosResponse } from 'axios'
import $api from '../http'
import { IAd } from '../models/entities/IAd'

export default class AdService {
	static async createAd(
		title: string,
		content: string,
		adData: Partial<IAd>
	): Promise<AxiosResponse<IAd>> {
		const adPayload = {
			title,
			content,
			...adData
		}
		return $api.post<IAd>(`/ad/create`, adPayload)
	}

	static async getAllAds(): Promise<AxiosResponse<IAd[]>> {
		return $api.get<IAd[]>(`/ad/all`)
	}

	static async getAdById(adId: string): Promise<AxiosResponse<IAd>> {
		return $api.get<IAd>(`/ad/${adId}`)
	}

	static async updateAdById(
		adId: string,
		adData: Partial<IAd>
	): Promise<AxiosResponse<IAd>> {
		return $api.put<IAd>(`/ad/edit/${adId}`, adData)
	}

	static async deleteAdById(adId: string): Promise<AxiosResponse<void>> {
		return $api.delete<void>(`/ad/delete/${adId}`)
	}
}
