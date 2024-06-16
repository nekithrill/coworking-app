// HomePage.tsx
import React, { useContext, useEffect, useState } from 'react'
import BookingModal from '../components/booking/BookingModal'
import { AuthContext } from '../main'
import { ITariff } from '../models/entities/ITariff'
import { IWorkspace } from '../models/entities/IWorkspace'
import TariffService from '../services/TariffService'
import WorkspaceService from '../services/WorkspaceService'
import '../styles/layout/_homePage.scss'

const HomePage: React.FC = () => {
	const [isBookingModalOpen, setBookingModalOpen] = useState(false)
	const [workspaces, setWorkspaces] = useState<IWorkspace[]>([])
	const [tariffs, setTariffs] = useState<ITariff[]>([])

	const { store } = useContext(AuthContext)
	const user = store.user

	const openBookingModal = () => {
		if (user) {
			setBookingModalOpen(true)
		} else {
			alert('Please log in to make a booking.')
		}
	}

	const closeBookingModal = () => setBookingModalOpen(false)

	useEffect(() => {
		const fetchWorkspaces = async () => {
			try {
				const response = await WorkspaceService.getAllWorkspaces()
				setWorkspaces(response.data)
			} catch (error) {
				console.error('Error fetching workspaces:', error)
			}
		}

		const fetchTariffs = async () => {
			try {
				const response = await TariffService.getAllTariffs()
				setTariffs(response.data)
			} catch (error) {
				console.error('Error fetching tariffs:', error)
			}
		}

		fetchWorkspaces()
		fetchTariffs()
	}, [])

	useEffect(() => {
		if (localStorage.getItem('token')) {
			store.checkAuth()
		}
	}, [store])

	return (
		<div className='home'>
			<div className='home__hero'>
				<h1>Home title</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, sint
					omnis. Veniam, mollitia amet animi necessitatibus suscipit ipsum
					architecto, qui magnam ad laudantium nesciunt officiis.
				</p>
			</div>

			<button className='bookingButton' onClick={openBookingModal}>
				Make Booking
			</button>

			<BookingModal
				isOpen={isBookingModalOpen}
				onClose={closeBookingModal}
				userId={store.user ? store.user.id : 'empty'}
				workspaces={workspaces}
				tariffs={tariffs}
			/>
		</div>
	)
}

export default HomePage
