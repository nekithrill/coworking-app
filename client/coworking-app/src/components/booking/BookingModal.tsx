import React, { useEffect, useState } from 'react'
import { ITariff } from '../../models/entities/ITariff'
import { IWorkspace } from '../../models/entities/IWorkspace'
import BookingService from '../../services/BookingService'
import '../../styles/components/_bookingModal.scss'
import CloseIcon from '../icons/CloseIcon'
import { useNotification } from '../notification/NotificationContext'

interface Props {
	isOpen: boolean
	onClose: () => void
	userId: string
	workspaces: IWorkspace[]
	tariffs: ITariff[]
}

const BookingModal: React.FC<Props> = ({
	isOpen,
	onClose,
	userId,
	workspaces,
	tariffs
}) => {
	const [workspaceId, setWorkspaceId] = useState('')
	const [tariffId, setTariffId] = useState('')
	const [totalPrice, setTotalPrice] = useState(0)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')
	const [selectedTariff, setSelectedTariff] = useState<ITariff | undefined>()
	const [selectedWorkspace, setSelectedWorkspace] = useState<
		IWorkspace | undefined
	>()

	const { showNotification } = useNotification()

	useEffect(() => {
		const selectedTariff = tariffs.find(
			(tariff: ITariff) => tariff._id === tariffId
		)
		const selectedWorkspace = workspaces.find(
			(workspace: IWorkspace) => workspace._id === workspaceId
		)
		setSelectedTariff(selectedTariff)
		setSelectedWorkspace(selectedWorkspace)
		if (selectedTariff && selectedWorkspace) {
			setTotalPrice(selectedTariff.price * selectedWorkspace.coefficient)
		}
	}, [workspaceId, tariffId, tariffs, workspaces])

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		setLoading(true)
		setError('')

		try {
			await BookingService.createBooking(userId, workspaceId, tariffId, {
				totalPrice,
				status: 'pending'
			})
			showNotification('Booking successful!', 'success')
			onClose()
		} catch (error) {
			setError('Failed to create booking. Please try again.')
			showNotification('Booking failed. Please try again.', 'error')
		} finally {
			setLoading(false)
		}
	}

	if (!isOpen) return null

	return (
		<div className='booking-modal-overlay' onClick={onClose}>
			<div className='booking__modal' onClick={e => e.stopPropagation()}>
				<div className='booking__modal-header'>
					<h2>New booking</h2>
					<button className='booking__modal-close' onClick={onClose}>
						<CloseIcon color='black' />
					</button>
				</div>
				<form onSubmit={handleSubmit}>
					<select
						value={workspaceId}
						onChange={e => setWorkspaceId(e.target.value)}
						required
					>
						<option value=''>Select workspace</option>
						{workspaces.map((workspace: IWorkspace) => (
							<option key={workspace._id} value={workspace._id}>
								{workspace.name}
							</option>
						))}
					</select>

					{selectedWorkspace && (
						<div className='info-card'>
							<h3>Selected Workspace</h3>
							<p>Name: {selectedWorkspace.name}</p>
							<p>Capacity: {selectedWorkspace.capacity}</p>
							<p>Coefficient: {selectedWorkspace.coefficient}</p>
							<p>Type: {selectedWorkspace.type}</p>
							{selectedWorkspace.amenities && (
								<>
									<p>Amenities: </p>
									<ul>
										{selectedWorkspace.amenities.map((amenity, index) => (
											<li key={index}>{amenity}</li>
										))}
									</ul>
								</>
							)}
						</div>
					)}

					<select
						value={tariffId}
						onChange={e => setTariffId(e.target.value)}
						required
					>
						<option value=''>Select tariff</option>
						{tariffs.map((tariff: ITariff) => (
							<option key={tariff._id} value={tariff._id}>
								{tariff.name}
							</option>
						))}
					</select>

					{selectedTariff && (
						<div className='info-card'>
							<h3>Selected Tariff</h3>
							<p>Name: {selectedTariff.name}</p>
							<p>Price: ${selectedTariff.price}</p>
							<p>Duration: {selectedTariff.duration}</p>
							{selectedTariff.services && (
								<>
									<p>Services: </p>
									<ul>
										{selectedTariff.services.map((service, index) => (
											<li key={index}>{service}</li>
										))}
									</ul>
								</>
							)}
						</div>
					)}

					<p>Total Price: ${totalPrice.toFixed(2)}</p>
					{error && <p className='error'>{error}</p>}

					<button type='submit' disabled={loading}>
						{loading ? 'Booking...' : 'Book'}
					</button>
				</form>
			</div>
		</div>
	)
}

export default BookingModal
