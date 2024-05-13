import { AxiosResponse } from 'axios'
import $api from '../http'
import { IWorkspace } from '../models/entities/IWorkspace'

export default class WorkspaceService {
	static async createWorkspace(
		name: string,
		description: string,
		capacity: number,
		location: string,
		coefficient: number,
		type: 'Office' | 'Co-Working' | 'Meeting Room' | 'Event Space',
		workspaceData: Partial<IWorkspace> = {}
	): Promise<AxiosResponse<IWorkspace>> {
		const workspacePayload: Partial<IWorkspace> = {
			name,
			description,
			capacity,
			location,
			coefficient,
			type,
			...workspaceData
		}

		return $api.post<IWorkspace>('/workspace/create', workspacePayload)
	}

	static async getAllWorkspaces(): Promise<AxiosResponse<IWorkspace[]>> {
		return $api.get<IWorkspace[]>('/workspace/all')
	}

	static async getWorkspaceById(
		workspaceId: string
	): Promise<AxiosResponse<IWorkspace>> {
		return $api.get<IWorkspace>(`/workspace/${workspaceId}`)
	}

	static async updateWorkspaceById(
		workspaceId: string,
		workspaceData: Partial<IWorkspace>
	): Promise<AxiosResponse<IWorkspace>> {
		return $api.put<IWorkspace>(`/workspace/edit/${workspaceId}`, workspaceData)
	}

	static async deleteWorkspaceById(
		workspaceId: string
	): Promise<AxiosResponse<void>> {
		return $api.delete<void>(`/workspace/delete/${workspaceId}`)
	}
}
