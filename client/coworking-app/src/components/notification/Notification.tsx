import React from 'react'
import '../../styles/components/_notification.scss'
import { useNotification } from './NotificationContext'

const Notification: React.FC = () => {
	const { notification } = useNotification()

	if (!notification) return null

	return (
		<div className={`notification ${notification.type}`}>
			{notification.message}
		</div>
	)
}

export default Notification
