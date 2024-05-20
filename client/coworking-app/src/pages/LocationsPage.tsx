import { useEffect, useMemo, useState } from 'react'
import WorkspaceCard from '../components/workspaces/WorkspaceCard'
import { IWorkspace } from '../models/entities/IWorkspace'
import WorkspaceService from '../services/WorkspaceService'
import '../styles/layout/_locationsPage.scss'

const LocationsPage = () => {
	const [data, setData] = useState<IWorkspace[]>([])
	const [loading, setLoading] = useState(true)
	const [activeTab, setActiveTab] = useState<string | null>(null)

	const workspaceTypes = useMemo(() => {
		const types = new Set<string>()
		data.forEach(item => types.add(item.type))
		return Array.from(types)
	}, [data])

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const response = await WorkspaceService.getAllWorkspaces()
				setData(response.data)
				setActiveTab(response.data[0]?.type || null)
			} catch (error) {
				console.error('Error fetching workspaces:', error)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [])

	const filteredWorkspaces = useMemo(() => {
		return data.filter(workspace => workspace.type === activeTab)
	}, [data, activeTab])

	return (
		<div className='locations'>
			<div className='locations__header'>
				<h1>Workspaces</h1>
				<p>On this page you can find all available workspaces.</p>
			</div>

			{loading ? (
				<p>Loading...</p>
			) : (
				<>
					<div className='locations__content'>
						<div className='locations__tabs'>
							{workspaceTypes.map(type => (
								<button
									key={type}
									className={`locations__tab ${
										activeTab === type ? 'active' : ''
									}`}
									onClick={() => setActiveTab(type)}
								>
									{type}
								</button>
							))}
						</div>

						{filteredWorkspaces.map(item => (
							<WorkspaceCard key={item._id} data={item} />
						))}
					</div>
				</>
			)}
		</div>
	)
}

export default LocationsPage
