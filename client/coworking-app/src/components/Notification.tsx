import React from 'react'
import '../../styles/components/_notification.scss'

interface NotificationProps {
	message: string
	onClose: () => void
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
	return (
		<div className='notification'>
			<span className='notification-message'>{message}</span>
			<button className='notification-close' onClick={onClose}>
				&times;
			</button>
		</div>
	)
}

export default Notification
