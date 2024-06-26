import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../main'
import BookingService from '../../services/BookingService'
import '../../styles/components/_userPanel.scss'
import ExpandIcon from '../icons/ExpandIcon'
import UserIcon from '../icons/UserIcon'

const UserPanel: React.FC = () => {
	const { store } = useContext(AuthContext)
	const [isExpanded, setIsExpanded] = useState(false)

	const handleLogout = async () => {
		try {
			await store.logout()
			alert('Logout successful')
		} catch (error) {
			console.error('Logout error:', error)
		}
	}

	const handleViewBookingHistory = async () => {
		try {
			const response = await BookingService.viewBookingHistory()
			console.log('Booking history:', response.data)
		} catch (error) {
			console.error('Error fetching booking history:', error)
		}
	}

	useEffect(() => {
		if (!store.user) {
			setIsExpanded(false)
		}
	}, [store.user])

	return (
		<div className='user__panel'>
			<div
				className='user__panel_info'
				onClick={() => setIsExpanded(!isExpanded)}
			>
				<div className='user'>
					<UserIcon color='var(--auth-button-text)' />
					<ExpandIcon color='var(--auth-button-text)' />
				</div>
				{isExpanded && (
					<div className='user__panel_info-details'>
						<p>{store.user?.email}</p>
						{/* <p>Id: {store.user?._id}</p> */}
						<p>Role: {store.user?.role}</p>
						{/* <p>Activated: {store.user?.isActivated}</p> */}
						<button onClick={handleViewBookingHistory}>
							View Booking History
						</button>
						<button onClick={handleLogout}>Logout</button>
					</div>
				)}
			</div>
		</div>
	)
}

export default UserPanel
