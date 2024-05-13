import { AxiosResponse } from 'axios'
import $api from '../http'
import { INews } from '../models/entities/INews'

export default class NewsService {
	static async createnews(
		title: string,
		content: string,
		newsData: Partial<INews>
	): Promise<AxiosResponse<INews>> {
		const newsPaylonews = {
			title,
			content,
			...newsData
		}
		return $api.post<INews>(`/news/create`, newsPaylonews)
	}

	static async getAllnewss(): Promise<AxiosResponse<INews[]>> {
		return $api.get<INews[]>(`/news/all`)
	}

	static async getnewsById(newsId: string): Promise<AxiosResponse<INews>> {
		return $api.get<INews>(`/news/${newsId}`)
	}

	static async updatenewsById(
		newsId: string,
		newsData: Partial<INews>
	): Promise<AxiosResponse<INews>> {
		return $api.put<INews>(`/news/edit/${newsId}`, newsData)
	}

	static async deletenewsById(newsId: string): Promise<AxiosResponse<void>> {
		return $api.delete<void>(`/news/delete/${newsId}`)
	}
}
