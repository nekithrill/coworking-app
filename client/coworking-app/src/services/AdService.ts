import { AxiosResponse } from 'axios'
import $api from '../http'
import { INewsAndAds } from '../models/entities/INewsAndAds'

export default class AdService {
	static async createAd(
		title: string,
		content: string,
		adData: Partial<INewsAndAds>
	): Promise<AxiosResponse<INewsAndAds>> {
		const adPayload = {
			title,
			content,
			...adData
		}
		return $api.post<INewsAndAds>(`/ad/create`, adPayload)
	}

	static async getAllAds(): Promise<AxiosResponse<INewsAndAds[]>> {
		return $api.get<INewsAndAds[]>(`/ad/all`)
	}

	static async getAdById(adId: string): Promise<AxiosResponse<INewsAndAds>> {
		return $api.get<INewsAndAds>(`/ad/${adId}`)
	}

	static async updateAdById(
		adId: string,
		adData: Partial<INewsAndAds>
	): Promise<AxiosResponse<INewsAndAds>> {
		return $api.put<INewsAndAds>(`/ad/edit/${adId}`, adData)
	}

	static async deleteAdById(adId: string): Promise<AxiosResponse<void>> {
		return $api.delete<void>(`/ad/delete/${adId}`)
	}
}
