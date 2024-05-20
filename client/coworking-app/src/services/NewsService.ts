import { AxiosResponse } from 'axios'
import $api from '../http'
import { INewsAndAds } from '../models/entities/INewsAndAds'

export default class NewsService {
	static async createnews(
		title: string,
		content: string,
		newsData: Partial<INewsAndAds>
	): Promise<AxiosResponse<INewsAndAds>> {
		const newsPaylonews = {
			title,
			content,
			...newsData
		}
		return $api.post<INewsAndAds>(`/news/create`, newsPaylonews)
	}

	static async getAllNews(): Promise<AxiosResponse<INewsAndAds[]>> {
		return $api.get<INewsAndAds[]>(`/news/all`)
	}

	static async getnewsById(
		newsId: string
	): Promise<AxiosResponse<INewsAndAds>> {
		return $api.get<INewsAndAds>(`/news/${newsId}`)
	}

	static async updatenewsById(
		newsId: string,
		newsData: Partial<INewsAndAds>
	): Promise<AxiosResponse<INewsAndAds>> {
		return $api.put<INewsAndAds>(`/news/edit/${newsId}`, newsData)
	}

	static async deletenewsById(newsId: string): Promise<AxiosResponse<void>> {
		return $api.delete<void>(`/news/delete/${newsId}`)
	}
}
