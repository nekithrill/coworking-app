import { useEffect, useState } from 'react'
import TariffCard from '../components/tariffs/TariffCard'
import { ITariff } from '../models/entities/ITariff'
import TariffService from '../services/TariffService'
import '../styles/layout/_tariffsPage.scss'

const TariffsPage = () => {
	const [data, setData] = useState<ITariff[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const response = await TariffService.getAllTariffs()
				setData(response.data)
			} catch (error) {
				console.error('Error fetching tariffs:', error)
			} finally {
				setLoading(false)
			}
		}
		fetchData()
	}, [])

	return (
		<div className='tariffs'>
			<div className='tariffs__header'>
				<h1>Tariffs</h1>
				<p>On this page you can find all available tariffs.</p>
			</div>

			{loading ? (
				<p>Loading...</p>
			) : (
				<div className='tariffs__content'>
					{data.map(item => (
						<TariffCard key={item._id} data={item} />
					))}
				</div>
			)}
		</div>
	)
}

export default TariffsPage
