import React, { ReactNode, createContext, useContext, useState } from 'react'

interface Notification {
	message: string
	type: 'success' | 'error' | 'info'
}

interface NotificationContextType {
	notification: Notification | null
	showNotification: (
		message: string,
		type: 'success' | 'error' | 'info'
	) => void
	hideNotification: () => void
}

const NotificationContext = createContext<NotificationContextType | undefined>(
	undefined
)

export const useNotification = () => {
	const context = useContext(NotificationContext)
	if (!context) {
		throw new Error(
			'useNotification must be used within a NotificationProvider'
		)
	}
	return context
}

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({
	children
}) => {
	const [notification, setNotification] = useState<Notification | null>(null)

	const showNotification = (
		message: string,
		type: 'success' | 'error' | 'info'
	) => {
		setNotification({ message, type })
		setTimeout(() => {
			setNotification(null)
		}, 3000)
	}

	const hideNotification = () => {
		setNotification(null)
	}

	return (
		<NotificationContext.Provider
			value={{ notification, showNotification, hideNotification }}
		>
			{children}
		</NotificationContext.Provider>
	)
}
